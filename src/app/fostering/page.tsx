import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fosterFormUrl } from '@/utils/linkStore';

const Fostering = () => (
    <>
        <PageHeader>
            <h1>Fostering</h1>
        </PageHeader>
        <section className="px-6 py-8 md:px-[10%] lg:px-[15%]">
            <div>
                <p>
                    Here at MCR, we are always looking for new foster carers for our cats. We have cats and kittens of
                    all ages, temperaments, and health statuses so we normally find someone to suit your situation.
                </p>
                <br />
                <p>
                    Whether you would prefer kittens or nursing mums, battered lost boys, or sanctuary cats looking for
                    somewhere to live out the rest the rest of their lives, we can find the cat for you.
                </p>
                <br />
                <p>
                    Cats in foster care are covered for all veterinary costs and care under one of our registered vet
                    practices. We also have a friendly foster group on Facebook where you can ask for advice or just
                    share fun photos and stories with your fellow fosterers.
                </p>
                <br />
                <p>If fostering sounds like something you would enjoy, please complete an application!</p>
            </div>
            <div className="mt-5 flex justify-center">
                {/* TODO: see if there's a short link for this form that doesn't go through Facebook*/}
                <Button
                    asChild
                    className="h-10 bg-secondary text-secondary-foreground shadow-md hover:bg-accent hover:text-accent-foreground"
                >
                    <Link href={fosterFormUrl} target="_blank" rel="noopener noreferrer">
                        Apply to foster
                    </Link>
                </Button>
            </div>
        </section>
    </>
);

export default Fostering;
