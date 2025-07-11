// import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MiniLogo from '@/components/NavMenu/MiniLogo';
import MobileSidebar from '@/components/NavMenu/MobileSidebar';

// TODO: Shop link?
const links = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/adoption',
        label: 'Adoption',
    },
    {
        href: '/fostering',
        label: 'Fostering',
    },
    {
        href: '/support-us',
        label: 'Support Us',
    },
    {
        href: '/contact-us',
        label: 'Contact Us',
    },
];

const NavMenu = () => (
    <header className="sticky left-0 top-0 z-50 flex w-full items-center justify-between bg-background px-4 py-2 shadow dark:bg-secondary lg:px-[3%]">
        <MobileSidebar links={links} />
        <Link href="/">
            <MiniLogo />
        </Link>
        <nav className="mx-auto hidden items-center gap-14 font-bold lg:flex">
            {links.map((link) => (
                <Button key={link.label.toLowerCase()} asChild variant="ghost">
                    <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
        </nav>
        <div className="w-[1.2rem]" />
        {/*<LightDarkToggle />*/}
    </header>
);

export default NavMenu;
