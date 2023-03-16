import React, { PropsWithChildren } from 'react';
import { HeaderResponsive } from '../Header/Header';
import { Footer } from '../footer/Footer';
const Layout = ({ children }: PropsWithChildren) => {
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
      {children}
      <Footer />
    </>
  );
};
export default Layout;
