import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  dividerContainer: {
    maxWidth: `${rem(1280)}`,
    marginTop: `${rem(60)}`,
    marginBottom: `${rem(60)}`,
  },

  divider: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },
}));
