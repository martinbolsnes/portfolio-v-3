import { Container, createStyles, rem } from '@mantine/core';
import { About } from '../components/about/About';
import { TechInfo } from '../components/techInfo/TechInfo';
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
      <Container className={classes.about}>
        <About />
      </Container>
      <CustomDivider />
      <TechInfo />
    </>
  );
}
