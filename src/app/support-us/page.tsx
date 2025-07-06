import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { StyledLink } from '@/components/UtilComponents/StyledLink';

const SupportUs = () => (
    <>
        <PageHeader>
            <h1>Support Us</h1>
        </PageHeader>
        <section className="px-6 py-8">
            <p>
                There are lots of ways that you can support us at MCR. As we are a volunteer-based charity, your time is
                what is most valuable to us!
            </p>
            <br />
            <p>Ways you can help us are:</p>
            <ul className="mb-3 list-disc pl-10">
                {/* TODO: make this link styling a global */}
                <li>
                    Fostering for us - see our <StyledLink href="/fostering">fostering page</StyledLink>
                </li>
                <li>Fundraising for us</li>
                <li>Food and cash donations </li>
                <li>Sharing our Facebook posts</li>
                <li>Volunteering at our events</li>
            </ul>
        </section>
        <section className="px-6">
            <h2>Our Shop</h2>
            <p>Visit our SumUp shop</p>
        </section>
    </>
);

export default SupportUs;
