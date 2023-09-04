import nodemailer from "nodemailer";

const emailProcessor = async (emailBody) => {
  {
    /**
     * need nodemailer
     * transporter to send emails
     * create an ethereal account for testing
     * send mail with defined transport object
     * preview only available when sending through an ethereal account
     * send user verified mail after user make an verify-email link call request
     */
  }

  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail(emailBody);

    // preview only available when sending through an ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

// send link to get user verified
// make sure the emailData has firstName, email and url
export const verificationEmail = (emailData) => {
  const emailBody = {
    from: '"FEWA-STORE" <hq@fewastore.com>', // sender address
    to: emailData.email, // list of receivers
    subject: "Email verification Instruction", // Subject line
    text: `Hi ${emailData.firstName}, please follow the link to verify your email: ${emailData.url}`, // plain text body
    // html body
    html: `
          <h1>Hi ${emailData.firstName},</h1>
          <br />
          <p>Please follow the link to verify your email: </p>
          <br />
          <a href="${emailData.url}">${emailData.url}</a>
          <br />
          <br />
          <p>Thanks</p>
          <p>FEWA-STORE</p>
          `,
  };

  emailProcessor(emailBody);
};

// send verified mail after user clicks the verify-mail link
export const userVerifiedNotification = (emailData) => {
  const emailBody = {
    from: '"FEWA-STORE" <carkeybeekey@gmail.com>', // sender address
    to: emailData.email, // list of receivers
    subject: "Yor account has been verified", // Subject line
    text: `Hi ${emailData.firstName}, your account has been verified, please login to continue. `, // plain text body
    // html body
    html: `
          <h1>Hi ${emailData.firstName},</h1>
          <br />
          <p>Your account has been verified, please login to continue. </p>
          <br />
          <a href="${process.env.ROOT_DOMAIN}">${process.env.ROOT_DOMAIN}</a>
          <br />
          <p>Thanks</p>
          <p>FEWA-STORE</p>
          `,
  };

  emailProcessor(emailBody);
};
