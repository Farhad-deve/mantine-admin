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
import { FiSearch } from "react-icons/fi";

const Forms = () => {

  const currentCode = 
  `{
  "ism": "",
  "parol": "",
  "izoh": "",
  "yosh": 18,
  "shahar": "Toshkent",
  "qiziqishlar": [
    "React"
  ],
  "rang": "#228be6",
  "kod": "",
  "daraja": 40,
  "reyting": 4,
  "tolov": "karta",
  "jins": "erkak",
  "obuna": true,
  "shartlar": false,
  "teglar": [
    "mantine"
  ]
}`

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
                    <TextInput label="Ism"
                      description="TextInput — eng ko'p ishlatiladigan input"
                      placeholder="Ismingizni yozing"
                      leftSection={<FiSearch size={14} />}
                    />
                    <PasswordInput label="Parol" placeholder="Kamida 6 ta belgi" />
                    <Textarea label="Izoh" placeholder="Fikringizni yozing..." />
                    <Group>
                      <NumberInput
                        flex={1}
                        label="Yosh"
                        placeholder="Yoshingizni yozing"
                        min={0}
                        defaultValue={18}
                      />
                      <ColorInput
                        flex={1}
                        label="Sevimli rang"
                        placeholder="Rangni tanlang"
                        defaultValue="#228be6"
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
                        "Farg'one",
                      ]}
                      searchable
                      clearable
                      defaultValue={"Toshkent"}
                    />
                    <MultiSelect
                      label="Qiziqishlar"
                      data={["React", "Vue", "Angular", "Node.js", "TypeScript"]}
                      clearable
                      placeholder="Bir nechtasini tanlang"
                      defaultValue={["React"]}
                    />
                    <SegmentedControl
                      data={[
                        { label: "Karta", value: "karta" },
                        { label: "Naqd", value: "naqd" },
                        { label: "Bo'lib to'lash", value: "bolib" },
                      ]}
                    />

                    <Radio.Group
                      label="Jins"
                      name="jins"
                      defaultValue={"erkak"}
                    >
                      <Group mt="xs">
                        <Radio value={"erkak"} label="Erkak" />
                        <Radio value={"ayol"} label="Ayol" />
                      </Group>
                    </Radio.Group>

                    <Group gap="xs">
                      <Chip defaultChecked>mantine</Chip>
                      <Chip>react</Chip>
                      <Chip>ui</Chip>
                      <Chip>dashboard</Chip>
                    </Group>
                  </Stack>
                </Fieldset>

                <Fieldset legend="Boshqaruv elementlari">
                  <Stack gap={"lg"}>
                    <Switch defaultChecked label="Yangiliklarga obuna" description="Haftada bir marta xat olasiz" />

                    <Checkbox label="Foydalanish shartlariga roziman" />

                    <Slider
                      defaultValue={40}
                      label={(value) => `${value}%`}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 50, label: "50" },
                        { value: 100, label: "100" },
                      ]}
                      mb={"lg"}
                      labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                      }}
                    />

                    <Group>
                      <Rating defaultValue={4} />
                      <PinInput length={4} placeholder="○" />
                    </Group>
                  </Stack>
                </Fieldset>
              </Stack>

              <Group>
                <Button disabled>Yuborish</Button>
                <Button variant="default">Tozalash</Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card
              withBorder
              style={{ position: "sticky" }}
              top={80}
            >
              <Text fw={500}>Forma qiymatlari</Text>
              <Divider my={"sm"} />
              <Code block>
                {currentCode}
              </Code>

              <Alert title="Maslahat" mt={"md"}>
                Yuborish tugmasi ishlashi uchun ism yozing va shartlarga rozilik belgisini qo'ying.
              </Alert>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
};

export default Forms;
