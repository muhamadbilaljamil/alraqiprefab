const YOUR_SERVICE_ID = 'service_6bilmgk';
const YOUR_TEMPLATE_ID = 'template_udgw9hn';
const YOUR_PUBLIC_KEY = 'jxNKK-LJmKoTvQBCE';

export const sendEmail = async (emailjs, form) => {
    const response = await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            return result.text;
        }, (error) => {
            console.log(error.status);
            return error.status;
        });
    return response;
};
