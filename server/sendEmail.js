const sendEmail = async (text) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  let nodemailer = require("nodemailer");

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_DEST_EMAIL,
      subject: "New message received from Portfolio",
      text: text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
