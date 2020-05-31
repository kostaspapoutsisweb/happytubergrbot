const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzE2NjU4NTg2Mzg1Nzc2NzAz.XtO_Gw.3tuvo9fTUSrTQTGZ9EI6hnoFH6U);//BOT_TOKEN is the Client Secret
