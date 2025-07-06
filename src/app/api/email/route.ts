import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export const POST = async (request: NextRequest) => {
    const { name, email, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: process.env.CONTACT_FORM_EMAIL,
            pass: process.env.CONTACT_FORM_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.CONTACT_FORM_EMAIL,
        to: process.env.CONTACT_FORM_EMAIL,
        cc: email,
        subject: `Message from ${name} (${email}`,
        text: message,
    };

    const sendMailPromise = () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, (err) => {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    };

    try {
        sendMailPromise();
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
