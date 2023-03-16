import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  soMeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
    },
  },

  soMeIcon: {
    transition: 'transform .3s',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    '&:hover': {
      color: '#12B886',
      transform: 'rotate(10deg)',
    },
  },
}));
