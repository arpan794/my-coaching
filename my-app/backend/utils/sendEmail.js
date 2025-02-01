import nodeMailer from "nodemailer";

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth:{
            email: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        }
    });
    
    const emailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(emailOptions);
}


export default sendEmail;