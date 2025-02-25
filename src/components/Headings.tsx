import { HeadingProps } from 'react-html-props';

export const H1 = (props: HeadingProps) => (
    <h1 {...props} className="text-3xl font-serif font-bold text-center">{props.children}</h1>
);
