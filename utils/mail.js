const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendVerificationEmail = (email, token) => {
    const verificationLink = `http://localhost:3000/api/auth/verify/${token}`;
    const mailOptions = {
        to: email,
        subject: 'Email Verification',
        text: `Click on this link to verify your email: ${verificationLink}`,
    };
    transporter.sendMail(mailOptions);
};

exports.sendPasswordResetEmail = (email, token) => {
    const resetLink = `http://localhost:3000/api/auth/reset-password?token=${token}`;
    const mailOptions = {
        to: email,
        subject: 'Password Reset',
        text: `Click on this link to reset your password: ${resetLink}`,
    };
    transporter.sendMail(mailOptions);
};
