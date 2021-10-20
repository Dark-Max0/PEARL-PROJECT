const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
        var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
    await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: 'kkk' })

}));

    Amdi.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '🔰 Hey There! I m Online now. 😘 \n\n🔰 Developer: Achiya\n\nThank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: 'kkk' })

    }));
  
  Amdi.addrex({pattern: 'alive', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '🔰 Hey There! I m Online now. 😘 \n\n🔰 Developer: Achiya\n\nThank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱'  ,quoted: message.data})

    }));
}
