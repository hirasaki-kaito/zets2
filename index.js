// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s')
const got = require("got")
const imageToBase64 = require('image-to-base64')
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { mediafireDl } = require('./lib/mediafire.js')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')

//Game
const tebakgambar = JSON.parse(fs.readFileSync('./lib/tebakgambar.json'))
const tebakimia = JSON.parse(fs.readFileSync('./lib/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./lib/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./lib/tebakbendera.json'))
const tebakata = JSON.parse(fs.readFileSync('./lib/tebakata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./lib/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./lib/tebakjenaka.json'))
//batas

banChats = true
offline = false
targetpc = '6281553838607'
owner = '6281553838607' //6285751056816
fake = '*Created By @Sanzz_*'
botname = 'SanzBot'
simbol = '>'
numbernye = '0'
waktu = '-'
alasan = '-'

img1 = fs.readFileSync('./stik/thumb.jpeg')
img2 = fs.readFileSync('./stik/fake.jpeg')
//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, buttinMessage, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : '' 
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'

//Ucapan & Dll
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var tampilUcapans = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
switch(tampilUcapans){
case 0: tampilUcapans = 'Selamat Malam 🌠'; break;
case 1: tampilUcapans = 'Selamat Malam 🌠'; break;
case 2: tampilUcapans = 'Selamat Malam 🌠'; break;
case 3: tampilUcapans = 'Selamat Pagi 🌄'; break;
case 4: tampilUcapans = 'Selamat Pagi 🌄'; break; 
case 5: tampilUcapans = 'Selamat Pagi 🌅'; break;
case 6: tampilUcapans = 'Selamat Pagi 🌅'; break;
case 7: tampilUcapans = 'Selamat Pagi 🌤️'; break;
case 8: tampilUcapans = 'Selamat Pagi 🌤️'; break;
case 9: tampilUcapans = 'Selamat Pagi ☀️'; break;
case 10: tampilUcapans = 'Selamat Pagi ☀️'; break;
case 11: tampilUcapans = 'Selamat Siang ☀️'; break; 
case 12: tampilUcapans = 'Selamat Siang ☀️'; break;
case 13: tampilUcapans = 'Selamat Siang ⛅️'; break;
case 14: tampilUcapans = 'Selamat Siang ⛅'; break;
case 15: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 16: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 17: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 18: tampilUcapans = 'Selamat Malam 🌌'; break; 
case 19: tampilUcapans = 'Selamat Malam 🌌'; break;
case 20: tampilUcapans = 'Selamat Malam 🌌'; break;
case 21: tampilUcapans = 'Selamat Malam 🌌'; break;
case 22: tampilUcapans = 'Selamat Malam 🌌'; break; 
case 23: tampilUcapans = 'Selamat Malam 🌌'; break;
}
var tampilUcapan = "" + tampilUcapans;
var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + tampilUcapans + ":" + menit + ":" + detik;
var tampilHari = "" + tampilUcapans;

        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `??`,
                 "h": `yy`,
                 'duration': '99999', 
                 'caption': `Created by alyabot`,
                 'jpegThumbnail': img1,
                        }
                       }
	                  }         
const katalog = (teks) => {
             res = hexa.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 499999999999999999, "message": teks, "footerText": "*Kontol*", "thumbnail": img1, "surface": 'CATALOG' }}, {quoted:mek})
             hexa.relayWAMessage(res)
        }	                     
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
hexa.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hexa.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await hexa.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await hexa.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hexa.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}            

