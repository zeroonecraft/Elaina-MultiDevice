import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
let wibu = `https://hadi-api.herokuapp.com/api/loli`    
let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, `${conn.getName(m.sender)} 𝚜𝚎𝚔𝚊𝚛𝚊𝚗𝚐 𝚜𝚎𝚍𝚊𝚗𝚐 𝙰𝙵𝙺${text ? ': ' + text : ''}`, '𝙹𝚊𝚗𝚐𝚊𝚗 𝚍𝚒𝚐𝚊𝚗𝚐𝚞 𝚢𝚊 𝚔𝚊𝚔',)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
