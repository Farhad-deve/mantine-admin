import { FiMessageSquare } from "react-icons/fi"; 
import { FiMail } from "react-icons/fi"; 
import { FiSearch } from "react-icons/fi"; 
import { FiUserPlus } from "react-icons/fi"; 
import { ActionIcon, Avatar, Badge, Button, Card, Group, Indicator, SimpleGrid, Skeleton, Stack, Tabs, Text, TextInput, Title, Tooltip } from "@mantine/core"
import type { User } from "../types/types";
import { useEffect, useState } from "react";

const Users = () => {

  const users: User[] = [
    { id: 1, name: "Aziza Karimova", email: "aziza@mail.uz", role: "admin", online: true, orders: 48, initials: "AK", color: "blue" },
    { id: 2, name: "Bekzod Rahimov", email: "bekzod@mail.uz", role: "manager", online: true, orders: 31, initials: "BR", color: "teal" },
    { id: 3, name: "Dilnoza Yusupova", email: "dilnoza@mail.uz", role: "mijoz", online: false, orders: 12, initials: "DY", color: "grape" },
    { id: 4, name: "Eldor Tursunov", email: "eldor@mail.uz", role: "mijoz", online: true, orders: 7, initials: "ET", color: "orange" },
    { id: 5, name: "Farida Nazarova", email: "farida@mail.uz", role: "manager", online: false, orders: 26, initials: "FN", color: "red" },
    { id: 6, name: "Humoyun Alimov", email: "humoyun@mail.uz", role: "admin", online: false, orders: 55, initials: "HA", color: "cyan" },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Stack gap={"lg"}>
        <Group justify="space-between" align="flex-end">
          <Stack gap={"4px"}>
            <Title fw={500}>Foydalanuvchilar</Title>
            <Text c={"dimmed"} size="sm">Tabs, Avatar, Indicator, Badge va Skeleton komponentlari</Text>
          </Stack>
          <Button leftSection={<FiUserPlus size={16} />}>Taklif yuborish</Button>
        </Group>

        <Tabs variant="pills" defaultValue="all">
          <Stack gap={"md"}>
            <Group justify="space-between">
              <Tabs.List>
                <Tabs.Tab value="all" defaultChecked>Barchasi</Tabs.Tab>
                <Tabs.Tab value="admin">Adminlar</Tabs.Tab>
                <Tabs.Tab value="manager">Menejerlar</Tabs.Tab>
                <Tabs.Tab value="mijoz">Mijozlar</Tabs.Tab>
              </Tabs.List>

              <TextInput
                w={{ base: "100%", sm: 240 }}
                leftSection={<FiSearch size={14} />}
                placeholder="Ism bo'yicha qidirish" />
            </Group>

            <SimpleGrid autoRows="" cols={{ base: 1, sm: 2, lg: 3 }}>
                {users.map((user) => (
                  <Skeleton key={user.id} visible={loading}>
                    <Card h={"100%"} withBorder>
                      <Group>
                          <Indicator offset={5} size={10} color={!loading && user.online ? "teal" : "transparent"}>
                            <Avatar size={"lg"} color={user.color}>
                              {user.initials}
                            </Avatar>
                          </Indicator>
                          
                          <Stack flex={1} gap={"2px"}>
                              <Text fw={500}>{user.name}</Text>
                              <Text size="xs" c={"dimmed"}>{user.email}</Text>
                            <Group gap={"xs"} mt={"4px"}>
                              <Badge variant="light" size="sm" color={user.role === "mijoz" ? "dark" : user.role === "manager" ? "green" : "blue"}>{user.role}</Badge>
                              <Badge variant="default" size="sm">{user.orders} BUYURTMA</Badge>
                            </Group>
                          </Stack>
                      </Group>

                      <Group mt={"md"} gap={"xs"}>
                        <Tooltip label="Xat yuborish">
                          <ActionIcon variant="light">
                            <FiMail />
                          </ActionIcon>
                        </Tooltip>

                        <Tooltip label="Xabar yuborish">
                          <ActionIcon variant="light" color="green">
                            <FiMessageSquare />
                          </ActionIcon>
                        </Tooltip>
                      </Group>
                    </Card>
                  </Skeleton>
                ))}
            </SimpleGrid>
          </Stack>
        </Tabs>
      </Stack>
    </>
  )
}

export default Users