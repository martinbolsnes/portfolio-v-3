import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { TechInfo } from '../components/techInfo/TechInfo';
import { Work } from '../components/work/Work';
import { Contact } from '../components/contact/Contact';
import { CustomDivider } from '../components/customDivider/CustomDivider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CustomDivider />
      <TechInfo />
      <CustomDivider />
      <Work />
      <CustomDivider />
      <Contact />
    </>
  );
}