//Tebak Gambar
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Gambar 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
}
}
//Cak Lontong
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Caklontong 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./lib/caklontong.json", JSON.stringify(caklontong))
}
}
//Tebak Jenaka
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Jenaka 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}
//Tebak Lirik
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Lirik 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./lib/tebaklirik.json", JSON.stringify(tebaklirik))
}
}
//Tebak Bendera
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Bendera 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakbendera.json", JSON.stringify(tebakbendera))
}
}
//Tebak Kimia
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*_🎮 Tebak Kimia 🎮_*\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
}
//Tebak Kata
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Kata 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakata.json", JSON.stringify(tebakata))
}
}

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    case 'menu':
    case 'help':
    	var menu = `Hai ${pushname}
Prefix : 「 MULTI-PREFIX 」

*</OWNER>*
${simbol} _${prefix}off_
${simbol} _${prefix}on_
${simbol} _${prefix}status_

*</MAKER>*
${simbol} _${prefix}sticker_
${simbol} _${prefix}swm_ <author|packname>
${simbol} _${prefix}take_ <author|packname>
${simbol} _${prefix}fdeface_
${simbol} _${prefix}emoji_

*</CONVERT>*
${simbol} _${prefix}toimg_
${simbol} _${prefix}tomp3_
${simbol} _${prefix}tomp4_
${simbol} _${prefix}slow_
${simbol} _${prefix}fast_
${simbol} _${prefix}reverse_
${simbol} _${prefix}tourl_

*</UP STORY>*
${simbol} _${prefix}upswteks_
${simbol} _${prefix}upswimage_
${simbol} _${prefix}upswvideo_

*</FUN>*
${simbol} _${prefix}fitnah_
${simbol} _${prefix}fitnahpc_
${simbol} _${prefix}kontak_

*</TAG>*
${simbol} _${prefix}hidetag_
${simbol} _${prefix}kontag_
${simbol} _${prefix}sticktag_
${simbol} _${prefix}totag_

*</DOWNLOAD>*
${simbol} _${prefix}ytsearch_ <query>
${simbol} _${prefix}igstalk_ <query>
${simbol} _${prefix}play_ <query>
${simbol} _${prefix}video_ <query>
${simbol} _${prefix}ytmp3_ <link>
${simbol} _${prefix}ytmp4_ <link>
${simbol} _${prefix}ig_ <link>
${simbol} _${prefix}igstory_ <username>
${simbol} _${prefix}twitter_ <link>
${simbol} _${prefix}tiktok_ <link>
${simbol} _${prefix}tiktokaudio_ <link>
${simbol} _${prefix}fb_ <link>
${simbol} _${prefix}brainly_ <query>
${simbol} _${prefix}image_ <query>
${simbol} _${prefix}anime_ <random>
${simbol} _${prefix}pinterest_ <query>
${simbol} _${prefix}komiku_ <query>
${simbol} _${prefix}lirik_ <query>
${simbol} _${prefix}chara_ <query>
${simbol} _${prefix}playstore_ <query>
${simbol} _${prefix}otaku_ <query>

*</OTHER>*
${simbol} _${prefix}self_
${simbol} _${prefix}public_
${simbol} _${prefix}baileys_
${simbol} _${prefix}setthumb_
${simbol} _${prefix}settarget_
${simbol} _${prefix}setfakeimg_
${simbol} _${prefix}setreply_
${simbol} _${prefix}ping_
${simbol} _${prefix}inspect_
${simbol} _${prefix}join_
${simbol} _${prefix}get_
${simbol} _${prefix}term_ <code>
${simbol} _x_ <code>

*</GROUP>*
${simbol} _${prefix}leave_
${simbol} _${prefix}caripesan_ <query>

*</JADI BOT>*
${simbol} _${prefix}jadibot_
${simbol} _${prefix}stopjadibot_
${simbol} _${prefix}listbot_

*</VOTE>*
${simbol} _${prefix}voting_
${simbol} _${prefix}delvote_
${simbol} _vote_
${simbol} _devote_

*<GAME>*
${simbol} _${prefix}caklontong_
${simbol} _${prefix}tebakgambar_
${simbol} _${prefix}tebakkata_
${simbol} _${prefix}tebaklirik_
${simbol} _${prefix}tebakjenaka_
${simbol} _${prefix}tebakkimia_
${simbol} _${prefix}tebakbendera_

*<WIBU>*
${simbol} _${prefix}neko_
${simbol} _${prefix}waifu_
${simbol} _${prefix}shinobu_
${simbol} _${prefix}megumin_
${simbol} _${prefix}bully_
${simbol} _${prefix}cuddle_
${simbol} _${prefix}cry_
${simbol} _${prefix}hug_
${simbol} _${prefix}awoo_
${simbol} _${prefix}kiss_
${simbol} _${prefix}lick_
${simbol} _${prefix}pat_
${simbol} _${prefix}smug_
${simbol} _${prefix}bonk_
${simbol} _${prefix}yeet_
${simbol} _${prefix}blush_
${simbol} _${prefix}smile_
${simbol} _${prefix}wave_
${simbol} _${prefix}highfive_
${simbol} _${prefix}handhold_
${simbol} _${prefix}nom_
${simbol} _${prefix}bite_
${simbol} _${prefix}glomp_
${simbol} _${prefix}slap_
${simbol} _${prefix}kill_
${simbol} _${prefix}happy_
${simbol} _${prefix}wink_
${simbol} _${prefix}poke_
${simbol} _${prefix}dance_
${simbol} _${prefix}cringe_

*<TEXTPRO>*
${simbol} _${prefix}honey_
${simbol} _${prefix}ice_
${simbol} _${prefix}bread_
${simbol} _${prefix}glossy_
${simbol} _${prefix}magma_
`
sendButLocation(from, `${menu}`,`© alyabot`, {jpegThumbnail:img1}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}], {contextInfo: { mentionedJid: [sender]}}) 
break
    case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!mek.key.fromMe) return sticOwner(from)
