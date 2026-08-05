import {
  FiEdit3,
  FiUsers,
  FiShoppingBag,
  FiHome,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Burger,
  Center,
  Group,
  Menu,
  NavLink,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router-dom";
import type { navItem } from "../types/types";
import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";
import { useMantineColorScheme } from "@mantine/core";

const MainLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const location = useLocation();

  const navData: navItem[] = [
    { id: 1, title: "Dashboard", path: "/", icon: FiHome },
    { id: 2, title: "Mahsulotlar", path: "/products", icon: FiShoppingBag },
    { id: 3, title: "Foydalanuvchilar", path: "/users", icon: FiUsers },
    { id: 4, title: "Forma elementlari", path: "/forms", icon: FiEdit3 },
    { id: 5, title: "Sozlamalar", path: "/settings", icon: FiSettings },
  ];

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <AppShell
        padding={"md"}
        header={{ height: 60 }}
        navbar={{
          width: 240,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
      >
        <AppShell.Header px={"md"}>
          <Group justify="space-between" h={"100%"}>
            <Group gap={"sm"}>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
              />
              <Title size="lg" fw={600}>Mantine Admin</Title>
              <Badge variant="light" visibleFrom="xs">DEMO</Badge>
            </Group>

            <Group gap={"sm"}>
              <Tooltip label={`${colorScheme === "dark" ? "Yorug' rejim" : "Qorong'u rejim"}`}>
                <ActionIcon
                  onClick={() => toggleColorScheme()}
                  variant="default"
                  p={"md"}
                >
                  <Center>
                    {colorScheme === "dark" ? <BsSun size={18} /> : <BiMoon size={18} />}
                  </Center>
                </ActionIcon>
              </Tooltip>

              <Menu width={180} shadow="md" position="bottom-end">
                <Menu.Target>
                  <UnstyledButton>
                    <Avatar color="blue">AK</Avatar>
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Aziza Karimova</Menu.Label>
                  <Menu.Item leftSection={<AiOutlineUser />}>Profil</Menu.Item>
                  <Menu.Item component={Link} to={"/settings"} leftSection={<FiSettings />}>Sozlamalar</Menu.Item>

                  <Menu.Divider />

                  <Menu.Item color="red" leftSection={<FiLogOut />}>
                    Chiqish
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p={"xs"}>
          <Stack justify="space-between" h={"100%"}>
            <AppShell.Section>
              {navData.map((item) => (
                <NavLink
                  key={item.id}
                  component={Link}
                  to={item.path}
                  active={location.pathname === item.path}
                  label={item.title}
                  leftSection={<item.icon />}
                />
              ))}
            </AppShell.Section>

            <AppShell.Section>
              <Text size="xs" c={"dimmed"} p={"xs"}>Mantine <Text span fw={500}>v9</Text> bilan yasalgan</Text>
            </AppShell.Section>
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default MainLayout;
