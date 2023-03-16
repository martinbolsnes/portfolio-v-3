import { Container, Title, Text, Button, Anchor } from '@mantine/core';
import { RiSendPlaneFill } from 'react-icons/ri';
import useStyles from './Contact.styles';

export function Contact() {
  const { classes } = useStyles();
  return (
    <Container className={classes.contactSection}>
      <Container className={classes.contactWrapper}>
        <Title className={classes.heading} order={2} size="h1">
          Contact me
        </Title>
        <Text fz="lg">
          I´m open for work at the moment so if you like what I do you are welcome to reach out to
          me!
        </Text>
        <Anchor href="mailto: martinbolsnes@icloud.com">
          <Button variant="gradient" mt={30} leftIcon={<RiSendPlaneFill size={30} />}>
            Email me
          </Button>
        </Anchor>
      </Container>
    </Container>
  );
}
