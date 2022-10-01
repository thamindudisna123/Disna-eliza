/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94768084855'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94768084855'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94768084855'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮' // Your name ඔබේ නම 
global.botnma = '✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮' //ownernama,ownername
global.packname = ' 🍰  🎀  𝒢𝑒𝓃𝒶𝓇𝑒𝓉𝑒𝒹 𝒷𝓎-𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  🍰' // Sticker package name 
global.author = '✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/5d2c7349c32159d609e4e.jpg`
global.alive =`✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮ ALIVE NOW

 🍰  🎀  𝒢𝑒𝓃𝒶𝓇𝑒𝓉𝑒𝒹 𝒷𝓎-𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  🍰


👉මේ whatsapp group එකට join වෙන්න
https://chat.whatsapp.com/LcLK8NZgeJ9GJfGITIKCvG


👉මේ youtube channel එක subscribe කරලා suport එකක් දෙන්න :-https://www.youtube.com/channel/UCV9YD7Jt3M-wak61MPqWogw



👇👇👇👇👇👇👇👇👇👇
කම්මැලි මිනිසුන් යම්දෙයක් 
කිරීමට ඇති කෙටිම හා ලෙසිම 
විදිය සොයාගනී
☝☝☝☝☝☝☝☝☝☝☝

❤🥰Good day to you🥰❤'

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using ✮  🎀  𝒯𝒽𝒶𝓂𝒾𝓃𝒹𝓊 𝒟𝒾𝓈𝓃𝒶  🎀  ✮ bot

`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐌𝐃`
global.mess = {
    success: '✅හරී!',
    admin: 'ඕක admin විතරයි use කරන්න පුලුවන් වෙන්නෙ',
    botAdmin: 'Bot must be admin neh!',
    owner: 'ඕක owner only',
    group: 'ඕක group cmd එකක් මේකට add වෙන්න https://chat.whatsapp.com/LcLK8NZgeJ9GJfGITIKCvG',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'පොඩ්ඩක් ඉන්න ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
