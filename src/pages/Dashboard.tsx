import { Badge, Box, Card, Center, Grid, Group, Progress, RingProgress, SemiCircleProgress, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import KpiStatCard from "../components/KpiStatCard";
import MonthlyGoals from "../components/MonthlyGoals";
import TrafficSources from "../components/TrafficSources";
import PlanCompletion from "../components/PlanCompletion";
import OrdersTable from "../components/OrdersTable";


const Dashboard = () => {

  return (
    <>
    <Stack>
      <Stack gap={"4px"}>
        <Title fw={500} order={2}>Dashboard</Title>
        <Text c={"dimmed"} size="sm">Mantine'ning statistika komponentlari: Progress, RingProgress, SemiCircleProgress, Table, Timeline</Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, xs: 2, lg: 4 }}>
        <KpiStatCard />
      </SimpleGrid>

      <Grid align="stretch">
        <Grid.Col span={{ base: 12, lg: 4}}>
          <MonthlyGoals />
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4}}>
          <TrafficSources />
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4}}>
          <PlanCompletion />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={}>
          <OrdersTable />
        </Grid.Col>

        <Grid.Col span={4}>
          
        </Grid.Col>
      </Grid>

    </Stack>
    </>
  )
}

export default Dashboard