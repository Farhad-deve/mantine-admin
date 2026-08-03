import { FiEdit3, FiUsers, FiShoppingBag, FiHome, FiLogOut, FiSettings } from "react-icons/fi";  
import { BsSun } from "react-icons/bs"; 
import { AiOutlineUser } from "react-icons/ai";

import { BiMoon } from "react-icons/bi"; 
import { ActionIcon, AppShell, Avatar, Badge, Box, Burger, Button, Center, Group, Loader, Menu, NavLink, Text, Title, Tooltip, UnstyledButton } from "@mantine/core"

import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import type { navItem } from "../types/types";
import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";


const MainLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const navData : navItem[] = [
    { id: 1, title: "Dashboard", path: "/", icon: FiHome},
    { id: 2, title: "Mahsulotlar", path: "/products", icon: FiShoppingBag},
    { id: 3, title: "Foydalanuvchilar", path: "/users", icon: FiUsers},
    { id: 4, title: "Forma elementlari", path: "/forms", icon: FiEdit3},
    { id: 5, title: "Sozlamalar", path: "/settings", icon: FiSettings},
  ]

  return (
    <>
        <AppShell
          padding={"lg"}
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
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                <Text size="lg" fw={600}>Mantine Admin</Text>
                <Badge variant="light">DEMO</Badge>
              </Group>

              <Group gap={"sm"}>
                <Tooltip label={`Toggle theme`}>
                  <ActionIcon variant="default" p={"md"}>
                    <Center>
                      <BsSun size={18} />
                      {/* <BiMoon size={18} /> */}
                    </Center>
                  </ActionIcon>
                </Tooltip>

                <Menu width={170}>
                  <Menu.Target>
                    <UnstyledButton>
                      <Avatar  color="blue">AK</Avatar>
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Aziza Karimova</Menu.Label>
                    <Menu.Item leftSection={<AiOutlineUser />}>Profil</Menu.Item>
                    <Menu.Item leftSection={<FiSettings />}>Sozlamalar</Menu.Item>

                    <Menu.Divider />

                    <Menu.Item color="red" leftSection={<FiLogOut />}>Chiqish</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p={"xs"}>
            {navData.map(item => (
              <NavLink key={item.id} component={Link} to={item.path} label={item.title} leftSection={<item.icon />} />
            ))}
          </AppShell.Navbar>
          
          <AppShell.Main>
            <Suspense fallback={<LoadingPage />}>
              <Outlet />
            </Suspense>
          </AppShell.Main>

        </AppShell>
    </>
  )
}

export default MainLayout