import { FiEdit2, FiMoreVertical, FiTrash2 } from "react-icons/fi"; 
import { ActionIcon, Badge, Card, Group, Menu, Pagination, Rating, Select, Stack, Table, Text, TextInput } from "@mantine/core";
import type { Product } from "../types/types";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

function formatPrice(value: number) {
  const grouped = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped} so'm`;
};

interface AllProductsTableProps {
  products: Product[],
  onDeleteRequest: (id: number) => void
}

const AllProductsTable = ({ products, onDeleteRequest }: AllProductsTableProps) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === null || product.category === category;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const rows = paginatedProducts.map((product) => (
      <Table.Tr key={product.id}>
          <Table.Td>
            <Text fw={500} size="sm">{product.name}</Text>
          </Table.Td>

          <Table.Td>
            <Badge variant="default">{product.category}</Badge>
          </Table.Td>

          <Table.Td>
            <Text size="sm">{formatPrice(product.price)}</Text>
          </Table.Td>

          <Table.Td>
            {product.stock === 0 ? (
              <Text size="sm" c={"red"}>Tugagan</Text>
            ) : (
              <Text size="sm">{product.stock} dona</Text>
            )}
          </Table.Td>

          <Table.Td>
            <Rating size={"xs"} value={product.rating} count={5} readOnly />
          </Table.Td>

          <Table.Td>
            <Badge
            variant="light"
            color={
              product.status === "active"
                ? "green"
                : product.status === "draft"
                ? "yellow"
                : "dark"
            }>
                {product.status === "active" ? "FAOL" : product.status === "draft" ? "QORALAMA" : "ARXIV"}
            </Badge>
          </Table.Td>

          <Table.Td>
            <Menu position="bottom-end">
              <Menu.Target>
                <ActionIcon variant="subtle" color="dark">
                  <FiMoreVertical />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown w={150}>
                <Menu.Item leftSection={<FiEdit2 size={14} />}>Tahrirlash</Menu.Item>
                <Menu.Item onClick={() => onDeleteRequest(product.id)} color="red" leftSection={<FiTrash2 />}>O'chirish</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Table.Td>
      </Table.Tr>
  ));

  return (
    <>
      <Card withBorder>
        <Stack gap={"md"}>
          <Group justify="space-between">
              <TextInput
                  flex={1}
                  value={search}
                  onChange={(e) => setSearch(e.currentTarget.value)}
                  leftSection={<FiSearch size={14} />}
                  placeholder="Nom bo'yicha qidirish..."
              />
              <Select
                  value={category}
                  onChange={setCategory}
                  w={200}
                  placeholder="Barcha kategoriyalar"
                  data={['Aksessuar', 'Monitor', 'Audio',  'Video']}
                  clearable
              />
          </Group>

          <Table.ScrollContainer minWidth={680}>
              <Table highlightOnHover verticalSpacing={"sm"}>
                  <Table.Thead>
                      <Table.Tr>
                          <Table.Th>Mahsulot</Table.Th>
                          <Table.Th>Kategoriya</Table.Th>
                          <Table.Th>Narx</Table.Th>
                          <Table.Th>Ombor</Table.Th>
                          <Table.Th>Reyting</Table.Th>
                          <Table.Th>Holat</Table.Th>
                          <Table.Th w={40}></Table.Th>
                      </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>{rows}</Table.Tbody>
              </Table>
          </Table.ScrollContainer>

          <Group justify="space-between">
            <Text c={"dimmed"} size="sm">{filteredProducts.length} tadan {paginatedProducts.length} tasi</Text>
            
            <Pagination
              size={"sm"}
              value={page}
              onChange={setPage}
              total={totalPages}
             />
          </Group>
        </Stack>
      </Card>
    </>
  );
};

export default AllProductsTable;
