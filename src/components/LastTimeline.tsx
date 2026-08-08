import { Card, Stack, Text, Timeline } from "@mantine/core"

const LastTimeline = () => {

    const activityFeed = [
        { title: "Yangi buyurtma", description: "Aziza Karimova #4821 buyurtma berdi", time: "5 daqiqa oldin", color: "blue" },
        { title: "To'lov qabul qilindi", description: "720 000 so'm — Echo quloqchin", time: "1 soat oldin", color: "teal" },
        { title: "Mahsulot tugadi", description: "Lumen 27 monitor omborda qolmadi", time: "3 soat oldin", color: "red" },
        { title: "Yangi foydalanuvchi", description: "Iroda Qodirova ro'yxatdan o'tdi", time: "Kecha", color: "gray" },
    ];

  return (
    <>
        <Card withBorder>
            <Stack gap={"lg"}>
                <Text fw={500}>So'nggi faollik</Text>

                <Timeline active={4} lineWidth={2} bulletSize={16}>
                    {activityFeed.map((feed) => (
                        <Timeline.Item title={feed.title} color={feed.color}>
                            <Text c={"dimmed"} size="xs">{feed.description}</Text>
                            <Text c={"dimmed"} size="xs">{feed.time}</Text>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Stack>
        </Card>    
    </>
  )
}

export default LastTimeline