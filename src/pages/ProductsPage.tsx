import { FiPlus } from "react-icons/fi"; 
import { Button, Group, Modal, NumberInput, Select, Stack, Text, TextInput, Title } from '@mantine/core'
import AllProductsTable from "../components/AllProductsTable";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

const Products = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      category: "Aksessuar",
      price: 100000,
      stock: 1
    },

    validate: {
      name: (value) =>
        value.trim().length === 0 ? "Mahsulot nomini kiriting" : null,

      price: (value) =>
        value <= 0 ? "Narx 0 dan kam bo'lishi mumkin emas" : null,

      stock: (value) =>
        value <= 0 ? "Ombordagi soni 0 dan kam bo'lishi mumkin emas" : null
    },
  });

  const handleSubmit = () => {
    const validation = form.validate();

    if (validation.hasErrors) {
      return;
    }

    // add product here
  }


  return (
    <>
        <Stack gap={"lg"}>
          <Modal opened={opened} onClose={close} title="Yangi mahsulot" centered>
            <Stack>
              <TextInput
                placeholder="Masalan: Aurora klaviatura"
                label="Nomi"
                withAsterisk
                {...form.getInputProps("name")}
              />

              <Select
                label="Kategoriya"
                data={["Aksessuar", "Monitor", "Audio", "Video"]}
                {...form.getInputProps("category")}
              />

              <Group>
                <NumberInput
                  flex={1}
                  label="Narxi"
                  thousandSeparator=" "
                  step={10000}
                  min={0}
                  stepHoldDelay={200}
                  stepHoldInterval={100}
                  {...form.getInputProps("price")}
                />

                <NumberInput
                  flex={1}
                  label="Ombordagi soni"
                  min={0}
                  thousandSeparator=" "
                  stepHoldDelay={200}
                  stepHoldInterval={100}
                  {...form.getInputProps("stock")}
                />
              </Group>

              <Group justify="flex-end" mt={"sm"}>
                <Button onClick={close} variant="default">Bekor qilish</Button>
                <Button onClick={handleSubmit}>Saqlash</Button>
              </Group>
            </Stack>
          </Modal>

          <Group justify="space-between" align="flex-end">
            <Stack gap={"4px"}>
              <Title>Mahsulotlar</Title>
              <Text c={"dimmed"} size="sm">Jami 8 ta mahsulot — jadval, qidiruv, modal va sahifalash</Text>
            </Stack>
            <Button onClick={open} leftSection={<FiPlus size={16} />}>Mahsulot qo'shish</Button>
          </Group>

          <AllProductsTable />
        </Stack>
    </>
  )
}

export default Products