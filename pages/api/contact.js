import emailjs from '@emailjs/browser';


// Just check if all required fields are provided
function formValid(body) {
    return body.email && body.fullname && body.subject && body.message;
}

export default async function handler(req, res) {
    const body = req.body;

    if (!formValid(body)) {
        res.status(400).json({ message: 'Request Failed!' });
        return;
    }

    const templateParams = {
        fullname: body.fullname,
        subject: body.subject,
        email: body.email,
        message: body.message,
        reply_to: body.email,
    };

    await emailjs.send('service_mrir31b','template_po1ksap', templateParams, '_vVLGS-c0keBsf6tR')
        .then((response) => {
            return res.status( 200 ).json( { mishu: 'mishu' } );
        }, (err) => {
            res.status(400).json({ error: err });
        });

    

}