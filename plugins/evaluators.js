/* Copyright (C) 2021 T-REX

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

T-REX HIRUWA
*/

const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const Config = require('../config')
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

const Language = require('../language');
const Lang = Language.getString('evaluators');

Trex.addrex({pattern: 'term ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.TERM_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var user = os.userInfo().username;
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var antilink_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antilink_var = vars.ANTI_LINK
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'SI') ldc = '*අවවාදයයි⚠️⚠️⚠️ලින්ක් දැමිම තහනම්⛔* \n\n *සමාවෙන්න ඔබව ඉවත් කෙරෙ👹*'
if (Config.LANG == 'EN') ldc = '*Warning⚠️⚠️⚠️Linking is prohibited⛔* \n\n *Sorry you have been removed👹*'
Trex.addrex({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antilink_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));

var antilink_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antilink_var = vars.ANTI_WHATS
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'SI') ldc = '*අවවාදයයි⚠️⚠️⚠️වට්සැප් ලින්ක් දැමිම තහනම්⛔* \n\n *සමාවෙන්න ඔබව ඉවත් කෙරෙ👹*'
if (Config.LANG == 'EN') ldc = '*Warning⚠️⚠️⚠️WHATSAPP Linking is prohibited⛔* \n\n *Sorry you have been removed👹*'
Trex.addrex({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antilink_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('https://chat.whatsapp.com/')
        let regex2 = new RegExp('http://chat.whatsapp.com/')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️WHATSAPP Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️WHATSAPP Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,'*Warning⚠️⚠️⚠️WHATSAPP Linking is prohibited⛔* \n\n *Sorry you have been removed👹*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*3*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*2*', MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,'*1*', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));
