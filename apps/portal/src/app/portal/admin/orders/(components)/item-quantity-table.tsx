// File: app/(components)/ItemQuantityTable.tsx
'use client';

import React from 'react';
import { Table } from '@mantine/core';
import { ItemQuantity } from '@/lib/store/types';

interface ItemQuantityTableProps {
  items: ItemQuantity[];
}

export function ItemQuantityTable({ items }: ItemQuantityTableProps) {
  return (
    <Table striped withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Item Code</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Quantity</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.length === 0 ? (
          <Table.Tr>
            <Table.Td colSpan={3} align="center">
              No items found
            </Table.Td>
          </Table.Tr>
        ) : (
          items.map((item) => (
            <Table.Tr key={item.item_code}>
              <Table.Td>{item.item_code}</Table.Td>
              <Table.Td>{item.name || 'N/A'}</Table.Td>
              <Table.Td>{item.quantity}</Table.Td>
            </Table.Tr>
          ))
        )}
      </Table.Tbody>
    </Table>
  );
}
