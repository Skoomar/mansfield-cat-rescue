import Link from 'next/link';
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const NextNavigationMenuLink = ({ href, children }: { href: string, children: ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
        </NavigationMenuLink>
    </Link>
);

const AdoptionContent = () => (
    <div>
        <NextNavigationMenuLink href="/adoption/kittens">
            <Image src="/kitten.webp" width={50} height={50} alt="Kitten" />
            <div className="text-lg">Cats</div>
        </NextNavigationMenuLink>
        <NextNavigationMenuLink href="/adoption/kittens">
            <Image src="/kitten.webp" width={50} height={50} alt="Kitten" />
            <div className="text-lg">Kittens</div>
        </NextNavigationMenuLink>
    </div>
);

const Header = () => (
    <header className="w-1/2 flex justify-between">
        {/* TODO: convert this sheeit to sidebar */}
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden" variant="outline" size="icon">
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-2 py-5">
                    <Link href="/public" className="text-lg">Home</Link>
                    <Link href="/portfolio" className="text-lg">Portfolio</Link>
                    <Link href="/blog" className="text-lg">Blog</Link>
                    <Link href="/contact-me" className="text-lg">Contact Me</Link>
                </div>
            </SheetContent>
        </Sheet>
        <Link href="/" className="lg:">Logo</Link>
        <nav className="hidden lg:flex gap-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* TODO: seeing if it still works if you don't wrap each thing in NavigationMenuItem unless it's
                        got content. Put it back in if stuff starts going wrong with the header links */}
                    <NextNavigationMenuLink href="/">Home</NextNavigationMenuLink>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Adoption</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <AdoptionContent />
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NextNavigationMenuLink href="/fostering">Fostering</NextNavigationMenuLink>
                    <NextNavigationMenuLink href="/support">Support</NextNavigationMenuLink>
                    <NextNavigationMenuLink href="/contact-us">Contact Us</NextNavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    </header>
);

export default Header;