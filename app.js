const fs = require('fs');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const {  p1,p2,p3,listItems} = require('./consts');

// Read the HTML email template
const emailTemplate = fs.readFileSync('email-template.hbs', 'utf8');

// Compile the Handlebars template
const compiledTemplate = handlebars.compile(emailTemplate);

// Data to fill in the template
const emailData = {
    title: 'My Email',
    heading: 'Welcome to my email',
    p1,
    name:'שלמה',
    role:'מפתח',
    department:'משרד התיכנון',
    p2,
    p3,
    listItems
};

// Use Nodemailer to send the email
async function sendEmail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: false,
        secureConnection:false,
        host: 'smtp.gmail.com',
        auth: {
            user: 'shlomonuswork@gmail.com',
            pass: 'bwrp mqno bptl oofc',
        },
    });

    const mailOptions = {
        from: 'shlomonuswork@gmal.com',
        to: 'lea.nus90@gmal.com',
        subject: 'Your Email Subject',
        html: compiledTemplate(emailData),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendEmail();