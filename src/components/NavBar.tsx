'use client';

import Menu from '@/components/Menu';
import MobileMenu from '@/components/MobileMenu';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'About', href: '/about' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white border bottom-1' data-testid='navbar__nav'>
      <Menu setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </nav>
  );
};

export default NavBar;
