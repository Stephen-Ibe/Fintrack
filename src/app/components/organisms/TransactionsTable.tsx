import { Table } from "@mantine/core";

export const TransactionsTable = () => {
  const rows = (
    <Table.Tr>
      <Table.Td>Transaction 1</Table.Td>
      <Table.Td>$100.00</Table.Td>
      <Table.Td>2023-10-01</Table.Td>
      <Table.Td>Completed</Table.Td>
    </Table.Tr>
  );
  return (
    <div className="transactions-table">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Transaction</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
