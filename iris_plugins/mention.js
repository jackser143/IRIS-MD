//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                          

// ᾲ̵̧̜̟͇̮̪̠̺̞͎̠̠̜͒̓̒̆́͋м̷̧̛͈̯̇̑̈́͌̔̇̑͊̏̈́́̆ͅ꙰̶̞̗͚̜̺͚͚̬͗̇̄͂̈́͌̚м̸̛͉̮͖̯͙͎̩̓̿̈́́͆̆̏͆̿̚꙰̴̨̀́̐̒̇́̈ㄩ̸̡͚̻̼͔͕́͂̌̂̂̒꙰̶͙̀̽͑́͑̇́͝

                              //
//                                                                                                      //
//                                          BY: SYAM-SENPAI                                            //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : AM꙰M꙰U꙰
* @Developer : Syam-Senpai
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Syam-Senpai

**/











const { INFO, SUDO, IG } = require('../info.js');
const { iris, isPublic } = require("../lib/commands.js");
const { toAudio, getBuffer } = require("../lib/functions.js");

const audios = [
    "https://telegra.ph/file/816cc6a890b000297a561.mp4",
    "https://telegra.ph/file/e322e2b4d7f285f11f888.mp4",
    "https://telegra.ph/file/549b2f05d7ea98d3fe869.mp4"
];


const images = [
    "https://telegra.ph/file/6bcca8ad812e429d24dde.jpg",
    "https://telegra.ph/file/08087652550991390c54f.jpg", 
    "https://telegra.ph/file/f89a97a65465401faf323.jpg" 
];

const title = INFO.split(';')[1];
const body = "|| ◁ㅤ❚❚ㅤ▷||ㅤ ↻";
const url = "http://api.whatsapp.com/send?phone=+919947121619&text=𝐈_𝐋𝐎𝐕𝐄_𝐔_😌💗_"; 
const ptt = true;

iris({ on: "text", fromMe: isPublic }, async ({ m, client, args }) => {
    const sudo = SUDO.split(",");
    if (args.some(arg => sudo.includes(arg))) {
        const randomAudio = audios[Math.floor(Math.random() * audios.length)];
        const randomImage = images[Math.floor(Math.random() * images.length)];

        const audioBuffer = await getBuffer(randomAudio);
        const imageBuffer = await getBuffer(randomImage);

        const audioRes = await toAudio(audioBuffer, 'mp4');

        client.sendMessage(m.jid, {
            audio: audioRes,
            mimetype: 'audio/mpeg',
            ptt: ptt,
            waveform: [0, 99, 0, 99, 0, 99, 0, 99, 0],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: 🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓,
                    body: ⊘ 𝘜𝘴𝘦𝘳 𝘕𝘰𝘵 𝘍𝘰𝘶𝘯𝘥 !!!,
                    mediaType: 2,
                    thumbnail: imageBuffer,
                    mediaUrl: url,
                    sourceUrl: url,
                    showAdAttribution: true
                }
            }
        }, { quoted: m });
    }
});
