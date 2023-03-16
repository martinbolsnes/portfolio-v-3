import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  contactSection: {
    maxWidth: `${rem(1280)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      width: '70%',
    },
  },

  heading: {
    marginBottom: `${rem(24)}`,
  },
}));
