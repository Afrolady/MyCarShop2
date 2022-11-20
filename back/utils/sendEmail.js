const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "juandavid_v3@hotmail.com",//no sé si se debe modificar, o si es necesario, preguntar a Isabel
          pass: "lhqyxlcozvmnrlkw"//pendiente de verificación en microsotf, creo que se puede ignorar
        }
      });
    const mensaje={
        from: "MyCarShop Store <juandavid_v3@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;