import { PageHeader } from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { adoptionFormUrl, fosterFormUrl, strayCatFormUrl } from '@/utils/linkStore';
import { StyledExternalLink, StyledLink } from '@/components/UtilComponents/links';
import { UnorderedList } from '@/components/UtilComponents/lists';

const faqItems = [
    {
        key: 'adopt',
        question: 'How can I adopt a cat?',
        answer: (
            <>
                Please complete the <StyledExternalLink href={adoptionFormUrl}>adoption form</StyledExternalLink>. Some
                of our available cats can be found on the <StyledLink href="/adoption">adoption page</StyledLink> but if
                you are unsure please fill in an application form and our team will try their best to match you with a
                cat.
            </>
        ),
    },
    {
        key: 'foster',
        question: 'How can I foster?',
        answer: (
            <>
                We are always on the lookout for new cat fosterers. Whether that be for kittens, adult cats, or
                long-term sanctuary cats. Please in the{' '}
                <StyledExternalLink href={fosterFormUrl}>fostering form</StyledExternalLink>.
            </>
        ),
    },
    {
        key: 'donations',
        question: 'Donations',
        answer: (
            <>
                Thank you for thinking of us for a donation! We are always happy to receive wet and dry cat food, cat
                toys, beds, and accessories (in good condition and clean please).
                <br />
                <br />
                We have permanent donation bins in the Sutton-in-Ashfield Pets at Home and the Priory Vets in Beeston.
                Otherwise please email us at{' '}
                <StyledExternalLink href="mailto:mansfieldcatwatch@outlook.com">
                    mansfieldcatwatch@outlook.com
                </StyledExternalLink>
                .
            </>
        ),
    },
    {
        key: 'out-of-area',
        question: 'Out-Of-Area Cats',
        answer: (
            <>
                Mansfield Cat Rescue covers Nottinghamshire, parts of South Yorkshire including Doncaster, and east
                Derbyshire. <br />
                <br />
                You are welcome to enquire if we have space for cats outside of this geographical area, however we don't
                often have space as our waiting lists are very long. Please use{' '}
                <StyledExternalLink href="https://catchat.org/">CatChat.org</StyledExternalLink> to locate your nearest
                cat rescue.
            </>
        ),
    },
    {
        key: 'owned',
        question: 'Owned Cats',
        answer: (
            <>
                We are a stray and feral rescue and are unable to take in owner-relinquished cats. Please check{' '}
                <StyledExternalLink href="https://catchat.org/">CatChat.org</StyledExternalLink> for a list of your
                local rehoming centres. It is also worth contacting your local cats protection branch and asking to be
                put on their waiting list.
            </>
        ),
    },
    {
        key: 'stray',
        question: 'Stray Cats',
        answer: (
            <>
                If the cat is approachable and friendly, please apply a paper collar with your details to establish if
                the cat is owned. Knocking on doors in your local area, putting up posters, and using social media are
                also good ways to determine if the cat is owned.
                <br />
                <br />
                If all of these have been attempted, please complete the{' '}
                <StyledExternalLink href={strayCatFormUrl}>stray cat form</StyledExternalLink> and we will add the cat
                to our waiting list. One of our volunteers will come out to trap the cat when we have capacity.
                <br />
                <br />
                If the stray is injured, we advise you take it to the nearest vet so it can be treated. If you contact
                the RSPCA on 0300 1234 999 they will issue you with a code which the vets can use to access funding, you
                will not be asked to pay anything.
            </>
        ),
    },
    {
        key: 'injured',
        question: 'Injured Cats',
        answer: (
            <>
                We advise you to take the cat to the nearest vets so it can be treated. If you contact the RSPCA on 0300
                1234 999 they will issue you with a code which the vets use to treat the cat, you will not be asked to
                pay anything.
                <br />
                <br />
                If you are not able to take the cat to the nearest vets, please email us/contact us on Facebook and
                advise your location and we will try and get one of our volunteers out to you as soon as we can. Please
                note our volunteers all have full time jobs so might not be able to come to you immediately.
            </>
        ),
    },
    {
        key: 'missing',
        question: 'What to do if your cat is missing',
        answer: (
            <>
                <UnorderedList>
                    <li>
                        Please use the Mansfield Cat Rescue Lost & Found Facebook group to advertise your cat as
                        missing.
                    </li>
                    <li>
                        Contact the microchip company, log them as missing, and ensure all your personal details are
                        up-to-date.
                    </li>
                    <li>Call for your cat late at night and early in the morning when it is quieter.</li>
                    <li>Put their litter tray or bedding outside so they can smell it to help find their way home.</li>
                    <li>
                        Knock on neighbours doors and check sheds and garages in the local area to ensure they have not
                        been shut in.
                    </li>
                    <li>Put up posters or flyers in your local area as not everyone is on social media</li>
                </UnorderedList>
            </>
        ),
    },
    {
        key: 'adoption-fees',
        question: 'Adoption Fees',
        answer: (
            <>
                Our adoption fees are:
                <UnorderedList>
                    <li>£180 for a single cat or kitten</li>
                    <li>£280 for a pair</li>
                </UnorderedList>
                This includes vaccines, neutering, microchipping, up to date parasite control and 5 weeks free insurance
                from Agria.
                <br />
                <br />
                If you are adopting an FIV cat from us, there is no fee, however if you wish to make a donation we would
                be highly appreciative of that.
            </>
        ),
    },
    {
        key: 'volunteering',
        question: 'Volunteering',
        answer: (
            <>
                Thank you for your interest. We are always on the lookout for helpful, willing volunteers. We have roles
                available for:
                <UnorderedList>
                    <li>fosterers</li>
                    <li>fundraisers</li>
                    <li>cat transport</li>
                </UnorderedList>
                and so much more.
                <br />
                <br />
                Please email us on{' '}
                <StyledExternalLink href="mailto:mansfieldcatwatch@outlook.com">
                    mansfieldcatwatch@outlook.com
                </StyledExternalLink>{' '}
                so that one of our trustees can get in touch as soon as they are available.
            </>
        ),
    },
];

const FAQs = () => (
    <>
        <PageHeader>
            <h1>FAQs</h1>
        </PageHeader>
        <section className="px-6 py-8 md:px-[20%] lg:px-[25%]">
            <Accordion type="single" collapsible>
                {faqItems.map((item) => (
                    <AccordionItem key={item.key} value={item.key}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    </>
);

export default FAQs;
