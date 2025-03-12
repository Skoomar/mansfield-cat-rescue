import { HeadingProps } from 'react-html-props';

export const H1 = (props: HeadingProps) => (
    <h1 {...props} className="text-center font-serif text-3xl font-bold">{props.children}</h1>
);
