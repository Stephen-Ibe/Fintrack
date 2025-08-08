"use client";

import { Badge, Button, Flex, Group, Title } from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { AppLayout } from "./components";

const Home = () => (
  <AppLayout>
    <section>
      <Group justify="space-between">
        <Flex align="center" gap="lg">
          <Title order={3}>Wallet Ledger</Title>
          <Badge variant="dot" color="green" size="xs">
            Active
          </Badge>
        </Flex>
        <Flex align="center" gap="sm">
          <Button radius="xl" size="sm" color="#4B8B9F">
            Share
          </Button>
          <div className="rounded-full border-2 border-[#49656E]/30 p-2">
            <BsThreeDots />
          </div>
        </Flex>
      </Group>
    </section>
  </AppLayout>
);

export default Home;
