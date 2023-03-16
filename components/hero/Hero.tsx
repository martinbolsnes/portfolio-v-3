import { Container, Title, Text, Button, Anchor, Image } from '@mantine/core';
import useStyles from './Hero.styles';
import { SoMe } from '../someLinks/SoMeLinks';

export function Hero() {
  const { classes } = useStyles();
  return (
    <Container className={classes.hero}>
      <Container className={classes.heroTextWrapper}>
        <Title className={classes.heroText}>
          Hi, my name is{' '}
          <Text span inherit variant='gradient' className={classes.heroSpan}>
            Martin
          </Text>
        </Title>
        <Title className={classes.heroText}>
          and i´m a{' '}
          <Text span inherit variant='gradient' className={classes.heroSpan}>
            Frontend Developer
          </Text>
        </Title>
        <Text className={classes.heroParagraph}>
          Frontend developer living in Fredrikstad. Enjoy creating modern web
          applications and is eager to learn and emprove in both design and
          programming.
        </Text>
        <Container className={classes.btnContainer}>
          <Anchor href='/about'>
            <Button
              className={classes.btn}
              variant='outline'
              color='teal'
              size='xl'
              radius='lg'
            >
              About me
            </Button>
          </Anchor>
          <Anchor href='/work'>
            <Button
              className={classes.btn}
              variant='gradient'
              size='xl'
              radius='lg'
            >
              My work
            </Button>
          </Anchor>
        </Container>
      </Container>
      <Container className={classes.heroImgWrapper}>
        <Image alt='' src='/blobanimation.svg' radius={100} />
        <SoMe />
      </Container>
    </Container>
  );
}
