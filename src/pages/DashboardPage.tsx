import { Grid, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import KpiStatCard from "../components/KpiStatCard";
import MonthlyGoals from "../components/MonthlyGoals";
import TrafficSources from "../components/TrafficSources";
import PlanCompletion from "../components/PlanCompletion";
import OrdersTable from "../components/OrdersTable";
import LastTimeline from "../components/LastTimeline";


const Dashboard = () => {

  return (
    <>
    <Stack>
      <Stack gap={"4px"}>
        <Title fw={500}>Dashboard</Title>
        <Text c={"dimmed"} size="sm">Mantine'ning statistika komponentlari: Progress, RingProgress, SemiCircleProgress, Table, Timeline</Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, xs: 2, lg: 4 }}>
        <KpiStatCard />
      </SimpleGrid>

      <Grid align="stretch">
        <Grid.Col span={{ base: 12, md: 4}}>
          <MonthlyGoals />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4}}>
          <TrafficSources />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4}}>
          <PlanCompletion />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <OrdersTable />
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4 }}>
          <LastTimeline />
        </Grid.Col>
      </Grid>
    </Stack>
    </>
  )
}

export default Dashboard