import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const PageHeader = ({ compact, children }: { compact?: boolean, children: ReactNode }) => (
    <header className={cn("bg-secondary text-secondary-foreground", compact ? "py-3 lg:py-4" : "py-6 lg:py-8")}>{children}</header>
);
