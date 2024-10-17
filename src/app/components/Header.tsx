import Link from 'next/link';

const Header = () => (
    <div className="flex justify-between">
        <Link href="/">Logo</Link>
        <div className="flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/adoption">Adoption</Link>
            <Link href="/fostering">Fostering</Link>
            <Link href="/support">Support</Link>
            <Link href="/contact-us">Contact Us</Link>
        </div>
    </div>
);

export default Header;