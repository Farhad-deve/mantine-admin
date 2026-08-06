import { Card, Group, Progress, Stack, Text } from "@mantine/core";

const MonthlyGoals = () => {
    const MonthlyGoals = [
        { id: 1, label: "Savdo rejasi", value: 78, color: "blue" },
        { id: 2, label: "Yangi mijozlar", value: 52, color: "teal" },
        { id: 3, label: "Qaytgan mijozlar", value: 34, color: "grape" },
        { id: 4, label: "Ombor to'ldirish", value: 91, color: "orange" },
    ];
  return (
    <>
      <Card h={"100%"} withBorder>
        <Stack>
          <Text fw={500}>Oylik maqsadlar</Text>
          {MonthlyGoals.map((goal) => (
            <Stack key={goal.id} gap={"3px"}>
              <Group justify="space-between">
                <Text size="sm">{goal.label}</Text>
                <Text fw={500} size="sm">
                  {goal.value}%
                </Text>
              </Group>
              <Progress value={goal.value} color={goal.color} />
            </Stack>
          ))}
        </Stack>
      </Card>
    </>
  );
};

export default MonthlyGoals;
