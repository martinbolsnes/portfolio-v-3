import { Container, createStyles, rem } from '@mantine/core';
import { Contact } from '../components/contact/Contact';

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
      <Container className={classes.contact}>
        <Contact />
      </Container>
    </>
  );
}
