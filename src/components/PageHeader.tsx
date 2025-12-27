import { ReactNode } from 'react';
import { cn } from '@/utils/helpers';

export const PageHeader = ({ compact, children }: { compact?: boolean; children: ReactNode }) => (
    <header className={cn('bg-secondary text-secondary-foreground shadow', compact ? 'py-3 lg:py-4' : 'py-6 lg:py-8')}>
        {children}
    </header>
);
