

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY  🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰  ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now.  🔰```\n\n 🔰 My name : ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 V 2.0.0 private ❱\n\n 🔰 Developer: Achiya\n\n 🔰Thank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱"})
            
     //   await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*' })
       // await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'versnanammaion', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*\n\n` + 
                '```Installed version :```\n' +
                ' V 2.0.0 private'+
                `\n\n🔰 Check github for bot: https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🔰```\n\n🔰 My name : ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 V 2.0.0 - Public ❱\n\n🔰 Developer: HIRUWA\n\n🔰Thank You For Using ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱"})
            
       // await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ('https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰  🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*' })
       // await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'versinanamamamaon', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱*\n\n` + 
                '```Installed version :```\n' +
                ' V 2.0.0 - Public'+
                `\n\n🔰 Check github for bot:  https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
