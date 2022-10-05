import { alquran } from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `𝚌𝚘𝚗𝚝𝚘𝚑:\n${usedPrefix + command} 𝟷 𝟸\n\n𝚖𝚊𝚔𝚊 𝚑𝚊𝚜𝚒𝚕𝚗𝚢𝚊 𝚊𝚍𝚊𝚕𝚊𝚑 𝚜𝚞𝚛𝚊𝚑 𝙰𝚕-𝙵𝚊𝚝𝚒𝚑𝚊𝚑 𝚊𝚢𝚊𝚝 𝟸 𝚋𝚎𝚜𝚎𝚛𝚝𝚊 𝚊𝚞𝚍𝚒𝚘𝚗𝚢𝚊, & 𝚊𝚢𝚊𝚝𝚗𝚢𝚊 𝟷 𝚜𝚊𝚓𝚊`
    if (isNaN(args[0]) || isNaN(args[1])) throw `𝚌𝚘𝚗𝚝𝚘𝚑:\n${usedPrefix + command} 𝟷 𝟸\n\n𝚖𝚊𝚔𝚊 𝚑𝚊𝚜𝚒𝚕𝚗𝚢𝚊 𝚊𝚍𝚊𝚕𝚊𝚑 𝚜𝚞𝚛𝚊𝚑 𝙰𝚕-𝙵𝚊𝚝𝚒𝚑𝚊𝚑 𝚊𝚢𝚊𝚝 𝟸 𝚋𝚎𝚜𝚎𝚛𝚝𝚊 𝚊𝚞𝚍𝚒𝚘𝚗𝚢𝚊, & 𝚊𝚢𝚊𝚝𝚗𝚢𝚊 𝟷 𝚜𝚊𝚓𝚊`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.help = ['alquran']
handler.tags = ['quran']
handler.command = ['alquran']

export default handler
