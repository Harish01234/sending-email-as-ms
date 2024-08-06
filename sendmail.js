import nodemailer from "nodemailer"

import { otpEmail } from "./emailTemplates/otp.js";
import { thankYouEmail } from "./emailTemplates/Thankyou.js";




const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'one9.devloper@gmail.com', // your Gmail address
      pass: 'nkpa kwhm xbnp plmj', // your Gmail password
    },
  });

  
  
  const mailOptions = {
    from: 'one9.devloper@gmail.com', // Sender address
    to: 'recipient@example.com', // List of recipients
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // Plain text body
    html: thankYouEmail // HTML body
  }; 

// Function to send email
const sendMail = async (mailOptions) => {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  };
  export {mailOptions,sendMail} ;
