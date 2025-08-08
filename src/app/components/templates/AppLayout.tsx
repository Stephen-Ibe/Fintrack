import { AppShell, Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { FiSearch } from "react-icons/fi";
import { SlGrid } from "react-icons/sl";
import { FTAvatar } from "../atoms";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 50 }}
      navbar={{
        width: { base: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: false },
      }}
    >
      <AppShell.Header p={10}>
        <Group px={10} justify="space-between" gap="xl">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="md"
            />
            <div>
              <Image src="/logo.png" alt="Logo" />
            </div>
          </Group>
          <Group>
            <FiSearch size={20} />
            <SlGrid />
            <FTAvatar src="profile.png" alt="user_profile" size="sm" />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section>Navbar main section, it will</AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
