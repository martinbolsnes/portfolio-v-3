import { createStyles, rem } from '@mantine/core';

const HEADER_HEIGHT = rem(60);

export default createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    right: 0,
    zIndex: 0,
    borderTopWidth: 'none',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${rem(20)}`,

    [theme.fn.largerThan('sm')]: {
      width: '40%',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: `${rem(1280)}`,
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    marginBottom: `${rem(12)}`,
    borderRadius: theme.radius.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  logo: {
    fontFamily: 'Genos, sans-serif',
    fontSize: `${rem(38)}`,
    fontWeight: 500,
  },

  logoLink: {
    textDecoration: 'none',
    paddingLeft: `${rem(16)}`,
  },
}));
