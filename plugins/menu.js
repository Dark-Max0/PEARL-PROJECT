/* Copyright (C) 2021 T REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HIRUWA - TREX
උස්සන්නද ආවෙ අම්මට හුකෝගන්නෙ නැතුව පල පොන්නයා 😂👿
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');


if (Config.WORKTYPE == 'public') {

Trex.addrex({pattern: 'alpha', fromMe: false}, (async (message, match) => {
// T-REX LIST👿


    const rows = [
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ BOT active cmd', description:
 ` ╭────────────────
 │     
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
` , rowId:"rowid1"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Text To Img cmd', description:
` ╭────────────────
 │
 │▷ .sticker
 │▷ .sticvid
 │▷ .ffpack
 │▷ .attp { text }
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
`, rowId:"rowid3"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Downloader cmd', description:
 ` ╭────────────────
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │▷ .ss { link }
 │▷ .trt { en si }
 │▷ .short { link }
 │
 ╰────────────────
`, rowId:"rowid4"},
        {title: ' ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Groups cmd', description:
` ╭────────────────
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │   ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
 ╰────────────────
`, rowId:"rowid5"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ For owner cmd', description:
` ╭────────────────
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │ ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
 ╰────────────────
`, rowId:"rowid6"},
        {title: ' ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Fun', description:
` ╭────────────────
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
`, rowId:"rowid20"}
       ]

       const sections = [{title: "❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Menu", rows: rows}]

       const button = {
        buttonText: 'Click Me 🔰',
        description: "❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Menu",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

 Trex.addrex({pattern: 'alpha', fromMe: true}, (async (message, match) => {
// T-REX LIST👿


    const rows = [
        {title: ' ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ BOT active cmd', description:
 ` ╭────────────────
 │
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
` , rowId:"rowid1"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Text To Img cmd', description:
` ╭────────────────
 │
 │▷ .sticker
 │▷ .sticvid
 │▷ .ffpack
 │▷ .attp { text }
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
`, rowId:"rowid3"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Downloader', description:
 ` ╭────────────────
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │▷ .ss { link }
 │▷ .trt { en si }
 │▷ .short { link }
 │
 ╰────────────────
`, rowId:"rowid4"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Groups cmd', description:
` ╭──────────────── 
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │   ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
 ╰────────────────
`, rowId:"rowid5"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ For owner cmd', description:
` ╭────────────────
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │ ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
 ╰────────────────
`, rowId:"rowid6"},
        {title: '❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Fun', description:
` ╭──────────────── 
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
`, rowId:"rowid20"}
       ]

       const sections = [{title: "❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Menu", rows: rows}]

       const button = {
        buttonText: 'Click Me ▷',
        description: "❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Menu",
        sections: sections,
        listType: 1
       }

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

}
