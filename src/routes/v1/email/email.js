const router = require("express").Router();
const ejs = require("ejs");
const path = require("path");
const nodemailer = require("nodemailer");

const email = {
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    destiny: process.env.MAIL_DESTINY,
    host: "smtp.gmail.com",
    port: 587,
} 

router.post("/", function (req, res) {
  const data = req.body;  
  const transport = nodemailer.createTransport({
    host: email.host,
    port: email.port, 
    auth: { user: email.username, pass: email.password } 
    });
  
  ejs.renderFile(path.join(__dirname, "index.ejs"), data, function(err, htmlRendered){
      if(err) return res.status(500).json({
        response: "error",
        sms: "Falha ao gerar o HTML para o Email. Possíveis dados em falta na requisição..."
    })
      
    const mailOptions = { 
        from: data.email, 
        to: email.destiny, 
        subject: data.subject, 
        text: data.messagem, 
        html: htmlRendered
    };

    transport.sendMail(mailOptions, function (error, info) {
        if (error) return res.status(500).json({
            response: "error", 
            sms: "Falha ao enviar o Email."
        });
        return res.status(201).json({
            response: "ok", 
            sms: `Muito obrigado pela mensagem "${data.first_name}", muito em breve entro em contacto...`
        });
    });
})
});
module.exports = router;