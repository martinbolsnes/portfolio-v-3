import { Container, createStyles, rem } from '@mantine/core';
import { Work } from '../components/work/Work';

const useStyles = createStyles((theme) => ({
  work: {
    marginTop: `${rem(180)}`,
    maxWidth: `${rem(1280)}`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: `${rem(100)}`,
    },
  },
}));

export default function WorkPage() {
  const { classes } = useStyles();
  return (
    <>
      <Container className={classes.work}>
        <Work />
      </Container>
    </>
  );
}
