const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Untuk parsing form data

// Konfigurasi nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Bisa disesuaikan dengan layanan email lain
  port: 587,
  auth: {
    user: 'erzie.aldrian02@gmail.com', // Ganti dengan email pengirim
    pass: 'hwoa azxw llxo uqow', // Ganti dengan password atau app-specific password
  },
});

// Route untuk form
app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body; // Ambil data dari form

  const mailOptions = {
    from: email, // Dari email yang diinput di form
    to: 'neko.play02@gmail.com', // Email tujuan
    subject: subject, // Subject dari form
    text: message, // Pesan dari form
  };

  // Kirim email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).send('Something went wrong.');
    }
    console.log('Email sent:', info.response);
    res.send('Email sent successfully!');
  });
});

// Jalankan server
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
