import { ReactNode } from 'react';

export const UnorderedList = ({ children }: { children: ReactNode }) => (
    <ul className="mb-3 mt-2 list-disc space-y-1 pl-10">{children}</ul>
);
