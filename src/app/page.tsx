// TODO: sliding banner of cats
import { StyledExternalLink, StyledLink } from '@/components/UtilComponents/StyledLink';

const Home = () => (
    <main>
        <section className="flex flex-col items-center bg-gradient-to-b from-teal-400 to-green-400 px-6 py-36 text-center md:px-[20%]">
            {/* TODO: fade-in animation on logo? */}
            {/* TODO: other loading animations? loading spinner */}
            <div className="mb-10">
                {/*<Logo />*/}
                <img src="/logo_black.png" alt="Mansfield Cat Rescue Logo" />
            </div>
            <p className="max-w-[28rem] text-sm">
                Mansfield Cat Rescue is a volunteer-only, UK-registered charity operating in Mansfield, Nottinghamshire
            </p>
            <p className="text-xs">
                <strong>(Charity Number: 1193319)</strong>
            </p>
        </section>
        <div className="flex justify-center overflow-hidden">
            {/* TODO: this is a fucking horrible solution: please implement scrolly image as soon as possible before I scratch my eyes out*/}
            <img src="/banner_extra.webp" />
            <img src="/banner.webp" alt="Our mission is to rescue, the dream is that one day we don't have to" />
            <img src="/banner_extra.webp" />
        </div>
        <section className="px-6 py-8 md:px-[10%] lg:px-[15%]">
            <h2 className="text-center">About Us</h2>
            <div className="text-sm">
                <p>
                    Mansfield Cat Rescue rescues, rehabilitates and rehomes stray, abandoned, and feral cats. All of our
                    cats and kittens are fostered and looked after in a home environment by our volunteers.
                </p>
                <br />
                <p>
                    We have accounts with a number of vet practices that provide veterinary care to our cats and kittens
                    including; spay/neuter, flea and worm medicines, and treatment for abscesses and other large wounds
                    as needed. Our vets also carry out more complicated procedures such as dental work, and damaged eye
                    or ear removal as recommended. Any cats or kittens that are not suitable for adoption due to ongoing
                    health issues, will be looked after by special long-term foster carers.
                </p>
                <br />
                <p>
                    All those involved in Mansfield Cat Rescue’s mission do so on a volunteer basis with no
                    renumeration. Our vet bills are paid for by donations and fundraising activities.{' '}
                </p>
                <br />
                <p>
                    If you would like to enquire about adopting a cat or kitten from Mansfield Cat Rescue, please{' '}
                    <StyledExternalLink href="https://bit.ly/3ucplsL">click here</StyledExternalLink>.
                </p>
                <br />
                <p>
                    If you would like to view the cats and kittens that Mansfield Cat Rescue have available to adopt,
                    see our <StyledLink href="/adoption">Adoption page</StyledLink>.
                </p>
                <br />
                <p>
                    If you would like to donate to Mansfield Cat Rescue, you can do so via any of the methods provided
                    below:
                </p>
                <br />
                <div>
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
                </div>
                <br />
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
                            border="0"
                            name="submit"
                            title="PayPal - The safer, easier way to pay online!"
                            alt="Donate with PayPal button"
                        />
                        <img
                            alt=""
                            border="0"
                            src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                            width="1"
                            height="1"
                        />
                    </form>
                </div>
                <br />
                <div>
                    <p className="font-semibold">Amazon Wishlist</p>
                    <p>
                        If you would like to purchase items for the cats and kittens in our care, please see our{' '}
                        <StyledExternalLink href="https://www.amazon.co.uk/hz/wishlist/ls/1UDC50S3D85VY?ref_=wl_share">
                            Amazon Wishlist
                        </StyledExternalLink>
                        .
                    </p>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
