import { HeadingProps } from 'react-html-props';

export const H1 = (props: HeadingProps) => (
    <h1 {...props} className="text-3xl font-serif font-bold">{props.children}</h1>
)