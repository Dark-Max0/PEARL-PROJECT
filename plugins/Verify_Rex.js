const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Trex.addrex({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify ✅',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="0420 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2021|>";
    r_text[2] ="0421 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2022|>";
    r_text[3] ="0771 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2023|>";
    r_text[4] ="0891 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2024|>";
    r_text[5] ="0957 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2025|>";
    r_text[6] ="0582 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2026|>";
    r_text[7] ="0719 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2027|>";
    r_text[8] ="0269 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱  CONFIRMED 🤩 2028|>";
  

    var i = Math.floor(9*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.,', MessageType.text);

    }));
