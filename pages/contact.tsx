import { Container, createStyles, rem } from '@mantine/core';
import { HeaderResponsive } from '../components/Header/Header';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';

const useStyles = createStyles(() => ({
  contact: {
    marginTop: `${rem(180)}`,
    maxWidth: `${rem(1280)}`,
  },
}));

export default function ContactPage() {
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
      <Container className={classes.contact}>
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
