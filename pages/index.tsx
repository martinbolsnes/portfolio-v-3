import { HeaderResponsive } from '../components/Header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { TechInfo } from '../components/techInfo/TechInfo';
import { Work } from '../components/work/Work';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { CustomDivider } from '../components/customDivider/CustomDivider';

export default function HomePage() {
  return (
    <>
      <HeaderResponsive
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/work', label: 'Work' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
      <Hero />
      <About />
      <CustomDivider />
      <TechInfo />
      <CustomDivider />
      <Work />
      <CustomDivider />
      <Contact />
      <Footer />
    </>
  );
}
