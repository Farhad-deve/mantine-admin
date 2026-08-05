import { Center, Group, Loader, Text } from "@mantine/core"

const LoadingPage = () => {
  return (
    <>
      <Center h={"60vh"}>
        <Group>
            <Loader />
            <Text>Loading...</Text>
        </Group>
      </Center>
    </>
  )
}

export default LoadingPage