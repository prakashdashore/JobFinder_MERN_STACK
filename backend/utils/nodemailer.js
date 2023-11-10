const errorHandler = require("./errorHandler");
const nodemailer = require('nodemailer')
exports.sendMail = (req, res, next, url) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    post: 465,

    // haya pe tum pane credencial dalna 😎
    auth: {
      user: "online.share.999@gmail.com",
      pass: "vvblfbbgzpsucdmk",
    },
  });   

  const mailOptions = {
    from: "internshala <prakash>",
    to: req.body.email,
    subject: "PASSWORD FORGET OTP",
    html : `<h1></h1>
   <a href="${url}">${url}</a> 
    `
  };


  transport.sendMail(mailOptions, (err, info) => {
      if (err) return next(new errorHandler(err, 500));
      console.log(info);
      console.log(err)

    return res.status(200).json({
        message: "mail sent !!",
        url
    });

  });
};





// user tesst ki backCHodi 
// http://localhost:5000/student/forget/64edc6f9d8a76cae5c17c4ea