'use client';

import React, { useMemo, useState } from 'react';
import { IconAlertCircle, IconRefresh } from '@tabler/icons-react';
import {
  Alert,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Paper,
  Stack,
  Title,
} from '@mantine/core';
import { ItemQuantitySearch, ItemQuantityTable } from '../(components)';
import { useItemQuantityHooks } from '@/lib/store/orders/hooks';

export default function ItemQuantitiesPage() {
  const [searchInput, setSearchInput] = useState<string>('');

  const { useItemQuantities } = useItemQuantityHooks();
  const { data: itemQuantities, isLoading, error, refetch } = useItemQuantities();

  const filteredItems = useMemo(() => {
    if (!itemQuantities) return [];

    let result = [...itemQuantities];
    if (searchInput.trim()) {
      const term = searchInput.toLowerCase();
      result = result.filter((item) =>
        item.item_code.toLowerCase().includes(term) ||
        (item.name && item.name.toLowerCase().includes(term))
      );
    }
    return result;
  }, [itemQuantities, searchInput]);

  return (
    <Container fluid p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2} c="gray.8">
            Item Quantities Management
          </Title>
          <Button
            leftSection={<IconRefresh size={16} />}
            variant="primary"
            onClick={() => refetch()}
          >
            Refresh
          </Button>
        </Group>

        <Paper p="md" radius="md" withBorder>
          <ItemQuantitySearch
            searchInput={searchInput}
            setSearchInputAction={setSearchInput}
            onSearchAction={() => {}}
          />

          {isLoading ? (
            <Center my="xl">
              <Loader size="md" />
            </Center>
          ) : error ? (
            <Alert
              icon={<IconAlertCircle size={16} />}
              title="Error loading item quantities"
              color="red"
            >
              {error instanceof Error ? error.message : 'An unknown error occurred'}
            </Alert>
          ) : (
            <ItemQuantityTable items={filteredItems} />
          )}
        </Paper>
      </Stack>
    </Container>
  );
}
