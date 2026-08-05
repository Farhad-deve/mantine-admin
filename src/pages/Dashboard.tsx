import { FiTrendingUp } from "react-icons/fi"; 
import { FiDollarSign, FiShoppingBag, FiUsers } from "react-icons/fi"; 
import { Badge, Box, Card, Center, Grid, Group, Progress, RingProgress, SemiCircleProgress, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core"


const Dashboard = () => {

  const kpiCardsData = [
    { id: 1, title: "Umumiy daromad", value: "48.2 mln", progressValue: 78, change: "+12.4%", isPositiveChange: true, icon: FiDollarSign, color: "blue" },
    { id: 2, title: "Buyurtmalar", value: "1 284", progressValue: 65, change: "+8.1%", isPositiveChange: true, icon: FiShoppingBag, color: "teal" },
    { id: 3, title: "Yangi mijozlar", value: "342", progressValue: 40, change: "-3.2%", isPositiveChange: false, icon: FiUsers, color: "grape" },
    { id: 4, title: "Konversiya", value: "4.7%", progressValue: 45, change: "+1.8%", isPositiveChange: true, icon: FiTrendingUp, color: "orange" },
  ];

  const MonthlyGoals = [
    { label: "Savdo rejasi", value: 78, color: "blue" },
    { label: "Yangi mijozlar", value: 52, color: "teal" },
    { label: "Qaytgan mijozlar", value: 34, color: "grape" },
    { label: "Ombor to'ldirish", value: 91, color: "orange" },
  ];

  const trafficSources = [
    { label: "To'g'ridan-to'g'ri", value: 42, color: "blue" },
    { label: "Ijtimoiy tarmoq", value: 28, color: "teal" },
    { label: "Qidiruv", value: 20, color: "grape" },
    { label: "Boshqa", value: 10, color: "gray" },
  ];

  return (
    <>
    <Stack>
      <Stack gap={"4px"}>
        <Title fw={500} order={2}>Dashboard</Title>
        <Text c={"dimmed"} size="sm">Mantine'ning statistika komponentlari: Progress, RingProgress, SemiCircleProgress, Table, Timeline</Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, xs: 2, lg: 4 }}>
        {kpiCardsData.map((kpiCard) => (
          <Card key={kpiCard.id} withBorder>
            <Stack gap={"xs"}>
              <Group justify="space-between">
                  <Stack gap={"2px"}>
                    <Text c={"dimmed"} fw={500} size="xs">{kpiCard.title}</Text>
                    <Text size="xl" fw={"bold"}>{kpiCard.value}</Text>
                  </Stack>
                  <ThemeIcon variant="light" color={kpiCard.color} size={"lg"}>{<kpiCard.icon size={18} />}</ThemeIcon>
              </Group>

              <Progress value={kpiCard.progressValue} color={kpiCard.color} h={5} />

              <Group gap={"xs"}>
                <Badge size="sm" variant="light" color={kpiCard.isPositiveChange ? "green" : "red"}>
                  {kpiCard.change}
                </Badge>
                <Text c={"dimmed"} size="xs">o'tgan oyga nisbatan</Text>
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      <Grid align="stretch">
        <Grid.Col span={{ base: 12, lg: 4}}>
          <Card h={"100%"} withBorder>
            <Stack>
              <Text fw={500}>Oylik maqsadlar</Text>
              {MonthlyGoals.map((goal) => (
                <Stack gap={"3px"}>
                  <Group justify="space-between">
                    <Text size="sm">{goal.label}</Text>  
                    <Text fw={500} size="sm">{goal.value}%</Text>
                  </Group>
                  <Progress value={goal.value} color={goal.color} />
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4}}>
          <Card h={"100%"} withBorder>
            <Stack>
              <Text fw={500}>Trafik manbalari</Text>
              <Center>
                <RingProgress size={150}
                  thickness={15}
                  label={
                    <Text fw={700} ta={"center"}>18.4k</Text>
                  }
                    sections={
                      trafficSources.map((source) => ({
                        value: source.value,
                        color: source.color,
                        tooltip: `${source.label}: ${source.value}%`,
                      }))
                    }
                  />
              </Center>
              <Stack gap={"6px"}>
                  {trafficSources.map((source) => (
                    <Group justify="space-between">
                      <Group gap={"xs"}>
                        <Badge color={source.color} size="xs" circle></Badge>
                        <Text size="sm">{source.label}</Text>
                      </Group>

                      <Text c={"dimmed"} size="sm">{source.value}%</Text>
                    </Group>
                  ))}
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4}}>
          <Card h={"100%"} withBorder>
            <Stack>
              <Text fw={500}>Reja bajarilishi</Text>
            
              <Center>
                <SemiCircleProgress 
                  size={200}
                  label="68% bajarildi"
                  value={68}
                />
              </Center>
              <Text ta={"center"} size="sm" c={"dimmed"}>Mart oyi uchun savdo rejasi</Text>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

    </Stack>
    </>
  )
}

export default Dashboard