const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST'
      },
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ message: 'All fields are required' })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ message: 'Invalid email format' })
      };
    }

    // Create transporter (you'll need to set up environment variables in Netlify)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password or app password
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ishan.shivankar@email.com', // Ishan's email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e0e7ff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background: #e0e7ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Ishan Shivankar',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e0e7ff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Dear ${name},
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for reaching out through my portfolio website. I have received your message 
            regarding "<strong>${subject}</strong>" and will get back to you as soon as possible.
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Your Message Summary:</h3>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #2563eb;">
              ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
            </p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            In the meantime, feel free to:
          </p>
          <ul style="color: #555; line-height: 1.6;">
            <li>Check out my latest projects on my portfolio</li>
            <li>Connect with me on LinkedIn</li>
            <li>Follow my work on GitHub</li>
          </ul>
          
          <div style="background: #2563eb; color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">Ishan Shivankar</p>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Technology Professional</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
              Machine Learning | Computer Vision | Blockchain Development
            </p>
          </div>
          
          <p style="font-size: 12px; color: #666; text-align: center; margin-top: 30px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        message: 'Message sent successfully!',
        data: {
          name: name,
          timestamp: new Date().toISOString()
        }
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        message: 'Failed to send message. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};
