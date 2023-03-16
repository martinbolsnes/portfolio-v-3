import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  techIconsContainer: {
    display: 'flex',

    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(40)}`,
    },
  },

  gridColumn: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },

  iconBtn: {
    cursor: 'default',
  },
}));
