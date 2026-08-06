import { Badge, Card, Group, Progress, Stack, Text, ThemeIcon } from "@mantine/core";
import {
  FiDollarSign,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const KpiStatCard = () => {
  const kpiCardsData = [
    { id: 1, title: "Umumiy daromad",value: "48.2 mln", progressValue: 78, change: "+12.4%", isPositiveChange: true, icon: FiDollarSign, color: "blue", },
    { id: 2, title: "Buyurtmalar", value: "1 284", progressValue: 65, change: "+8.1%", isPositiveChange: true, icon: FiShoppingBag, color: "teal", },
    { id: 3, title: "Yangi mijozlar", value: "342", progressValue: 40, change: "-3.2%", isPositiveChange: false, icon: FiUsers, color: "grape", },
    { id: 4, title: "Konversiya", value: "4.7%", progressValue: 45, change: "+1.8%", isPositiveChange: true, icon: FiTrendingUp, color: "orange", },
  ];

  return (
    <>
      {kpiCardsData.map((kpiCard) => (
        <Card key={kpiCard.id} withBorder>
          <Stack gap={"xs"}>
            <Group justify="space-between">
              <Stack gap={"2px"}>
                <Text c={"dimmed"} fw={500} size="xs">{kpiCard.title}</Text>
                <Text size="xl" fw={"bold"}>{kpiCard.value}</Text>
              </Stack>
              <ThemeIcon variant="light" color={kpiCard.color} size={"lg"}>
                {<kpiCard.icon size={18} />}
              </ThemeIcon>
            </Group>

            <Progress
              value={kpiCard.progressValue}
              color={kpiCard.color}
              h={5}
            />

            <Group gap={"xs"}>
              <Badge
                size="sm"
                variant="light"
                color={kpiCard.isPositiveChange ? "green" : "red"}
              >
                {kpiCard.change}
              </Badge>
              <Text c={"dimmed"} size="xs">o'tgan oyga nisbatan</Text>
            </Group>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default KpiStatCard;
