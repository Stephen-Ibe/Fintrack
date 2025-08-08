import { AppShell, Avatar, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FiSearch } from "react-icons/fi";
import { SlGrid } from "react-icons/sl";

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
        width: { sm: 200, md: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
    >
      <AppShell.Header p={10}>
        <Group px={10} justify="space-between" gap="xl">
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" />
            <div className="text-red-600">Logo</div>
          </Group>
          <Group>
            <FiSearch size={20} />
            <SlGrid />
            <Avatar src="profile.png" alt="user_profile" size="sm" />
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
