import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  hero: {
    maxWidth: `${rem(1280)}`,
    marginTop: `${rem(180)}`,
    display: 'flex',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(100)}`,
    },
  },

  heroTextWrapper: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  heroParagraph: {
    width: '70%',
    fontSize: `${rem(24)}`,
    marginTop: `${rem(16)}`,

    [theme.fn.smallerThan('md')]: {
      width: '80%',
      fontSize: `${rem(18)}`,
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  heroText: {
    fontSize: `${rem(48)}`,
    fontWeight: 600,

    [theme.fn.smallerThan('md')]: {
      fontSize: `${rem(32)}`,
    },
  },

  heroSpan: {
    fontSize: `${rem(52)}`,

    [theme.fn.smallerThan('md')]: {
      fontSize: `${rem(38)}`,
    },
  },

  btnContainer: {
    margin: 0,
    padding: 0,
    marginTop: `${rem(28)}`,
    display: 'flex',
  },

  btn: {
    fontFamily: 'Genos, sans-serif',
    fontSize: `${rem(28)}`,
    marginRight: `${rem(16)}`,
    borderWidth: 2,
    boxShadow: '2px 2px 8px -2px rgba(18, 184, 134, 0.25)',

    [theme.fn.smallerThan('md')]: {
      fontSize: `${rem(22)}`,
    },
  },

  heroImgWrapper: {
    width: '50%',
    marginTop: `${rem(-50)}`,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    [theme.fn.smallerThan('md')]: {
      width: '80%',
      marginTop: 0,
    },
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
}));
