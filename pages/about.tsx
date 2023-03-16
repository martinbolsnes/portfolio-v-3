import { HeaderResponsive } from '../components/Header/Header';
import { About } from '../components/about/About';
import { TechInfo } from '../components/techInfo/TechInfo';
import { Footer } from '../components/footer/Footer';
import { CustomDivider } from '../components/customDivider/CustomDivider';

export default function AboutPage() {
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
      <About />
      <CustomDivider />
      <TechInfo />
      <Footer />
    </>
  );
}
