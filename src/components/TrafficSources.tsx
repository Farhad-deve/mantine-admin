import { Badge, Card, Center, Group, RingProgress, Stack, Text } from "@mantine/core";

const TrafficSources = () => {

    const trafficSources = [
        { label: "To'g'ridan-to'g'ri", value: 42, color: "blue" },
        { label: "Ijtimoiy tarmoq", value: 28, color: "teal" },
        { label: "Qidiruv", value: 20, color: "grape" },
        { label: "Boshqa", value: 10, color: "gray" },
    ];

  return (
    <>
      <Card h={"100%"} withBorder>
        <Stack>
          <Text fw={500}>Trafik manbalari</Text>
          <Center>
            <RingProgress
              size={150}
              thickness={15}
              label={
                <Text fw={700} ta={"center"}>
                    18.4k
                </Text>
              }
              sections={trafficSources.map((source, index) => ({
                value: source.value,
                color: source.color,
                key: index,
                tooltip: `${source.label}: ${source.value}%`,
              }))}
            />
          </Center>
          <Stack gap={"6px"}>
            {trafficSources.map((source, index) => (
              <Group key={index} justify="space-between">
                <Group gap={"xs"}>
                  <Badge color={source.color} size="xs" circle></Badge>
                  <Text size="sm">{source.label}</Text>
                </Group>

                <Text c={"dimmed"} size="sm">
                  {source.value}%
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>
      </Card>
    </>
  );
};

export default TrafficSources;
