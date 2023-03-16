import { Container, createStyles, rem } from '@mantine/core';
import { HeaderResponsive } from '../components/Header/Header';
import { About } from '../components/about/About';
import { TechInfo } from '../components/techInfo/TechInfo';
import { Footer } from '../components/footer/Footer';
import { CustomDivider } from '../components/customDivider/CustomDivider';

const useStyles = createStyles((theme) => ({
  about: {
    marginTop: `${rem(180)}`,
    maxWidth: `${rem(1280)}`,
    paddingLeft: 0,

    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(-80)}`,
    },
  },
}));

export default function AboutPage() {
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
      <Container className={classes.about}>
        <About />
      </Container>
      <CustomDivider />
      <TechInfo />
      <Footer />
    </>
  );
}
