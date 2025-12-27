import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { StyledExternalLink, StyledLink } from '@/components/UtilComponents/StyledLink';
import { sumUpStoreUrl } from '@/utils/linkStore';

const SupportUs = () => (
    <>
        <PageHeader>
            <h1>Support Us</h1>
        </PageHeader>
        <section className="px-6 py-8 md:px-[10%] lg:px-[15%]">
            <p>
                There are lots of ways that you can support us at MCR. As we are a volunteer-based charity, your time is
                what is most valuable to us!
            </p>
            <br />
            <p>Ways you can help us are:</p>
            <ul className="mb-3 list-disc space-y-1 pl-10">
                {/* TODO: make this link styling a global */}
                <li>
                    Fostering for us - see our <StyledLink href="/fostering">fostering page</StyledLink>
                </li>
                <li>Fundraising for us</li>
                <li>Food and cash donations </li>
                <li>Sharing our Facebook posts</li>
                <li>Volunteering at our events</li>
                <li>
                    Visit our <StyledExternalLink href={sumUpStoreUrl}>SumUp Shop</StyledExternalLink>
                </li>
                {/* TODO: Amazon Wishlist?   */}
            </ul>
            <div>
                <p className="font-semibold">Paypal</p>
                <p>
                    <em>admin@mansfieldcatrescue.co.uk</em>
                </p>
                <p className="mb-2 text-xs">
                    (please select family and friends when making the donation so that PayPal don't take a % of your
                    donation before it reaches us)
                </p>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="4U89UMWAPWTL6" />
                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                    />
                    <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </section>
        {/*<section className="px-6">*/}
        {/*    <h2>Our Shop</h2>*/}
        {/*    <p>Visit our SumUp shop</p>*/}
        {/*</section>*/}
    </>
);

export default SupportUs;
