import { Avatar, Badge, Card, Group, Stack, Table, Text } from "@mantine/core";
import type { Order } from "../types/types";


const OrdersTable = () => {

    function formatPrice(value: number) {
        const grouped = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return `${grouped} so'm`;
    };

    const orders: Order[] = [
        { id: "#4821", customer: "Aziza Karimova", initials: "AK", product: "Aurora klaviatura", amount: 349000, status: "yakunlandi", date: "12 mart" },
        { id: "#4820", customer: "Bekzod Rahimov", initials: "BR", product: "Echo quloqchin", amount: 720000, status: "kutilmoqda", date: "12 mart" },
        { id: "#4819", customer: "Dilnoza Yusupova", initials: "DY", product: "Lumen 27 monitor", amount: 3200000, status: "yakunlandi", date: "11 mart" },
        { id: "#4818", customer: "Eldor Tursunov", initials: "ET", product: "Nova sichqoncha", amount: 189000, status: "bekor qilindi", date: "11 mart" },
        { id: "#4817", customer: "Farida Nazarova", initials: "FN", product: "Orbit mikrofon", amount: 890000, status: "yakunlandi", date: "10 mart" },
    ];

    const rows = orders.map((order) => (
        <Table.Tr key={order.id}>
            <Table.Td>
                <Group gap={"xs"}>
                    <Avatar color="blue" size={"sm"} radius="xl" >{order.initials}</Avatar>
                    <Text size="sm">{order.customer}</Text>
                </Group>
            </Table.Td>

            <Table.Td>
                <Text size="sm">{order.product}</Text>
            </Table.Td>

            <Table.Td>
                <Text size="sm">{formatPrice(order.amount)}</Text>
            </Table.Td>

            <Table.Td>
                <Badge tt={"uppercase"} fw={"bold"} size="sm" variant="light" color={order.status === "yakunlandi" ? "green" : order.status === "bekor qilindi" ? "red" : "yellow"}>
                    {order.status}
                </Badge>
            </Table.Td>

            <Table.Td>
                <Text c={"dimmed"} size="sm">
                    {order.date}
                </Text>
            </Table.Td>
        </Table.Tr>
    ));
    
  return (
    <>
    <Card withBorder>
        <Stack gap={'lg'}>
            <Text fw={500}>So'nggi buyurtmalar</Text>

            <Table.ScrollContainer minWidth={600}>
                <Table w={"100%"} highlightOnHover verticalSpacing={"sm"}> 
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Mijoz</Table.Th>
                            <Table.Th>Mahsulot</Table.Th>
                            <Table.Th>Summa</Table.Th>
                            <Table.Th>Holat</Table.Th>
                            <Table.Th>Sana</Table.Th>
                        </Table.Tr>
                    </Table.Thead>

                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Stack>
    </Card>
    </>
  )
}

export default OrdersTable