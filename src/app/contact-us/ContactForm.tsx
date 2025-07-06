'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import sendEmail from '@/app/contact-us/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        sendEmail(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block font-medium">
                    Your Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-700 outline-none focus:border-yellow-400 focus:shadow-md"
                    {...register('name', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block font-medium">
                    Your Email Address
                </label>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-700 outline-none focus:border-yellow-400 focus:shadow-md"
                    {...register('email', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="mb-3 block font-medium">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Enter your message here"
                    className="w-full resize-none rounded-md border border-gray-300 px-3 py-3 text-gray-700 outline-none focus:border-yellow-400 focus:shadow-md"
                    {...register('message', { required: true })}
                ></textarea>
            </div>
            <div>
                <Button className="max-w-72 bg-secondary text-secondary-foreground shadow-md hover:bg-accent hover:text-accent-foreground">
                    Submit Email
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
