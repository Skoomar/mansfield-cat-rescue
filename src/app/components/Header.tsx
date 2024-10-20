import Link from 'next/link';
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ReactNode } from 'react';

const NextNavigationMenuLink = ({href, children}: { href: string, children: ReactNode }) => (
    <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
        </NavigationMenuLink>
    </Link>
);

const Header = () => (
    <div className="flex justify-between">
        <Link href="/">Logo</Link>
        <div className="flex gap-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* TODO: seeing if it still works if you don't wrap each thing in NavigationMenuItem unless it's
                        got content. Put it back in if stuff starts going wrong with the header links */}
                    <NextNavigationMenuLink href="/">Home</NextNavigationMenuLink>
                    <NavigationMenuItem>
                        {/* TODO: funky stuff going on here because the link inside the trigger has it's own on:hover separate to the trigger - fix it */}
                        <NavigationMenuTrigger>
                            <NextNavigationMenuLink href="/adoption">Adoption</NextNavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li><NextNavigationMenuLink href={"/adoption/cats"}>Cats</NextNavigationMenuLink></li>
                                <li><NextNavigationMenuLink href={"/adoption/kittens"}>Kittens</NextNavigationMenuLink></li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NextNavigationMenuLink href="/fostering">Fostering</NextNavigationMenuLink>
                    <NextNavigationMenuLink href="/support">Support</NextNavigationMenuLink>
                    <NextNavigationMenuLink href="/contact-us">Contact Us</NextNavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
);

export default Header;