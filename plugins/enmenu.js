const Asena = require('../events');

const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const Config = require('../config');
const alive = fs.readFileSync('./Voice/alive.mp3')

const Ln = "  *ALPHA MENU* "

if (Config.LANG == 'EN') {

 if (Config.WORKTYPE == 'public') {

Asena.addrex({ pattern: 'alpha', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg`, { responseType: 'arraybuffer'})

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔═══════════════════════╗
           ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
═════════════════════════
*🇱🇰 Command:* °.xmedia°
*🔰 Description:* °A plugin that have 25 media tools.°
*🇱🇰 Command:* °.admin°
*🔰 Description:* °To get the admin command list°
*🇱🇰 Command:* °.alpha°
*🔰 Description:*°all commands°
 🇱🇰 Command:  .dis on/off
 
 ▷ Description;  Turn on/off Disapearing
 
🇱🇰 Command:   .play
 
 ▷ Description;  Download songs new
 
 🇱🇰 Commans:  .afk
 
 ▷ Description;  Bot is online message
 
*🇱🇰 Command* °.lpack°
*🔰 Description:* °ALPHA LOGO COLLECTION 01°
*🇱🇰 Command:* °.lovepack°
*🔰 Description:* °Send Love message to gf/bf.°
*🇱🇰 Command;* °.grp°
*🔰 Description:* °Send Groups list°
*🇱🇰 Command:* °.warn1,.warn2,.warn3,.warn4
*🔰 Description:* °Send Group Warm msg. Admin only Command°
*🇱🇰 Command:* °.rules°
*🔰 Description: * °Send Group Rules°
*🇱🇰 Command:* °.switch°
*🔰 Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🇱🇰 Command:* °.anime°
*🔰 Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°
*🇱🇰 Command:* °.antispam°
*🔰 Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🇱🇰 Command:* °.mp3°
*🔰 Description:* °Convert mp4 into mp3.°
*🇱🇰 Command:* °.photo°
*🔰 Description:* °🇱🇰🔰 Convert sticker into an image.°
*🇱🇰 Command:* °.ffmpeg°
*🔰 Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🇱🇰 Command:* °.agn°
*🔰 Description:* °Send Gn wish with image.°
*🇱🇰 Command:* °.agm°
*🔰 Description:* °Send Gm wish with image.°
*🇱🇰 Command:* °.info°
*🔰 Description:* °Show chat details°
*🇱🇰 Command:* °.covid°
*🔰 Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🇱🇰 Command:* °.meme°
*🔰 Description:* °The photos you replied to are memes.°
*🇱🇰 Command:* °.movie°
*🔰 Description:* °Movies වල විස්තර ලබාදීම.°
*🇱🇰 Command:* °.notes°
*🔰 Description:* °Show your notes.°
*🇱🇰 Command:* °.save°
*🔰 Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🇱🇰 Command:* °.deleteNotes°
*🔰 Description:* °Clear your all notes.°
*🇱🇰 Command:* °.ocr°
*🔰 Description:* °Scan your picture into text.°
*🇱🇰 Command:* °.removebg°
*🔰 Description:* °Removing background of image.°
*🇱🇰 Command:* °.report°
*🔰 Description:* °Report someone in the group to admins.°
*🇱🇰 Command:* °.fsong°
*🔰 Description:* °Uploading file type songs.°
*🇱🇰 Command:* °.song°
*🔰 Description:* °Uploading mp3 type songs.°
*🇱🇰 Command:* °.video°
*🔰 Description:* °Downloading videos from YouTube°
*🇱🇰 Command:* °.insta°
*🔰 Description:* °🇱🇰🔰 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Download instagram videos.°
*🇱🇰 Command:* °.fb°
*🔰 Description:* °🇱🇰🔰 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Download Facebook videos.°
*🇱🇰 Command:* °.trt°
*🔰 Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🇱🇰 Command:* °.spdf°
*🔰 Description:* °Converts a Site into PDF°
*🇱🇰 Command:* °.quote°
*🔰 Description:* °It Sends Random Quote°
*🇱🇰 Command:* °.currency°
*🔰 Description:* °To convert currencies.°
*🇱🇰 Command:* °.tts°
*🔰 Description:* °It translates words into voice messages.°
*🇱🇰 Command:* °.yt°
*🔰 Description:* °Searchng videos on YouTube.°
*🇱🇰 Command:* °.wiki°
*🔰 Description:* °Search Wikipedia.°
*🇱🇰 Command:* °.img°
*🔰 Description:* °Downloading google images.°
*🇱🇰 Command:* °.wame°
*🔰 Description:* °Get a link to the user chat.°
*🇱🇰 Command:* °.github°
*🔰 Description:* °Stalk github profiles of given username.
⌨️ Example: .github Alpha°
*🇱🇰 Command:* °.tk°
*🔰 Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK °
*🇱🇰 Command:* °.ss°
*🔰 Description:* °Take screenshot of given links°
*🇱🇰 Command:* °.mod°
*🔰 Description:* °Search modded apk in Moddroid site.°
*🇱🇰 Command:* °.spoti°
*🔰 Description:* °Search songs from spotify.°
*🇱🇰 Command:* °.animesay°
*🔰 Description:* °🇱🇰🔰 Write text on anime girl s paper°
*🇱🇰 Command:* °.changesay°
*🔰 Description:* °Weite chaged my mind themed memes°
*🇱🇰 Command:* °.trumpsay°
*🔰 Description:* °🇱🇰🔰 Write text on Trump Twitter°
*🇱🇰 Command:* °.spotify°
*🔰 Description:* °Download spotify songs.°
*🇱🇰 Command:* °.sticker°
*🔰 Description:* °Make stickers to your images. Reply to an image.°
*🇱🇰 Command:* °.sticvid°
*🔰 Description:* °🇱🇰🔰 Converts animated stickers to video.°
*🇱🇰 Command:* °.alive°
*🔰 Description:* °Check bot online or not°
*🇱🇰 Command:* °.version°
*🔰 Description:* °Check version of bot.°
*🇱🇰 Command:* °.tagadmin°
*🔰 Description:* °Tag all group admins.°
*🇱🇰 Command:* °.tblend°
*🔰 Description:* °Applies the selected TBlend effect to videos.°
*🇱🇰 Command:* °.carbon°
*🔰 Description:* °Convert text into Carbon effect°
*🇱🇰 Command:* °.gm°
*🔰 Description:* °it sends good morning text message°
*🇱🇰 Command:* °.gn°
*🔰 Description:* °it sends good night text message°
*🇱🇰 Command:* °.ttp°
*🔰 Description:* °Make text image°
*🇱🇰 Command:* °.attp°
*🔰 Description:* °Make animated text stickers in Rainbow theme°
*🇱🇰 Command:* °.unaudio°
*🔰 Description:* °Converts sound recording to an audio File.°
*🇱🇰 Command:* °.unvoice°
*🔰 Description:* °Convert mp3 into a WA voice message°
*🇱🇰 Command:* °.vid2°
*🔰 Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°
*🇱🇰 Command:* °.weather°
*🔰 Description:* °Check weather.°
*🇱🇰 Command:* °.speedtest°
*🔰 Description:* °Check download and upload speed°
*🇱🇰 Command:* °.ping°
*🔰 Description:* °Your ping.°
*🇱🇰 Command:* °.short°
*🔰 Description:* °Shorten link.°
*🇱🇰 Command:* °.xxx°
*🔰 Description:* °xnxx අඩවියේ සෙක්ස් වීඩියෝ බාගත කරයි අව්නර් සදහා පමණයි..Download sex videos on xnxx site°
` ,quoted: message.data})

    }));

   }

 

