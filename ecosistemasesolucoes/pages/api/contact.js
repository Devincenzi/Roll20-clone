// import  from 'nodemailer';

export default function(req, res){
    let nodemailer = require('nodemailer');

    const { nome, email, assunto, mensagem } = req.body;
    // console.log(`nome: ${nome}, \nemail: ${email}, \nassunto: ${assunto}, \nmensagem: ${mensagem}`);

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "mail.ecosistemasesolucoes.com.br",
        auth: {
            user: 'comercial@ecosistemasesolucoes.com.br',
            pass: 'Eco@2212963',
        },
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailData = {
        from: `${email}`,
        to: 'comercial@ecosistemasesolucoes.com.br',
        subject: `${assunto}`,
        text: `${mensagem} ${' '} - ${nome}`,
        html: `<div>${mensagem}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    });

    transporter.close();

    // transporter.verify(function (err, info) {
    //     if(err)
    //       console.log(err)
    //     else
    //       console.log(info)
    // });
}