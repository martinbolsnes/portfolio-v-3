import { Container, Image, Text, Title } from '@mantine/core';
import useStyles from './About.styles';

export function About() {
  const { classes } = useStyles();
  return (
    <Container className={classes.aboutSection} id="about">
      <Container className={classes.aboutWrapper}>
        <Title className={classes.heading} order={2} size="h1">
          About me
        </Title>
        <Text fz="lg">
          I’m a frontend developer that finished my studies at Noroff School of technology and
          digital media in Oslo, Norway in 2022. I have been working with frontend development for 2
          years now and my interest in creative development comes from my passion to beeing able to
          create something from idea to a finished product. The opportunities and possibilities in
          web development is what inspires me to do what I do.
        </Text>
      </Container>
      <Image
        className={classes.aboutImg}
        src="/heroImg.avif"
        radius="100%"
        width={250}
        height={240}
        withPlaceholder
        alt="Picture of Martin"
      />
    </Container>
  );
}