reply(`${mek.quoted.isBaileys}`)
break
    case 'scbot':
            sc =  `github.com/Hexagonz/SELF-HX`
            fakegroup(sc) 
            break
    case 'owner':
            own = `Ni kan self anj\nJadi langsung chat aja ke nomor ni`
            fakestatus(own) 
            break
    case 'bc':
    case 'broadcast':
            if (!mek.key.fromMe) return sticOwner(from)
            if (args.length < 1) return reply('teks?')
            anu = await hexa.chats.all()
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            bc = await hexa.downloadMediaMessage(encmedia)
            for (let _ of anu) {
            hexa.sendMessage(_.jid, bc, image, {quoted:reply,caption: `「 *INFORMATION* 」\n\n${body.slice(4)}`})
            }
            reply('Suksess broadcast')
            } else {
            for (let _ of anu) {
            sendMess(_.jid, `「 *INFORMATION* 」\n\n${body.slice(4)}`)
            }
            reply('Suksess broadcast')
            }
            break
    case 'leave':
            if (!isGroup) return sticGroup(from)
            if (isGroupAdmins || mek.key.fromMe) {
            hexa.groupLeave(from)
            } else {
            sticAdmin(from)
            }
            break
    case 'info':
            inf = `Information 𝙱𝚘𝚕𝚍  𝙿𝚛𝚘𝚓𝚎𝚌𝚝
            
            Script:
            github.com/Hexagonz/SELF-HX
            
            Author:
            Hexagonz
            
            Recoded:
            hexaOfficial
            
            Thanks To:
            Hexagonz
            hexaOfficial
            ZEEONE OFC
            Zero YT7
            And Group's 𝐙𝐨𝐧𝐚 𝐁𝐨𝐭`
            fakestatus(inf) 
            break
    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'donasi':
            reply('donasi om buat beli jajan 081553838607')
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q) return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (sticOwner(from) ) return sticOwner(from) 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return sticOwner(from) 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return sticOwner(from) 
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'infotsunami':
//if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
//if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get_result = await fetchJson(`https://ryuu-apii.herokuapp.com/api/infotsunami?apikey=RyukaBotz`)
get_result = get_result.result
ini_tes = "🌱 *Result Info Tsunami*\n\n"
ini_tes += `📅 *Tanggal* : ${get_result.daftar_tsunami[0].tangal}\n`
ini_tes += `🏞 *Lokasi* : ${get_result.daftar_tsunami[0].lokasi}\n`
ini_tes += `🖥 *Magnitude* : ${get_result.daftar_tsunami[0].magnitude}\n`
ini_tes += `🪨 *Kedalaman* : ${get_result.daftar_tsunami[0].kedalaman}\n`
ini_tes += `🌄 *Wilayah* : ${get_result.daftar_tsunami[0].wilayah}`
reply(ini_tes)
break
case 'covidglobal':
//if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
//if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/info/covidworld?apikey=RyukaBotz`)
reply(`🚑 *Result CovidGlobal*\n\n👤 *Total Kasus* : ${get.result.totalCases}\n💉 *Pulih* : ${get.result.recovered}\n🪦 *Meninggal* : ${get.result.deaths}\n🌱 *Kasus Aktif* : ${get.result.activeCases}\n💊 *Kasus Tertutup* : ${get.result.closedCases}\n\n📅 _*Last Update*_ : ${get.result.lastUpdate}`) 
break
case 'cuacabandara':
//if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
//if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get_result = await fetchJson(`https://ryuu-apii.herokuapp.com/api/infocuaca/bandara?apikey=RyukaBotz`)
get_result = get_result.result
ini_tes = "🌱 *Result Info Cuaca Bandara*\n\n"
ini_tes += `💬 *Nama Bandara* : ${get_result.daftar_bandara[0].nama_bandara}\n`
ini_tes += `🕒 *Waktu* : ${get_result.daftar_bandara[0].waktu_pengamatan}\n`
ini_tes += `💨 *Angin* : ${get_result.daftar_bandara[0].arah_angin}\n`
ini_tes += `🌪 *Kecepatan* : ${get_result.daftar_bandara[0].kecepatan}\n`
ini_tes += `👁 *Jarak Pandang* : ${get_result.daftar_bandara[0].jarak_pandang}\n`
ini_tes += `🌄 *Cuaca* : ${get_result.daftar_bandara[0].cuaca}\n`
ini_tes += `🚨 *Titik Timbuni* : ${get_result.daftar_bandara[0].titik_timbun}\n`
ini_tes += `🌬 *Tekanan Udara* : ${get_result.daftar_bandara[0].tekanan_udara}`
reply(ini_tes)
break
case 'infogempa':
//if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
//if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
get = await fetchJson(`https://hardianto.xyz/api/info/gempa?apikey=hardianto`)
reply(`🕒 *Waktu* : ${get.result.Waktu}\n✨ *Lintang* : ${get.result.Lintang}\n🪨 *Bujur* : ${get.result.Bujur}\n🖥 *Magnitudo* : ${get.result.Magnitudo}\n🍃 *Kedalaman* : ${get.result.Kedalaman}\n🌄 *Wilayah* : ${get.result.Wilayah}\n🗺 *Map* : ${get.result.Map}`)
break

break            
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/kuis/tebakGambar?apikey=RyuBotz`)
anu = anu
ini_image = anu.image
jawaban = anu.jawaban
ini_buffer = await getBuffer(ini_image)
clue = anu.clue
buff = await getBuffer(ini_image)
hexa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+clue+'\nWaktu : 30s' }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
titid = "*Jawaban*: " + jawaban
sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
{
buttonId: `${prefix}tebakgambar`,
buttonText: {
displayText: `𝐍𝐄𝐗𝐓 ⏩`,
},
type: 1,
},]);
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
}
break
case 'tebakkata':
if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkata?apikey=RyuBotz`)
anu = anu
jawaban = anu.jawaban
pertanyaan = anu.soal
hexa.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./lib/tebakata.json", JSON.stringify(tebakata))
})
await sleep(30000)
if (tebakata.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakata.json", JSON.stringify(tebakata))
}

break
case 'tebaklirik':
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebaklirik?apikey=RyuBotz`)
jawaban = anu.result.answer
pertanyaan = anu.result.question
hexa.sendMessage(from, '```Tebak Lirik```\n\n• *Soal* :'+anu.result.question+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./lib/tebaklirik.json", JSON.stringify(tebaklirik))
}
break
case 'tebakjenaka':
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakjenaka?apikey=RyuBotz`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.pertanyaan
hexa.sendMessage(from, '```Tebak Jenaka```\n\n• *Soal* :'+anu.result.pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./lib/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
await sleep(30000)
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
break
case 'tebakkimia':
if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkimia?apikey=RyuBotz`)
jawaban = anu.result.lambang
pertanyaan = anu.result.nama
hexa.sendMessage(from, '```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./lib/tebakimia.json", JSON.stringify(tebakimia))
})
await sleep(30000)
if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakimia.json", JSON.stringify(tebakimia))
}
break
case 'tebakbendera':
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakbendera?apikey=RyuBotz`)
jawaban = anu.result.nama
pertanyaan = anu.result.bendera
hexa.sendMessage(from, '```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./lib/tebakbendera.json", JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./lib/tebakbendera.json", JSON.stringify(tebakbendera))
}
break
case 'caklontong':
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/kuis/caklontong?apikey=RyuBotz`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.soal
hexa.sendMessage(from, '```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
break            
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break            
    case 'public':
          	if (!mek.key.fromMe) return sticOwner(from) 
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return sticOwner(from) 
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return sticOwner(from) 
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
//Fitur textprome
case 'magma': case 'glossy': case 'bread': case 'ice': case 'honey':

if (args.length == 0) return reply(`Example: ${prefix}${command} ootlo Botz`)
reply(mess.wait) 
anu = args.join(" ")
ini_buffer = await getBuffer(`https://ryuu-apii.herokuapp.com/api/textpro/${command}?text=${anu}&apikey=RyuBotz`)
hexa.sendMessage(from, ini_buffer, image, { quoted: mek})
//limitAdd(sender, limit)
break			
			//Fitur Anime
case 'neko': case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe':

reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
kon = await getBuffer(anu.url)
pll = `By : ${botname}`
sendButImage(from, pll, `Next Untuk Melanjutkan`, kon, [
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `NEXT ⏩`,
},
type: 1,
},
]); 
break            
	case 'play':                    
             var _0x513421=_0x7f83;(function(_0x47ead4,_0x533dd7){var _0x5437ed=_0x7f83,_0xcf8488=_0x47ead4();while(!![]){try{var _0x13a732=-parseInt(_0x5437ed(0xba))/0x1+parseInt(_0x5437ed(0xc9))/0x2*(parseInt(_0x5437ed(0xb2))/0x3)+parseInt(_0x5437ed(0xbb))/0x4*(parseInt(_0x5437ed(0xb8))/0x5)+parseInt(_0x5437ed(0xb0))/0x6*(parseInt(_0x5437ed(0xb1))/0x7)+-parseInt(_0x5437ed(0xc1))/0x8*(parseInt(_0x5437ed(0xc8))/0x9)+parseInt(_0x5437ed(0xc0))/0xa+-parseInt(_0x5437ed(0xb5))/0xb;if(_0x13a732===_0x533dd7)break;else _0xcf8488['push'](_0xcf8488['shift']());}catch(_0x2da9a8){_0xcf8488['push'](_0xcf8488['shift']());}}}(_0x422d,0x32b6c));function _0x422d(){var _0x1f173f=['\x0a\x0a*Silahkan\x20pilih\x20media\x20yang\x20ingin\x20di\x20download*','9uNKxZa','19702CvsdFZ','thumbnail','102JPFsmn','113351JpxGMr','93xoxXsp','wait','ytmp4\x20','1144319rESQoo','url','duration','65JomOqW','Example:\x20','414355bOYYsc','12260oKMYhY','formattedSize','*----\x20「\x20PLAY\x20MUSIC\x20」----*\x0a\x09\x09\x09\x09\x09\x09\x0a*Title*\x20:\x20','length','join','2555930YoxIDy','1199936ENgrVP','AUDIO','medias','VIDEO','ytmp3\x20','\x0a*Quality*\x20:\x20182kbps\x0a*SizeAudio*\x20:\x20'];_0x422d=function(){return _0x1f173f;};return _0x422d();}if(args[_0x513421(0xbe)]==0x0)return reply(_0x513421(0xb9)+(prefix+command)+'\x20query');query=args[_0x513421(0xbf)]('\x20'),reply(mess[_0x513421(0xb3)]),get_result=await fetchJson('https://api.zacros.my.id/downloader/play?query='+query),result=_0x513421(0xbd)+get_result['title']+'\x0a*Duration*\x20:\x20'+get_result[_0x513421(0xb7)]+_0x513421(0xc6)+get_result[_0x513421(0xc3)][0x7]['formattedSize']+'\x0a*SizeVideo*\x20:\x20'+get_result[_0x513421(0xc3)][0x1][_0x513421(0xbc)]+'\x20\x0a*Url*\x20:\x20'+get_result[_0x513421(0xb6)]+_0x513421(0xc7);var thumbyt1=await getBuffer(get_result[_0x513421(0xca)]);function _0x7f83(_0x40f5f8,_0x4a0fbf){var _0x422d4e=_0x422d();return _0x7f83=function(_0x7f8315,_0x1d0104){_0x7f8315=_0x7f8315-0xb0;var _0x32d399=_0x422d4e[_0x7f8315];return _0x32d399;},_0x7f83(_0x40f5f8,_0x4a0fbf);}sendButLocation(from,''+result,'©\x20'+botname,{'jpegThumbnail':thumbyt1},[{'buttonId':prefix+_0x513421(0xc5)+get_result[_0x513421(0xb6)],'buttonText':{'displayText':_0x513421(0xc2)},'type':0x1},{'buttonId':prefix+_0x513421(0xb4)+get_result[_0x513421(0xb6)],'buttonText':{'displayText':_0x513421(0xc4)},'type':0x1}],{'contextInfo':{'mentionedJid':[sender,owner]}});			                                
               break
                    case 'ytmp3':
            if (!q) return reply(`Masukan judul`)		
            if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(mess.Iv)
             reply(mess.wait)				  
		     anu = await fetchJson(`https://api-xcoders.xyz/api/download/ytmp3?url=${q}&apikey=5S3epf7hC2`)         
		     sendMediaURL(from,anu.result.url)
            break                  
        case 'ytmp4':
          case 'ytmp4':
          if (!q) return reply(`Masukan judul`)		
            if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(mess.Iv)
           reply(mess.wait)				  
          get_hasil = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${q}`)
          mp4 = await getBuffer(get_hasil.result.download_video)
          hm = `*Judul* : ${get_hasil.result.title}\n*Size* : ${get_hasil.result.size}\n*Resolution* : ${get_hasil.result.resolution}`
          hexa.sendMessage(from, mp4, video, { mimetype: 'video/mp4', filename: `${get_hasil.result.title}.mp3`, quoted: mek,caption:hm}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })
          break
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break		
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break	
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
            case 'tt':
            case 'tiktokdl':
            case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
              data = await fetchJson(`https://api.violetics.pw/api/downloader/tiktok?apikey=cf1d-831a-94f1&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.meta.title}\n❤️ *FileType*: tiktok.com\n💬 *Quality*: 148kbps\n📤 *Type*: mp4\n🆔 *Id*: ${data.result.id}\n🔗 *Link*: ${data.result.meta.source}`             
              tes = await getBuffer(data.result.thumb)
              sendButLocation(from, `${result}`,`© ${botname}`, {jpegThumbnail:tes}, [{buttonId:`${prefix}ttwm ${q}`,buttonText:{displayText:'WM'},type:1},{buttonId:`${prefix}tiktoknowm ${q}`,buttonText:{displayText:'NOWM'},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'AUDIO'},type:1}], {contextInfo: { mentionedJid: [sender]}}) 
              break
              case 'ttaudio':
            if (!q) return reply(`Masukan link tiktok`)		
             reply(mess.wait)				  
		     anu = await fetchJson(`https://api-xcoders.xyz/api/download/tiktok2?url=${q}&apikey=5S3epf7hC2`)         
		     sendMediaURL(from,anu.result.audio.url)
            break
            case 'ttwm':
            if (!q) return reply(`Masukan link tiktok`)		
             reply(mess.wait)				  
		     anu = await fetchJson(`https://api-xcoders.xyz/api/download/tiktok2?url=${q}&apikey=5S3epf7hC2`)         
		     sendMediaURL(from,anu.result.video.watermark.url)
            break
 	case 'tiktoknowm':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
	    case 'mediafire':
        if (args.length < 1) return reply('mana link ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('link salah')
        reply(mess.wait)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader

Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}

Choose Whether Document, Audio or Video Below`
        sendButMessage(from, result, `*Zets Bot*`, [
          {
            buttonId: `${prefix}fire ${teks}`,
            buttonText: {
              displayText: `🖨️ Document/Other`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire1 ${teks}`,
            buttonText: {
              displayText: `🖨️ Video`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire2 ${teks}`,
            buttonText: {
              displayText: `🖨️ Audio`,
            },
            type: 1,
          },
        ]);
        break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
            case 'fb': 
            case 'fbdl':
            case 'facebook':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)	
             reply(mess.wait)				  
		     anu = await fetchJson(`https://api.neoxr.eu.org/api/fb?url=${q}&apikey=yourkey`)                          
             sendMediaURL(from,anu.data.url,mek)
             break
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if (budy.startsWith('x')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
