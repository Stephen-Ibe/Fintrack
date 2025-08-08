"use client";

import {
  AvatarGroup,
  Badge,
  Button,
  Flex,
  Group,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { AppLayout } from "./components";
import { FTAvatar } from "./components/atoms";

const Home = () => (
  <AppLayout>
    <Flex direction="column" gap="xl">
      <section>
        <Group justify="space-between">
          <Flex align="center" gap="sm">
            <div className="flex items-center gap-2">
              <Title order={3}>Wallet Ledger</Title>
              <FaCaretDown />
            </div>
            <Badge variant="dot" color="green" size="sm">
              Active
            </Badge>
          </Flex>
          <Flex align="center" gap="sm">
            <Button radius="xl" size="xs" color="#4B8B9F">
              Share
            </Button>
            <div className="rounded-full border-2 border-[#49656E]/30 p-2">
              <BsThreeDots />
            </div>
          </Flex>
        </Group>

        <Flex align="center" gap="xs">
          <AvatarGroup spacing="xs">
            <FTAvatar src="user1.png" size="sm" />
            <FTAvatar src="user2.png" size="sm" />
            <FTAvatar src="user3.png" size="sm" />
            <FTAvatar src="user4.png" size="sm" />
          </AvatarGroup>
          <Text size="xs">Ava, Liam, Noah 12+ others</Text>
        </Flex>
      </section>

      <section>
        <Tabs defaultValue="overview" color="#437D8E">
          <Tabs.List>
            <Tabs.Tab value="overview" size="xs">
              Overview
            </Tabs.Tab>
            <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="pt-8 px-4">
            <section>
              <div className="summary flex flex-col gap-y-4">
                <Title order={4}>Summary</Title>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="rounded-lg p-4 bg-[#34616F]/10">
                      <div className="flex items-center justify-between">
                        <Text size="sm">Total Balance</Text>
                        <div className="cursor-pointer">
                          <FaEllipsis />
                        </div>
                      </div>
                      <Text size="xl" fw={700} style={{ fontSize: "2.25rem" }}>
                        $5,000
                      </Text>
                      <Text size="sm">+5%</Text>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Tabs.Panel>
        </Tabs>
      </section>
    </Flex>
  </AppLayout>
);

export default Home;
