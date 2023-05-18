"use server"
import { revalidatePath } from 'next/cache'

import nodemailer from 'nodemailer'

export async function handleForm(formData: FormData)
  {
    "use server"
    const subject: string = String(formData.get('subject'))
    const email: string = String(formData.get('email'))
    const message:string  = String(formData.get('message'))

    const mailOptionsDev: nodemailer.SendMailOptions = {
        from: process.env.DEV_MAIL as string,
        to: email as string,
        bcc: [process.env.DEV_MAIL as string],
        subject: `Over the board | Contact form with ${subject} " + subject + " was received correctly"`,
        text: String(
            `Hi there, this is a message from the contact form at overtheboard.com.
            We have received your message and we will get back to you as soon as possible.
            Thank you for contacting us.
            Your message:
            ${message}
            
            Best regards,
            Over the board team`
            ),
        };

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure your email service provider settings here
        host: 'smtp.office365.com',
         port: 587,
         secure: false,
        auth: {
          user: process.env.DEV_MAIL,
          pass: process.env.DEV_MAIL_PASSWORD,
        },
      });

    // Send email
    transporter.sendMail(mailOptionsDev, (err, info) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log(`Message sent: ${info.response}`);
        }
        transporter.close();
    });
      revalidatePath('/contact')
  }