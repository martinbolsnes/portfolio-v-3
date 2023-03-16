import { Container, Group, ActionIcon, Text } from '@mantine/core';
import { RiGithubFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import useStyles from './Footer.styles';

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text className={classes.logo} variant="gradient">
          mb.
        </Text>
        <Text color="dimmed">Designed and buildt by Martin Bolsønes</Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg" radius="md">
            <RiGithubFill size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg" radius="md">
            <RiInstagramLine size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg" radius="md">
            <RiLinkedinFill size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg" radius="md">
            <RiTwitterFill size="1.05rem" />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
