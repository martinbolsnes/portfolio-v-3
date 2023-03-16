import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  aboutSection: {
    maxWidth: `${rem(1280)}`,
    marginTop: `${rem(180)}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  aboutWrapper: {
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

  aboutImg: {
    marginRight: `${rem(80)}`,

    [theme.fn.smallerThan('md')]: {
      marginRight: `${rem(50)}`,
      maxWidth: `${rem(250)}`,
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(40)}`,
      maxWidth: `${rem(200)}`,
    },
  },

  imageWrapper: {
    borderWidth: 2,
    borderColor: 'teal',
  },
}));
