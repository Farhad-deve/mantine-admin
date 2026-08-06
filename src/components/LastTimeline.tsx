import { Card, Stack, Text, Timeline, TimelineItem } from "@mantine/core"

const LastTimeline = () => {
  return (
    <>
        <Card>
            <Stack>
                <Text>So'nggi faollik</Text>

                <Timeline>
                    <Timeline.Item title="Yangi buyurtma">
                        <Text>Aziza Karimova #4821 buyurtma berdi</Text>
                        <Text>5 daqiqa oldin</Text>
                    </Timeline.Item>

                    <Timeline.Item title="Yangi buyurtma">
                        <Text>Aziza Karimova #4821 buyurtma berdi</Text>
                        <Text>5 daqiqa oldin</Text>
                    </Timeline.Item>

                    <Timeline.Item title="Yangi buyurtma">
                        <Text>Aziza Karimova #4821 buyurtma berdi</Text>
                        <Text>5 daqiqa oldin</Text>
                    </Timeline.Item>

                    <Timeline.Item title="Yangi buyurtma">
                        <Text>Aziza Karimova #4821 buyurtma berdi</Text>
                        <Text>5 daqiqa oldin</Text>
                    </Timeline.Item>
                </Timeline>
            </Stack>
        </Card>    
    </>
  )
}

export default LastTimeline