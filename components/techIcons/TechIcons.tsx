import { Button, Container, Grid } from '@mantine/core';
import { RiHtml5Fill, RiCss3Fill, RiReactjsFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import useStyles from './TechIcons.styles';

export function TechIcons() {
  const { classes } = useStyles();
  return (
    <Container className={classes.techIconsContainer}>
      <Grid grow>
        <Grid.Col className={classes.gridColumn} span={4} mih={80}>
          <Button className={classes.iconBtn} variant="light" size="xl" radius="lg">
            <RiHtml5Fill size={40} />
          </Button>
        </Grid.Col>
        <Grid.Col className={classes.gridColumn} span={4} mih={80}>
          <Button className={classes.iconBtn} variant="light" size="xl" radius="lg">
            <RiCss3Fill size={40} />
          </Button>
        </Grid.Col>
        <Grid.Col className={classes.gridColumn} span={4} mih={80}>
          <Button className={classes.iconBtn} variant="light" size="xl" radius="lg">
            <IoLogoJavascript size={50} />
          </Button>
        </Grid.Col>
        <Grid.Col className={classes.gridColumn} span={4} mih={80}>
          <Button className={classes.iconBtn} variant="light" size="xl" radius="lg">
            <RiReactjsFill size={50} />
          </Button>
        </Grid.Col>
        <Grid.Col className={classes.gridColumn} span={4} mih={80}>
          <Button className={classes.iconBtn} variant="light" size="xl" radius="lg">
            <SiNextdotjs size={50} />
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
