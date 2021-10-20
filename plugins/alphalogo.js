/* 
*/

const lasiapi = require('textmaker-lasi'); // Import NPM Package

const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvbGl6eS8=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'SI') desc_msg = '🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 Logo එකතුව'
if (Config.LANG == 'EN') desc_msg = '🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰 Logo colection'
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addrex({pattern: 'lpack$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    if (Config.LANG == 'SI') {
        t1 = 'Devil Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Lightning Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    else {
        t1 = 'Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI') {
        usage_cmd = '🍀 *උදා :* _'
        command_cmd = '🇱🇰 *විධානය :* '
        desc_cmd = '🌐*විස්තරය :* _'
    } else { 
        usage_cmd = '🍀 Example : '
        command_cmd = '🇱🇰 Command : '
        desc_cmd = '🌐 Desc : '
    }
    const msg = command_cmd + '```.devil``` \n' + t1 + '_\n' + usage_cmd + '*.devil ALPHA *\n\n' +
        command_cmd + '```.bear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.bear ALPHA*\n\n' +
        command_cmd + '```.wolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.wolf ALPHA,Achiya*\n\n' +
        command_cmd + '```.neon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.neon ALPHA*\n\n' +
        command_cmd + '```.2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.2neon ALPHA*\n\n' +
        command_cmd + '```.3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '*.3neon ALPHA*\n\n' +
        command_cmd + '```.4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '*.4neon ALPHA*\n\n' +
        command_cmd + '```.light``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.light ALPHA*\n\n' +
        command_cmd + '```.joker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.joker ALPHA*\n\n' +
        command_cmd + '```.ninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.ninja ALPHA,Achiya*\n\n' +
        command_cmd + '```.glitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.glitter ALPHA*\n\n' +
        command_cmd + '```.bokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.bokeh ALPHA*\n\n' +
        command_cmd + '```.marvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.marvel ALPHA,Achiya*\n\n' +
        command_cmd + '```.2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '*.2marvel ALPHA,Achiya*\n\n' +
        command_cmd + '```.avengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '*.avengers ALPHA,Achiya*\n\n' +
        command_cmd + '```.graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '*.graf Achiya,ALPHA*\n\n' +
        command_cmd + '```.2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '*.2graf Achiya,ALPHA*\n\n' +       
        command_cmd + '```.lion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '*.lion Achiya,ALPHA*\n\n' +
        command_cmd + '```.ice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '*.ice ALPHA*\n\n' +
        command_cmd + '```.space``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '*.space ALPHA,Achiya*\n\n' +
        command_cmd + '```.smoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '*.smoke ALPHA*\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.fire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '*.fire ALPHA*\n\n' +
        command_cmd + '```.harry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '*.harry ALPHA*\n\n' +
        command_cmd + '```.cup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '*.cup ALPHA*\n\n' +
        command_cmd + '```.cemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '*.cemetery ALPHA*\n\n' +
        command_cmd + '```.glitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '*.glitch ALPHA,Achiya*\n\n'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));

XTroid.addrex({pattern: 'lil ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/lil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/lil.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'devil ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/devil.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'bear ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/bear.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'wolf ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    lasiapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/wolf.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'neon ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/neon.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: '2neon ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/neon2.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'light ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/li.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'joker ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/joker.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'ninja ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    lasiapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ninja.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'glitter ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/tt.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'bokeh ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/bkh.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'marvel ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/marvel.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: '2marvel ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/mar2.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'avengers ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/aven.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'glitch ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/tt2.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'graf ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ttgra.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: '2graf ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/t2gra.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'lion ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/lion.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: '3neon ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/neon3.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'ice ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ice.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
XTroid.addrex({pattern: 'space ?(.*)', fromMe: wk, dontaddrexList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    lasiapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/space.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

