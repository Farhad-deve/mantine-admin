import { FiRotateCcw } from "react-icons/fi"; 
import { FiCheck } from "react-icons/fi"; 
import { ActionIcon, Box, Button, Card, Code, ColorSwatch, Grid, Group, SegmentedControl, Stack, Text, ThemeIcon, Title, Tooltip, UnstyledButton } from "@mantine/core"
import { useState } from "react";

const Settings = () => {

  const colorSwatchData = [
    { color: "blue", value: "var(--mantine-color-blue-6)" },
    { color: "brand", value: "var(--mantine-color-brand-6)" },
    { color: "teal", value: "var(--mantine-color-teal-6)" },
    { color: "grape", value: "var(--mantine-color-grape-6)" },
    { color: "orange", value: "var(--mantine-color-orange-6)" },
    { color: "red", value: "var(--mantine-color-red-6)" },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <>
        <Stack>
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

                  <SegmentedControl data={[
                    { label: "Yorug'", value: "light" },
                    { label: "Qorong'i", value: "dark" },
                    { label: "Avtomatik", value: "auto" },
                  ]} />
                  </Stack>
                </Card>

                <Card>
                  <Stack gap={"sm"}>
                    <Box>
                      <Text fw={500}>2. Asosiy rang</Text>
                      <Text c={"dimmed"} size="sm">Theme'dagi <Code>primaryColor</Code> maydoni</Text>
                    </Box>

                    <Group>
                      {colorSwatchData.map((color) => (
                        <Tooltip key={color.color} label={color.color}>
                          <ColorSwatch
                            component="button"
                            onClick={() => setSelectedColor(color.color)} 
                            color={color.value}
                            style={{ cursor: "pointer" }}>
                              {selectedColor === color.color && <FiCheck size={20} />}
                          </ColorSwatch>
                        </Tooltip>
                      ))}
                    </Group>

                    <Text c={"dimmed"}>"brand" — mantine-theme.ts da o'zimiz qo'shgan rang</Text>
                  </Stack>
                </Card>

                <Card>
                  <Text>3. Burchaklar</Text>
                  <Text>Theme'dagi <Code>defaultRadius</Code> maydoni </Text>
                  <SegmentedControl
                    data={[
                      { label: "XS", value: "xs" },
                      { label: "SM", value: "sm" },
                      { label: "MD", value: "md" },
                      { label: "LG", value: "lg" },
                      { label: "XL", value: "xl" },
                    ]}
                  />
                </Card>

                <Button variant="default" leftSection={<FiRotateCcw />}>
                  Standart holatga qaytarish
                </Button>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
            
            </Grid.Col>
          </Grid>
        </Stack>
    </>
  )
}

export default Settings