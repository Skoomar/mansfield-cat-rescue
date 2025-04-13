import { ReactNode } from 'react';

export const PageHeader = ({ compact, children }: { compact?: boolean, children: ReactNode }) => (
    <header className="bg-secondary py-6 text-secondary-foreground lg:py-8">{children}</header>
);
