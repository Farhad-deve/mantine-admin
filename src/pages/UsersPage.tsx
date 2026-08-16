import { FiUserPlus } from "react-icons/fi";
import {
  Button,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import FilteredUsersAndTabs from "../components/FilteredUsersAndTabs";
import { useEffect } from "react";

const Users = () => {

  useEffect(() => {
    document.title = "Foydalanuvchilar | Mantine Admin";
  }, [])

  return (
    <>
      <Stack gap={"lg"}>
        <Group justify="space-between" align="flex-end">
          <Stack gap={"4px"}>
            <Title fw={500}>Foydalanuvchilar</Title>
            <Text c={"dimmed"} size="sm">
              Tabs, Avatar, Indicator, Badge va Skeleton komponentlari
            </Text>
          </Stack>
          <Button leftSection={<FiUserPlus size={16} />}>
            Taklif yuborish
          </Button>
        </Group>

        <FilteredUsersAndTabs />
      </Stack>
    </>
  );
};

export default Users;
