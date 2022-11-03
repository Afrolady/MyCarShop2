const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "fecedc33472cca",
          pass: "7cfc9c007a4731"
        }
      });
    const mensaje={
        from: "MyCarShop Store <noreply@mycarshop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;