import { Container, Divider } from '@mantine/core';
import useStyles from './CustomDivider.styles';

export function CustomDivider() {
  const { classes } = useStyles();
  return (
    <Container className={classes.dividerContainer}>
      <Divider className={classes.divider} size="xs" />
    </Container>
  );
}
