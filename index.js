const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "madhavsharma2106@gmail.com",
  from: "hello@shrutoons.com",
  subject: "Sending with Twilio SendGrid is Fun",
  html: `
  Hello <br>
  I hope this email finds you well! I wanted to reach out because I think I have found a better way to engage with young patients - <strong>Illustrations!</strong> And that is something we are good at - just ask any of the <a href="http://instagram.com/shrutoons" target="_blank">12000 </a> people who follow us on Instagram.
  <br>
  <br>
  I have a few ideas I would like to run through you: 
  <ul>
  <li>  Custom colouring sheets in the waiting area for the kids to enjoy. </li>
  <li>Illustrations to educate kids about the Dos and Donts for their health.</li>
  <li>Custom Social Media Posts, Emails, Posters etc. that connects with your target audience better. </li>
  </ul>
  I have attached my portfolio for your convenience and an opportunity to explain more about how I can help you engage and retain your customers better will be greatly appreciated.
  <br>
  Eagerly looking forward to a response from you.
  <br>
  <br>

  Best Regards, <br>
  Madhav Sharma 
  
  `,
};

(async () => {
  try {
    const res = await sgMail.send(msg);
    console.log(res);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
