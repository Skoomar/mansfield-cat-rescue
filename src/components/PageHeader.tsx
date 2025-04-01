import { ReactNode } from 'react';

export const PageHeader = ({ children }: { children: ReactNode }) => (
    <header className="bg-secondary py-6 text-secondary-foreground lg:py-8">{children}</header>
);
