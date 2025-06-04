
import nodemailer from 'nodemailer';

const Server = () => {


    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: "limjerrysonlim@gmail.com",
        pass: "!234Tyui"
      }
    });
    post("/api/send", (req, res) => {
      const mailOptions = {
        from: req.body.email,
        to: "enquiry@advancedtechsys.co",
        subject: "Enquiry from " + req.body.firstName + " " + req.body.lastName + " hp: " + req.body.phone,
        html: req.body.message
      };
      transporter.sendMail(mailOptions, (error, info) => {
         if(error){
           return res.status(500).send(error);
         }
         res.status(200).send("Email sent successfully");
      });
    });
   // const port = 3000;
    // app.listen(port, () => console.log(`Server running on port ${port}`));
  }

    export default Server;