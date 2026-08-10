import { FiAlertCircle, FiRotateCcw, FiCheck } from "react-icons/fi"; 
import { Alert, Badge, Box, Button, Card, Code, ColorSwatch, Grid, Group, Progress, SegmentedControl, Stack, Text, TextInput, Title, Tooltip, useMantineColorScheme, type MantineRadius } from "@mantine/core"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {

  const colorSwatchData = [
    { color: "blue", value: "var(--mantine-color-blue-6)" },
    { color: "brand", value: "var(--mantine-color-brand-6)" },
    { color: "teal", value: "var(--mantine-color-teal-6)" },
    { color: "grape", value: "var(--mantine-color-grape-6)" },
    { color: "orange", value: "var(--mantine-color-orange-6)" },
    { color: "red", value: "var(--mantine-color-red-6)" },
  ];

  const { primaryColor, setPrimaryColor, defaultRadius, setDefaultRadius } = useContext(ThemeContext)!;
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleReset = () => {
    setPrimaryColor("blue");
    setDefaultRadius("sm");
    setColorScheme("auto");
  }

  const currentThemeCode = `createTheme({
  primaryColor: "${primaryColor}",
  defaultRadius: "${defaultRadius}",
})
  
// colorScheme: "${colorScheme}"`

  return (
    <>
        <Stack gap={"lg"}>
          <Stack gap={"4px"}>
            <Title order={2} fw={500}>Sozlamalar</Title>
            <Text c={"dimmed"} size="sm">Theme object bilan tajriba qiling — o'zgarish barcha sahifalarga tarqaladi</Text>
          </Stack>
          
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Card withBorder>
                  <Stack gap={"sm"}>
                    <Box>
                      <Text fw={500}>1. Rangli rejim</Text>
                      <Text c={"dimmed"} size="sm">
                        <Code>useMantineColorScheme()</Code>{" "}
                        hook'i orqali boshqariladi
                      </Text>
                    </Box>

                  <SegmentedControl transitionDuration={0}
                  value={colorScheme}
                  onChange={setColorScheme}
                  data={[
                    { label: "Yorug'", value: "light" },
                    { label: "Qorong'i", value: "dark" },
                    { label: "Avtomatik", value: "auto" },
                  ]} />
                  </Stack>
                </Card>

                <Card withBorder>
                  <Stack gap={"sm"}>
                    <Box>
                      <Text fw={500}>2. Asosiy rang</Text>
                      <Text c={"dimmed"} size="sm">Theme'dagi <Code>primaryColor</Code> maydoni</Text>
                    </Box>

                    <Group gap={"sm"}>
                      {colorSwatchData.map((color) => (
                        <Tooltip key={color.color} label={color.color}>
                          <ColorSwatch
                            size={"2rem"}
                            component="button"
                            onClick={() => setPrimaryColor(color.color)} 
                            color={color.value}
                            style={{ cursor: "pointer" }}>
                              {primaryColor === color.color && <FiCheck />}
                          </ColorSwatch>
                        </Tooltip>
                      ))}
                    </Group>

                    <Text c={"dimmed"} size="xs">"brand" — mantine-theme.ts da o'zimiz qo'shgan rang</Text>
                  </Stack>
                </Card>

                <Card withBorder>
                  <Stack gap={"sm"}>
                    <Box>
                      <Text fw={500}>3. Burchaklar</Text>
                      <Text c={"dimmed"} size="sm">Theme'dagi <Code>defaultRadius</Code> maydoni </Text>
                    </Box>
                  
                    <SegmentedControl
                      value={defaultRadius}
                      onChange={(value) => setDefaultRadius(value as MantineRadius)}
                      data={[
                        { label: "XS", value: "xs" },
                        { label: "SM", value: "sm" },
                        { label: "MD", value: "md" },
                        { label: "LG", value: "lg" },
                        { label: "XL", value: "xl" },
                      ]}
                    />
                  </Stack>
                </Card>

                <Button
                  variant="default"
                  onClick={handleReset}
                  leftSection={<FiRotateCcw size={15} />}>
                  Standart holatga qaytarish
                </Button>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder>
                <Stack>
                  <Group justify="space-between">
                    <Text fw={500}>Jonli ko'rinish</Text>
                    <Badge variant="light">{primaryColor}</Badge>
                  </Group>

                  <Group>
                    <Button>Asosiy</Button>
                    <Button variant="light">Yengil</Button>
                    <Button variant="outline">Chiziqli</Button>
                    <Button variant="default">Default</Button>
                  </Group>

                  <Group>
                    <Badge>YANGI</Badge>
                    <Badge variant="light" color="green">FAOL</Badge>
                    <Badge variant="outline" color="red">MUHIM</Badge>
                  </Group>

                  <TextInput label="Input namunasi" placeholder="Matn kiriting" />
                  <Progress value={72} />

                  <Alert title="Eslatma" icon={<FiAlertCircle style={{ transform: "rotate(180deg)" }} />}>
                    Bu blokdagi hamma narsa theme qiymatlariga bog'langan.
                  </Alert>

                  <Box>
                    <Stack gap={"3px"}>
                      <Text fw={500} size="sm">Joriy theme:</Text>
                      <Code block>
                          {currentThemeCode}
                      </Code>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
    </>
  )
}

export default Settings