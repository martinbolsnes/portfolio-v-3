import { Container, createStyles, rem } from '@mantine/core';
import { HeaderResponsive } from '../components/Header/Header';
import { Work } from '../components/work/Work';
import { Footer } from '../components/footer/Footer';

const useStyles = createStyles((theme) => ({
  work: {
    marginTop: `${rem(180)}`,
    maxWidth: `${rem(1280)}`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(100)}`,
    },
  },
}));

export default function WorkPage() {
  const { classes } = useStyles();
  return (
    <>
      <HeaderResponsive
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/work', label: 'Work' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
      <Container className={classes.work}>
        <Work />
      </Container>
      <Footer />
    </>
  );
}
