const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (subject, tosend, content) => {
  const msg = {
    to: tosend,
    from: "dinithirathnayaka550@gmail.com",
    subject: subject,
    text: content,
    html: `<p>${content}</p>`,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

module.exports = { sendMail };
