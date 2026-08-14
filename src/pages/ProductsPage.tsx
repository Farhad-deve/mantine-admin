import { FiPlus } from "react-icons/fi"; 
import { Button, Group, Modal, NumberInput, Select, Stack, Text, TextInput, Title } from '@mantine/core'
import AllProductsTable from "../components/AllProductsTable";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import type { Product } from "../types/types";
import { useState } from "react";

const Products = () => {

  const initialProducts: Product[] = [
    { id: 1, name: "Aurora klaviatura", category: "Aksessuar", price: 349000, stock: 42, status: "active", rating: 5 },
    { id: 2, name: "Nova simsiz sichqoncha", category: "Aksessuar", price: 189000, stock: 8, status: "active", rating: 4 },
    { id: 3, name: "Lumen 27 monitor", category: "Monitor", price: 3200000, stock: 0, status: "archived", rating: 4 },
    { id: 4, name: "Echo quloqchin", category: "Audio", price: 720000, stock: 25, status: "active", rating: 5 },
    { id: 5, name: "Pulse veb-kamera", category: "Video", price: 540000, stock: 3, status: "draft", rating: 3 },
    { id: 6, name: "Slate noutbuk stend", category: "Aksessuar", price: 210000, stock: 61, status: "active", rating: 4 },
    { id: 7, name: "Orbit mikrofon", category: "Audio", price: 890000, stock: 14, status: "active", rating: 5 },
    { id: 8, name: "Nimbus USB-C hub", category: "Aksessuar", price: 430000, stock: 0, status: "draft", rating: 3 },
  ];

  const [AddProductOpened, { open: openAddProduct, close: closeAddProduct }] = useDisclosure(false);
  const [ConfirmOpened, { open: openConfirm, close: closeConfirm }] = useDisclosure(false);

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

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

  const handleAddProduct = () => {
    const validation = form.validate();

    // If the form is not valid, do nothing
    if (validation.hasErrors) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: form.values.name,
      category: form.values.category,
      price: form.values.price,
      stock: form.values.stock,
      status: "draft",
      rating: 4
    };
    
    // Adds the new product to the start of the array
    setProducts((current) => [newProduct, ...current]);

    // Resets the form and closes the modal
    form.reset();
    closeAddProduct();
  };

  // Opens the delete confirmation modal, and stores the product id
  const handleDeleteRequest = (id: number) => {
    setSelectedProductId(id);
    openConfirm();
  };

  const handleDeleteProduct = (id: number) => {
    // Removes the product from the array
    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );
  };

  // Deletes the product and closes the confirmation modal
  const handleConfirmDelete = () => {
    if (selectedProductId === null) return;

    handleDeleteProduct(selectedProductId);

    setSelectedProductId(null);
    closeConfirm();
  };

  return (
    <>
        <Stack gap={"lg"}>
          {/* Adding product modal */}
          <Modal opened={AddProductOpened} onClose={closeAddProduct} title="Yangi mahsulot" centered>
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
                <Button onClick={() => { form.reset(); closeAddProduct() }} variant="default">Bekor qilish</Button>
                <Button onClick={handleAddProduct}>Saqlash</Button>
              </Group>
            </Stack>
          </Modal>

          {/* Deletion confirmation modal */}
          <Modal opened={ConfirmOpened} onClose={closeConfirm} withCloseButton={false} title="Mahsulotni o'chirmoqchimisiz?" centered>
              <Group justify="flex-end" mt={"sm"}>
                <Button onClick={() => { setSelectedProductId(null); closeConfirm() }} variant="default">Bekor qilish</Button>
                <Button onClick={handleConfirmDelete} color="red">O'chirish</Button>
              </Group>
          </Modal>

          <Group justify="space-between" align="flex-end">
            <Stack gap={"4px"}>
              <Title>Mahsulotlar</Title>
              <Text c={"dimmed"} size="sm">Jami 8 ta mahsulot — jadval, qidiruv, modal va sahifalash</Text>
            </Stack>
            <Button onClick={openAddProduct} leftSection={<FiPlus size={16} />}>Mahsulot qo'shish</Button>
          </Group>

          <AllProductsTable products={products} onDeleteRequest={handleDeleteRequest} />
        </Stack>
    </>
  )
}

export default Products