import { FormData } from '@/app/contact-us/ContactForm';

const sendEmail = (data: FormData) => {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((error) => {
            alert(error);
        });
};

export default sendEmail;
