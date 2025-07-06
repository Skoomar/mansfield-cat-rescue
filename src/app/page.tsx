// TODO: sliding banner of cats
import Logo from '@/components/Logo';
import Link from 'next/link';

const Home = () => (
    <main>
        <section className="flex flex-col items-center bg-gradient-to-b from-teal-400 to-green-400 px-6 py-36 text-center">
            {/* TODO: fade-in animation on logo? */}
            {/* TODO: other loading animations? loading spinner */}
            <div className="mb-9">
                {/*<Logo />*/}
                <img src="/Black%20Logo.png" alt="Mansfield Cat Rescue Logo" />
            </div>
            <p className="text-xs">
                Mansfield Cat Rescue is a volunteer only, UK-registered charity (charity number: 1193319) operating in
                Mansfield, Nottinghamshire
            </p>
        </section>
        <div className="flex justify-center">
            <img src="/banner.webp" alt="Our mission is to rescue, the dream is that one day we don't have to" />
        </div>
        <section className="px-6 py-8">
            <h2 className="text-center">About Us</h2>
            <div className="text-sm">
                <p>
                    Mansfield Cat Rescue rescues, rehabilitates and rehomes stray, abandoned, and feral cats. All of our
                    cats and kittens are fostered and looked after in a home environment by our volunteers.
                </p>
                <p>
                    We have accounts with a number of vet practices that provide veterinary care to our cats and kittens
                    including; spay/neuter, flea and worm medicines, and treatment for abscesses and other large wounds
                    as needed. Our vets also carry out more complicated procedures such as dental work, and damaged eye
                    or ear removal as recommended. Any cats or kittens that are not suitable for adoption due to ongoing
                    health issues, will be looked after by special long-term foster carers.
                </p>
                <p>
                    All those involved in Mansfield Cat Rescue’s mission do so on a volunteer basis with no
                    renumeration. Our vet bills are paid for by donations and fundraising activities.{' '}
                </p>
                <p>
                    If you would like to enquire about adopting a cat or kitten from Mansfield Cat Rescue, please{' '}
                    <Link href="https://bit.ly/3ucplsL" target="_blank" rel="noopener noreferrer">
                        click here
                    </Link>
                </p>
                <p>
                    If you would like to view the cats and kittens that Mansfield Cat Rescue have available to adopt,
                    see our <Link href="/adoption">Adoption page</Link>
                </p>
                <p>
                    If you would like to donate to Mansfield Cat Rescue, you can do so via any of the methods provided
                    below:
                </p>
                <ul className="list-none">
                    <li>
                        <p className="font-semibold">Bank Transfer</p>
                        <p>
                            Nat West
                            <br />
                            Mansfield Cat Rescue
                            <br />
                            Sort code: 54-10-23
                            <br />
                            Account number: 19376804
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold">Paypal</p>
                        <p>
                            admin@mansfieldcatrescue.co.uk - (please select family and friends when making the donation
                            so that PayPal don't take a % of your donation before it reaches us)
                        </p>
                    </li>
                </ul>
                <p>
                    If you would like to purchase items for the cats and kittens in our care, please see our{' '}
                    <Link
                        href="https://www.amazon.co.uk/hz/wishlist/ls/1UDC50S3D85VY?ref_=wl_share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amazon Wishlist
                    </Link>
                </p>
            </div>
        </section>
    </main>
);

export default Home;
