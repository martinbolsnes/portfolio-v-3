import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<RiSunLine color={theme.white} size="1.25rem" />}
        offLabel={<RiMoonClearLine color={theme.colors.gray[6]} size="1.25rem" />}
      />
    </Group>
  );
}
