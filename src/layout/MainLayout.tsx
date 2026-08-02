import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import { ActionIcon, AppShell, Badge, Box, Burger, Group, Text, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";

const MainLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <>
        <AppShell>

          <AppShell.Header>
            <Group justify="space-between">
              <Group>
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                <Text>Mantine Admin</Text>
                <Badge>DEMO</Badge>
              </Group>

              <Group>
                <ActionIcon>
                  <BiSun />
                  <BiMoon />
                </ActionIcon>
              </Group>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar>


          </AppShell.Navbar>
          
          <AppShell.Main>
            
          </AppShell.Main>

        </AppShell>
    </>
  )
}

export default MainLayout