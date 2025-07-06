import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import FacebookIconLink from '@/components/Footer/FacebookIconLink';
import { LucideMail } from 'lucide-react';
import ContactForm from '@/app/contact-us/ContactForm';
import { StyledExternalLink } from '@/components/UtilComponents/StyledLink';

const ContactUs = () => (
    <>
        <PageHeader>
            <h1>Contact Us</h1>
        </PageHeader>
        <section className="px-6 py-8">
            <div className="mb-5">
                <p>
                    Please remember the rescue is 100% volunteer-led and our admin team all run the rescue around
                    full-time jobs and busy lives. We will get back to you as soon as possible!
                </p>
                <br />
                <p>
                    If you are contacting us about a sick or injured cat, please attempt to take them to the nearest vet
                    for any urgent medical treatment. All vets have a responsibility to provide urgent medical care.
                </p>
                <br />
                <p>If your enquiry isn't urgent then please contact us through the methods below:</p>
            </div>
            <div className="mb-3 flex items-center gap-3 pl-2">
                <FacebookIconLink />
                <p>
                    Contact us through{' '}
                    <StyledExternalLink href="https://www.facebook.com/Mansfieldcat/">Facebook</StyledExternalLink>{' '}
                </p>
            </div>
            <br />
            <div className="mb-5 flex items-center gap-3 pl-2">
                <LucideMail size="35" />
                <p>Contact us via our email form</p>
            </div>
            <div className="pl-2">
                <ContactForm />
            </div>
        </section>
    </>
);

export default ContactUs;
