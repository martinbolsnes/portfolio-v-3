import { createStyles, rem } from '@mantine/core';

export default createStyles(() => ({
  workSection: {
    maxWidth: `${rem(1280)}`,
  },

  cardBg: {
    backgroundImage: 'linear-gradient(45deg, #15AABF, #12B886)',
  },

  heading: {
    marginBottom: `${rem(24)}`,
    paddingLeft: `${rem(16)}`,
  },
}));
