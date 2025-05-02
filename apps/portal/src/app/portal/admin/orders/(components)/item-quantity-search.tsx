// File: app/(components)/ItemQuantitySearch.tsx
'use client';

import React from 'react';
import { Button, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface ItemQuantitySearchProps {
  searchInput: string;
  setSearchInputAction: (value: string) => void;
  onSearchAction: () => void;
}

export function ItemQuantitySearch({
  searchInput,
  setSearchInputAction,
  onSearchAction,
}: ItemQuantitySearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchAction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group mb="md">
        <TextInput
          placeholder="Search by item code"
          value={searchInput}
          onChange={(e) => setSearchInputAction(e.target.value)}
          style={{ flex: 1 }}
          leftSection={<IconSearch size={16} />}
        />
        <Button type="submit">Search</Button>
      </Group>
    </form>
  );
}