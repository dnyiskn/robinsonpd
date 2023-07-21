import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;
  const user = process.env.user;
  const data = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "paul@robinsonpaint.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <pEmail: <${email}</p>
      <p>Message: ${message}</p>`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Could not send the email. Your message was not sent" });
  }

  // Validate the data coming in is correct ADD REGEX
  return res.status(200).json({ name, email, message });
}
