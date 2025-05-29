import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('API Route called');

  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Creating transporter...');

    // Corrected transporter creation
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // Changed to standard secure port
      secure: true, // true for 465
      auth: {
        user: 'n3kob0t03@gmail.com',
        pass: 'mjbe rceu qgqp cwpa',
      },
    });

    // Test transporter connection
    console.log('Testing transporter connection...');
    try {
      await transporter.verify();
      console.log('Transporter connection successful');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        {
          error: 'Email service configuration error',
          details: verifyError.message,
          code: verifyError.code,
        },
        { status: 500 }
      );
    }

    // Email options (same as before)
    const mailOptions = {
      from: '"Portfolio Contact Form" <n3kob0t03@gmail.com>',
      to: 'erzie.aldrian02@gmail.com',
      subject: `Email From porto - Contact Form Message`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Message
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This email was sent from your portfolio contact form.
      `,
    };

    console.log('Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to send email',
        code: error.code || 'UNKNOWN_ERROR',
      },
      { status: 500 }
    );
  }
}
