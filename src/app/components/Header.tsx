'use client';
import Link from 'next/link';
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const closeMobileNav = () => {
        setMobileNavOpen(false);
    };

    return (
        <header className="flex w-1/2 justify-between lg:w-full">
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" variant="outline" size="icon">
                        <HamburgerMenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader><SheetTitle>Mansfield Cat Rescue</SheetTitle></SheetHeader>
                    <div className="flex flex-col gap-2 py-5">
                        <Link href="/" onClick={closeMobileNav}>Home</Link>
                        <Collapsible>
                            <CollapsibleTrigger className="text-left">Adoption</CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="flex flex-col justify-between gap-2 ml-4 mt-2">
                                    <Link href="/adoption/cats" onClick={closeMobileNav}>Cats</Link>
                                    <Link href="/adoption/kittens" onClick={closeMobileNav}>Kittens</Link>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <Link href="/fostering" onClick={closeMobileNav}>Fostering</Link>
                        <Link href="/support-us" onClick={closeMobileNav}>Support Us</Link>
                        <Link href="/contact-us" onClick={closeMobileNav}>Contact Us</Link>
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
                        <NextNavigationMenuLink href="/support-us">Support Us</NextNavigationMenuLink>
                        <NextNavigationMenuLink href="/contact-us">Contact Us</NextNavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    );
};

export default Header;