else if (Config.WORKTYPE == 'private') {
 
 
Asena.addrex({ pattern: 'alpha', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/c4f4d62acfce433ed3f5e.jpg`, { responseType: 'arraybuffer'})

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `╔═══════════════════════╗
           ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱
═════════════════════════
*🇱🇰 Command:* °.xmedia°
*🔰 Description:* °A plugin that have 25 media tools.°
*🇱🇰 Command:* °.admin°
*🔰 Description:* °To get the admin command list°
*🇱🇰 Command:* °.alpha°
*🔰 Description:*°all commands°
 🇱🇰 Command:  .dis on/off
 
 ▷ Description;  Turn on/off Disapearing
 
🇱🇰 Command:   .play
 
 ▷ Description;  Download songs new
 
 🇱🇰 Commans:  .afk
 
 ▷ Description;  Bot is online message
*🇱🇰 Command* °.lpack°
*🔰 Description:* °ALPHA LOGO COLLECTION 01°
*🇱🇰 Command:* °.lovepack°
*🔰 Description:* °Send Love message to gf/bf.°
*🇱🇰 Command;* °.grp°
*🔰 Description:* °Send Groups list°
*🇱🇰 Command:* °.warn1,.warn2,.warn3,.warn4
*🔰 Description:* °Send Group Warm msg. Admin only Command°
*🇱🇰 Command:* °.rules°
*🔰 Description: * °Send Group Rules°
*🇱🇰 Command:* °.switch°
*🔰 Description:* °Turn on/off chat bot.
⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*
To turn on AI chat, *.switch CHAT_BOT:false*
(This is a only admin command)°
*🇱🇰 Command:* °.anime°
*🔰 Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°
*🇱🇰 Command:* °.antispam°
*🔰 Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°
*🇱🇰 Command:* °.mp3°
*🔰 Description:* °Convert mp4 into mp3.°
*🇱🇰 Command:* °.photo°
*🔰 Description:* °🇱🇰🔰 Convert sticker into an image.°
*🇱🇰 Command:* °.ffmpeg°
*🔰 Description:* °Apply ffmpeg filter to a video
⌨️ Example: .ffmpeg fade=in:0:30°
*🇱🇰 Command:* °.gn°
*🔰 Description:* °Send Gn wish with image.°
*🇱🇰 Command:* °.gm°
*🔰 Description:* °Send Gm wish with image.°
*🇱🇰 Command:* °.info°
*🔰 Description:* °Show chat details°
*🇱🇰 Command:* °.covid°
*🔰 Description:* °Check information about Covid-19 of countries.
Example : .covid Sri Lanka°
*🇱🇰 Command:* °.meme°
*🔰 Description:* °The photos you replied to are memes.°
*🇱🇰 Command:* °.movie°
*🔰 Description:* °Movies වල විස්තර ලබාදීම.°
*🇱🇰 Command:* °.notes°
*🔰 Description:* °Show your notes.°
*🇱🇰 Command:* °.save°
*🔰 Description:* °Reply *.save* to a message or type *.save <your_note>*°
*🇱🇰 Command:* °.deleteNotes°
*🔰 Description:* °Clear your all notes.°
*🇱🇰 Command:* °.ocr°
*🔰 Description:* °Scan your picture into text.°
*🇱🇰 Command:* °.removebg°
*🔰 Description:* °Removing background of image.°
*🇱🇰 Command:* °.report°
*🔰 Description:* °Report someone in the group to admins.°
*🇱🇰 Command:* °.fsong°
*🔰 Description:* °Uploading file type songs.°
*🇱🇰 Command:* °.song°
*🔰 Description:* °Uploading mp3 type songs.°
*🇱🇰 Command:* °.video°
*🔰 Description:* °Downloading videos from YouTube°
*🇱🇰 Command:* °.insta°
*🔰 Description:* °🇱🇰🔰 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Download instagram videos.°
*🇱🇰 Command:* °.fb°
*🔰 Description:* °🇱🇰🔰 ❰ 🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 ❱ Download Facebook videos.°
*🇱🇰 Command:* °.trt°
*🔰 Description:* °It translates with Google Translator. You must mention any message.°
*⌨️ Example:* °.trt en si (From English to Sinhala)°
*🇱🇰 Command:* °.spdf°
*🔰 Description:* °Converts a Site into PDF°
*🇱🇰 Command:* °.quote°
*🔰 Description:* °It Sends Random Quote°
*🇱🇰 Command:* °.currency°
*🔰 Description:* °To convert currencies.°
*🇱🇰 Command:* °.tts°
*🔰 Description:* °It translates words into voice messages.°
*🇱🇰 Command:* °.yt°
*🔰 Description:* °Searchng videos on YouTube.°
*🇱🇰 Command:* °.wiki°
*🔰 Description:* °Search Wikipedia.°
*🇱🇰 Command:* °.img°
*🔰 Description:* °Downloading google images.°
*🇱🇰 Command:* °.wame°
*🔰 Description:* °Get a link to the user chat.°
*🇱🇰 Command:* °.github°
*🔰 Description:* °Stalk github profiles of given username.
⌨️ Example: .github Alpha°
*🇱🇰 Command:* °.tk°
*🔰 Description:* °Stalk tiktok profile to a given username.
⌨️ Example: .tK °
*🇱🇰 Command:* °.ss°
*🔰 Description:* °Take screenshot of given links°
*🇱🇰 Command:* °.mod°
*🔰 Description:* °Search modded apk in Moddroid site.°
*🇱🇰 Command:* °.spoti°
*🔰 Description:* °Search songs from spotify.°
*🇱🇰 Command:* °.animesay°
*🔰 Description:* °🇱🇰🔰 Write text on anime girl s paper°
*🇱🇰 Command:* °.changesay°
*🔰 Description:* °Weite chaged my mind themed memes°
*🇱🇰 Command:* °.trumpsay°
*🔰 Description:* °🇱🇰🔰 Write text on Trump Twitter°
*🇱🇰 Command:* °.spotify°
*🔰 Description:* °Download spotify songs.°
*🇱🇰 Command:* °.sticker°
*🔰 Description:* °Make stickers to your images. Reply to an image.°
*🇱🇰 Command:* °.sticvid°
*🔰 Description:* °🇱🇰🔰 Converts animated stickers to video.°
*🇱🇰 Command:* °.alive°
*🔰 Description:* °Check bot online or not°
*🇱🇰 Command:* °.version°
*🔰 Description:* °Check version of bot.°
*🇱🇰 Command:* °.tagadmin°
*🔰 Description:* °Tag all group admins.°
*🇱🇰 Command:* °.tblend°
*🔰 Description:* °Applies the selected TBlend effect to videos.°
*🇱🇰 Command:* °.carbon°
*🔰 Description:* °Convert text into Carbon effect°
*🇱🇰 Command:* °.gm°
*🔰 Description:* °it sends good morning text message°
*🇱🇰 Command:* °.gn°
*🔰 Description:* °it sends good night text message°
*🇱🇰 Command:* °.ttp°
*🔰 Description:* °Make text image°
*🇱🇰 Command:* °.attp°
*🔰 Description:* °Make animated text stickers in Rainbow theme°
*🇱🇰 Command:* °.unaudio°
*🔰 Description:* °Converts sound recording to an audio File.°
*🇱🇰 Command:* °.unvoice°
*🔰 Description:* °Convert mp3 into a WA voice message°
*🇱🇰 Command:* °.vid2°
*🔰 Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°
*🇱🇰 Command:* °.weather°
*🔰 Description:* °Check weather.°
*🇱🇰 Command:* °.speedtest°
*🔰 Description:* °Check download and upload speed°
*🇱🇰 Command:* °.ping°
*🔰 Description:* °Your ping.°
*🇱🇰 Command:* °.short°
*🔰 Description:* °Shorten link.°
*🇱🇰 Command:* °.xxx°
*🔰 Description:* °xnxx අඩවියේ සෙක්ස් වීඩියෝ බාගත කරයි අව්නර් සදහා පමණයි..Download sex videos on xnxx site°
` })

    

    }));

 }

}
