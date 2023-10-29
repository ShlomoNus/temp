const fs = require('fs');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const {  footer_text_1,footer_text_2,header_text,listIntro_1_text,listIntro_2_text,listItems,main_text,orders_text_1,orders_text_2,orders_text_3} = require('./consts');

// Read the HTML email template
const templateSource = fs.readFileSync(
    __dirname + "/views/email-template.hbs",
    "utf8"
  );
// Compile the Handlebars template
const compiledTemplate = handlebars.compile(templateSource);

// Data to fill in the template
const emailData = {
    title: "My Email",
    heading: "Welcome to my email",
    header_text,
    name: "שלמה",
    role: "מפתח",
    department: "משרד התיכנון",
    listIntro_1_text,
    listIntro_2_text,
    main_text,
    orders_text_1,
    orders_text_2,
    orders_text_3,
    footer_text_1,
    footer_text_2,
    listItems,
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