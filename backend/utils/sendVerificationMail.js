const { createMailTransporter } = require("./createMailTransporter");

const sendVerificationMail = (user) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: '"Pharmacy Tracking System" <>',
    to: user.email,
    subject: "Verify Doctor..",
    html: `<P>Please Verify ${user.username}, Here ypu  can verify doctor by clicking this link...</p>
    <a href='${process.env.CLIENT_URL}/verify-email?emailToken=${user.emailToken}'>Verify Doctor</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification email sent");
    }
  });
};
