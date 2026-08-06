import { Card, Center, SemiCircleProgress, Stack, Text } from "@mantine/core";

const PlanCompletion = () => {
  return (
    <>
      <Card h={"100%"} withBorder>
        <Stack>
          <Text fw={500}>Reja bajarilishi</Text>

          <Center>
            <SemiCircleProgress size={200} label="68% bajarildi" value={68} />
          </Center>
          <Text ta={"center"} size="sm" c={"dimmed"}>
            Mart oyi uchun savdo rejasi
          </Text>
        </Stack>
      </Card>
    </>
  );
};

export default PlanCompletion;
