import FacebookIconLink from '@/components/Footer/FacebookIconLink';
import InstagramIconLink from '@/components/Footer/InstagramIconLink';
import ShopIconLink from '@/components/Footer/ShopIconLink';

const Footer = () => (
    <footer className="flex justify-evenly border-t px-4 py-5">
        <FacebookIconLink />
        <InstagramIconLink />
        <ShopIconLink />
    </footer>
);

export default Footer;
