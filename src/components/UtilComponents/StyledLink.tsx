import Link from 'next/link';
import { ReactNode } from 'react';

export const StyledLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link className="text-blue-600 visited:text-purple-600 hover:underline dark:text-blue-500" href={href}>
        {children}
    </Link>
);
export const StyledExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
        className="text-blue-600 visited:text-purple-600 hover:underline dark:text-blue-500"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </Link>
);
