'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MobileSidebar = ({ links }: { links: { href: string, label: string }[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shadow border-foreground dark:bg-secondary lg:hidden">
                    <Menu className="rotate-0 scale-100 transition-shadow h-[1.2rem] w-[1.2rem]" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" aria-describedby="Navigation Menu">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Select a page</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-2 py-5">
                    {
                        links.map((link) => (
                            <Link key={link.label.toLowerCase()} href={link.href}
                                  className="text-lg" onClick={() => setOpen(false)}>{link.label}</Link>)
                        )
                    }
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;