import { RiGithubFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { Anchor, Container } from '@mantine/core';
import useStyles from './SoMeLinks.styles';

export function SoMe() {
  const { classes } = useStyles();
  return (
    <Container className={classes.soMeContainer}>
      <Anchor href="https://github.com/martinbolsnes" color="dark">
        <RiGithubFill className={classes.soMeIcon} size={44} />
      </Anchor>
      <Anchor href="https://www.instagram.com/martinbolsnes/" color="dark">
        <RiInstagramLine className={classes.soMeIcon} size={44} />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/martin-bols%C3%B8nes-5973941b5/" color="dark">
        <RiLinkedinFill className={classes.soMeIcon} size={44} />
      </Anchor>
      <Anchor href="https://twitter.com/martinbolsnes" color="dark">
        <RiTwitterFill className={classes.soMeIcon} size={44} />
      </Anchor>
    </Container>
  );
}
