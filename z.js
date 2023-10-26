const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("handlebars");
const fs = require("fs"); // You need to require the 'fs' module
const {
  header_text,
  listIntro_1_text,
  listIntro_2_text,
  listItems,
  footer_text_1,
  footer_text_2,
  main_text,
  orders_text_1,
  orders_text_2,
  orders_text_3,
} = require("./consts");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // Read the email template from the file and then render it using Handlebars
  const templateSource = fs.readFileSync(
    __dirname + "/views/email-template.hbs",
    "utf8"
  );
  const template = handlebars.compile(templateSource);

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

  const emailHtml = template(emailData);

  // Send the email HTML as the response
  res.send(emailHtml);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
