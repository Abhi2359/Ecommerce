require("dotenv").config();
const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    //host:process.env.SMTP_HOST,
    //port:465,
    //secure:true,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_MAIL,
   // to: "abhishekchoudhary1033@gmail.com",
    to:options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent:%s", info.messageId);
    }
  });
};

module.exports = sendEmail;

