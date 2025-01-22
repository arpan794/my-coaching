import nodeMailer from "nodemailer";

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth:{
            email: process.env.SMPT_EMAIL,
            pass: process.env.SMPT_PASSWORD,
        }
    });
    
    const mailOptions = {
        from: process.env.SMPT_EMAIL,
        to: options.eamil,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions);
}


export default sendEmail;