import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  techInfoSection: {
    maxWidth: `${rem(1280)}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  techInfoWrapper: {
    margin: 0,
    width: '50%',

    [theme.fn.smallerThan('md')]: {
      width: '70%',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  heading: {
    marginBottom: `${rem(24)}`,
  },
}));
