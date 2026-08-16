import { useEffect, useState } from "react";
import type { User } from "../types/types";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Indicator,
  SimpleGrid,
  Skeleton,
  Stack,
  Tabs,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { FiMail, FiMessageSquare, FiSearch } from "react-icons/fi";

const FilteredUsersAndTabs = () => {
  const users: User[] = [
    { id: 1, name: "Aziza Karimova", email: "aziza@mail.uz", role: "admin", online: true, orders: 48, initials: "AK", color: "blue", },
    { id: 2, name: "Bekzod Rahimov", email: "bekzod@mail.uz", role: "manager", online: true, orders: 31, initials: "BR", color: "teal", },
    { id: 3, name: "Dilnoza Yusupova", email: "dilnoza@mail.uz", role: "mijoz", online: false, orders: 12, initials: "DY", color: "grape", },
    { id: 4, name: "Eldor Tursunov", email: "eldor@mail.uz", role: "mijoz", online: true, orders: 7, initials: "ET", color: "orange", },
    { id: 5, name: "Farida Nazarova", email: "farida@mail.uz", role: "manager", online: false, orders: 26, initials: "FN", color: "red", },
    { id: 6, name: "Humoyun Alimov", email: "humoyun@mail.uz", role: "admin", online: false, orders: 55, initials: "HA", color: "cyan", },
  ];

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesRole = activeTab === "all" || user.role === activeTab;

    const matchesSearch =
      search === "" ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    return matchesRole && matchesSearch;
  });

  return (
    <>
    <Tabs variant="pills" defaultValue="all" value={activeTab}>
        <Stack gap={"md"}>
            <Group justify="space-between">
                <Tabs.List>
                <Tabs.Tab value="all" onClick={() => setActiveTab("all")}>Barchasi</Tabs.Tab>
                <Tabs.Tab value="admin" onClick={() => setActiveTab("admin")}>Adminlar</Tabs.Tab>
                <Tabs.Tab value="manager" onClick={() => setActiveTab("manager")}>Menejerlar</Tabs.Tab>
                <Tabs.Tab value="mijoz" onClick={() => setActiveTab("mijoz")}>Mijozlar</Tabs.Tab>
                </Tabs.List>

                <TextInput
                w={{ base: "100%", sm: 240 }}
                onChange={(e) => setSearch(e.target.value)}
                leftSection={<FiSearch size={14} />}
                placeholder="Ism bo'yicha qidirish"
                />
            </Group>

            {filteredUsers.length < 1 ? (
                // No user message
                <Center>
                <Text c={"dimmed"} p={"xl"}>
                    Foydalanuvchi topilmadi
                </Text>
                </Center>
            ) : (
                // Filtered users
                <SimpleGrid autoRows="" cols={{ base: 1, sm: 2, lg: 3 }}>
                {filteredUsers.map((user) => (
                    <Skeleton key={user.id} visible={loading}>
                    <Card h={"100%"} withBorder>
                        <Group>
                        <Indicator
                            offset={5}
                            size={10}
                            color={!loading && user.online ? "teal" : "transparent"}
                        >
                            <Avatar size={"lg"} color={user.color} aria-label={user.name}>
                            {user.initials}
                            </Avatar>
                        </Indicator>

                        <Stack flex={1} gap={"2px"}>
                            <Text fw={500}>{user.name}</Text>
                            <Text size="xs" c={"dimmed"}>
                            {user.email}
                            </Text>
                            <Group gap={"xs"} mt={"4px"}>
                            <Badge
                                variant="light"
                                size="sm"
                                color={
                                user.role === "mijoz"
                                    ? "dark"
                                    : user.role === "manager"
                                    ? "green"
                                    : "blue"
                                }
                            >
                                {user.role}
                            </Badge>
                            <Badge variant="default" size="sm">
                                {user.orders} BUYURTMA
                            </Badge>
                            </Group>
                        </Stack>
                        </Group>

                        <Group mt={"md"} gap={"xs"}>
                        <Tooltip label="Xat yuborish">
                            <ActionIcon variant="light" aria-label="Xat yuborish">
                            <FiMail />
                            </ActionIcon>
                        </Tooltip>

                        <Tooltip label="Xabar yuborish">
                            <ActionIcon variant="light" color="green" aria-label="Xabar yuborish">
                            <FiMessageSquare />
                            </ActionIcon>
                        </Tooltip>
                        </Group>
                    </Card>
                    </Skeleton>
                ))}
                </SimpleGrid>
            )}
        </Stack>
    </Tabs>
    </>
  );
};

export default FilteredUsersAndTabs;
