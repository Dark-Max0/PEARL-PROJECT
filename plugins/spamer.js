/* Copyright (C) 2021 Queen Amdi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


Amdi.addrex({pattern: 'spam ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.SPAM_DESC, dontAddCommandList: true}, (async (message, match) => {

    if (message.jid === '393475528094-1415817281@g.us') {

        return;
    }


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

    }

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

    

    await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text);

}));

Amdi.addrex({pattern: 'killspam', fromMe: true,  deleteCommand: false,  desc: Lang.STOP_SPAMDESC, dontAddCommandList: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));
