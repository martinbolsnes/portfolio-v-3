import { Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import useStyles from './TechInfo.styles';
import { TechIcons } from '../techIcons/TechIcons';

export function TechInfo() {
  const { classes } = useStyles();
  return (
    <Container className={classes.techInfoSection}>
      <Container className={classes.techInfoWrapper}>
        <Title className={classes.heading} order={2} size='h1'>
          What I do
        </Title>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'backIn', duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Text fz='lg'>
            Through my studies at Noroff I gathered most experience in HTML, CSS
            and Javascript. My main focus now is React and often through
            Next.js. As well as creating responsive applications through pure
            CSS, I also have worked with frameworks like Bootstrap and Tailwind.
            I do most of my designs in Figma, but I have also been working with
            Adobe XD. I like to stay updated on different tools and countinue to
            learn. Some of the things I do want to learn more about is
            Typescript. I have also worked with React Native, Firebase, Strapi
            and Sanity.
          </Text>
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'backIn', duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <TechIcons />
      </motion.div>
    </Container>
  );
}
