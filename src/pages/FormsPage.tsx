import { FiCheckCircle } from "react-icons/fi"; 
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Chip,
  Code,
  ColorInput,
  Divider,
  Fieldset,
  Grid,
  Group,
  MultiSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

const Forms = () => {

  useEffect(() => {
    document.title = "Formlar | Mantine Admin";
  }, [])

  const form = useForm({
    initialValues: {
      ism: "",
      parol: "",
      izoh: "",
      yosh: 18,
      shahar: "Toshkent",
      qiziqishlar: ["React"],
      rang: "#228be6",
      kod: "",
      daraja: 40,
      reyting: 4,
      tolov: "karta",
      jins: "erkak",
      obuna: true,
      shartlar: false,
      teglar: ["mantine"],
    },

    validateInputOnChange: true,

    validate: {
      parol: (value) =>
        value.length < 6
          ? "Parol juda qisqa"
          : null,
    },
  });

  const currentCode = JSON.stringify(form.values, null, 2);

  const toggleTags = (value: string) => {
    form.setFieldValue(
      "teglar",
      form.values.teglar.includes(value)
        ? form.values.teglar.filter((item) => item !== value)
        : [...form.values.teglar, value],
    );
  };

  const [submitted, setSubmitted] = useState(false);

  const canSubmit = 
    form.values.ism.trim() !== "" &&
    form.values.shartlar

  return (
    <>
      <Stack gap={"lg"}>
        <Stack gap={"4px"}>
          <Title>Forma elementlari</Title>
          <Text c={"dimmed"} size="sm">
            Har bir komponentni o'zgartirib ko'ring — qiymatlar o'ng tomonda
            darhol yangilanadi
          </Text>
        </Stack>

        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap={"lg"}>
              <Stack>
                <Fieldset legend="Matn kiritish">
                  <Stack gap={"md"}>
                    <TextInput
                      label="Ism"
                      description="TextInput — eng ko'p ishlatiladigan input"
                      placeholder="Ismingizni yozing"
                      leftSection={<FiSearch size={14} />}
                      {...form.getInputProps("ism")}
                    />
                    <PasswordInput
                      label="Parol"
                      placeholder="Kamida 6 ta belgi"
                      {...form.getInputProps("parol")}
                    />
                    <Textarea
                      label="Izoh"
                      placeholder="Fikringizni yozing..."
                      {...form.getInputProps("izoh")}
                    />
                    <Group>
                      <NumberInput
                        flex={1}
                        label="Yosh"
                        placeholder="Yoshingizni yozing"
                        min={0}
                        stepHoldDelay={500}
                        stepHoldInterval={200}
                        {...form.getInputProps("yosh")}
                      />
                      <ColorInput
                        flex={1}
                        label="Sevimli rang"
                        placeholder="Rangni tanlang"
                        {...form.getInputProps("rang")}
                      />
                    </Group>
                  </Stack>
                </Fieldset>

                <Fieldset legend="Tanlash">
                  <Stack gap="md">
                    <Select
                      label="Shahar"
                      placeholder="Shaharni tanlang"
                      data={[
                        "Toshkent",
                        "Samarqand",
                        "Buxoro",
                        "Namangan",
                        "Farg'ona",
                      ]}
                      searchable
                      clearable
                      {...form.getInputProps("shahar")}
                    />
                    <MultiSelect
                      label="Qiziqishlar"
                      data={[
                        "React",
                        "Vue",
                        "Angular",
                        "Node.js",
                        "TypeScript",
                      ]}
                      clearable
                      placeholder="Bir nechtasini tanlang"
                      {...form.getInputProps("qiziqishlar")}
                    />
                    <SegmentedControl
                      data={[
                        { label: "Karta", value: "karta" },
                        { label: "Naqd", value: "naqd" },
                        { label: "Bo'lib to'lash", value: "bolib" },
                      ]}
                      {...form.getInputProps("tolov")}
                    />

                    <Radio.Group
                      label="Jins"
                      name="jins"
                      {...form.getInputProps("jins")}
                    >
                      <Group mt="xs">
                        <Radio value={"erkak"} label="Erkak" />
                        <Radio value={"ayol"} label="Ayol" />
                      </Group>
                    </Radio.Group>

                    <Group gap="xs">
                      {["mantine", "react", "ui", "dashboard"].map((item) => (
                        <Chip
                          key={item}
                          checked={form.values.teglar.includes(item)}
                          onChange={() => toggleTags(item)}
                        >
                          {item}
                        </Chip>
                      ))}
                    </Group>
                  </Stack>
                </Fieldset>

                <Fieldset legend="Boshqaruv elementlari">
                  <Stack gap={"lg"}>
                    <Switch
                      label="Yangiliklarga obuna"
                      description="Haftada bir marta xat olasiz"
                      {...form.getInputProps("obuna", { type: "checkbox" })}
                    />

                    <Checkbox
                      label="Foydalanish shartlariga roziman"
                      {...form.getInputProps("shartlar", { type: "checkbox" })}
                    />

                    <Slider
                      label={(value) => `${value}%`}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 50, label: "50" },
                        { value: 100, label: "100" },
                      ]}
                      mb={"lg"}
                      labelTransitionProps={{
                        transition: "skew-down",
                        duration: 150,
                        timingFunction: "linear",
                      }}
                      {...form.getInputProps("daraja")}
                    />

                    <Group>
                      <Rating {...form.getInputProps("reyting")} />
                      <PinInput
                        length={4}
                        placeholder="○"
                        {...form.getInputProps("kod")}
                      />
                    </Group>
                  </Stack>
                </Fieldset>
              </Stack>

              <Group>
                <Button
                  disabled={!canSubmit}
                  onClick={() => setSubmitted(true)}
                >
                  Yuborish
                </Button>
                <Button variant="default" onClick={() => form.reset()}>
                  Tozalash
                </Button>
              </Group>

              {submitted &&
                <Alert color="teal" title="Forma yuborildi" icon={<FiCheckCircle />} onClose={() => setSubmitted(false)} withCloseButton>
                  Haqiqiy loyihada bu ma'lumot serverga jo'natilardi.
                </Alert>
              }
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card withBorder style={{ position: "sticky" }} top={80}>
              <Text fw={500}>Forma qiymatlari</Text>
              <Divider my={"sm"} />
              <Code block>{currentCode}</Code>

              <Alert title="Maslahat" mt={"md"}>
                Yuborish tugmasi ishlashi uchun ism yozing va shartlarga rozilik
                belgisini qo'ying.
              </Alert>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
};

export default Forms;
