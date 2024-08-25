import { ReactNode } from 'react';
import CommonImage from '@/components/CommonImage';
import downArrow from '@/assets/header/downArrow.svg'

interface SubMenuItem {
    name: string;
    href: string;
}

interface NavLink {
    name: string;
    href: string;
    icon?: ReactNode;
    subMenu?: SubMenuItem[];
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services', icon: <CommonImage src={downArrow} alt='arrow' />, subMenu: [
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Development', href: '/services/development' },
        { name: 'Design', href: '/services/design' }
    ] },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/contact-us' }
];

export default navLinks;
