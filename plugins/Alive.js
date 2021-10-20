/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🔰```\n\n🔰 My name : ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱\n\n🔰 Developer: Achiya\n\n🔰Thank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱"})

    }
    else {
            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*' })
     }
    }));

    Amdi.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\n🔰 Check github for bot: https://github.com/AchiyaCT/Alpha`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```🔰 Hey There! I'm Online now. 😘```\n\n🔰 Developer: Achiya\n\nThank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱" ,quoted: message.data})

    }
    else {
            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*' ,quoted: message.data})
     }
    }));

    Amdi.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\n🔰 Check github for bot:  https://github.com/AchiyaCT/Alpha`
           , MessageType.text);
            
        }));
}
