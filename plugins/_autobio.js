let handler = async (m, { conn, text }) => {
	let setting = global.db.data.settings[conn.user.jid]
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
                let namebot = global.namebot
		let bio = `⏰ 𝙰𝚔𝚝𝚒𝚏 𝚂𝚎𝚕𝚊𝚖𝚊 ${uptime} || 🌎 𝙼𝚘𝚍𝚎: ${global.opts['self'] ? '𝙿𝚛𝚒𝚟𝚊𝚝𝚎' : setting.groupOnly ? '𝙷𝚊𝚗𝚢𝚊 𝙶𝚛𝚞𝚙' : '𝙿𝚞𝚋𝚕𝚒𝚔'} || 🎨 𝙲𝚛𝚎𝚊𝚝𝚎 𝙱𝚢 𝙱𝚒𝚗𝚝𝚊𝚗𝚐 𝟷𝟹𝟶𝟸`
		await conn.updateProfileStatus(bio).catch(_ => _)
		conn.reply(m.chat, '𝚂𝚞𝚔𝚜𝚎𝚜 𝙼𝚎𝚗𝚐𝚐𝚊𝚗𝚝𝚒 𝙱𝚒𝚘 𝙱𝚘𝚝', m)
		setting.status = new Date() * 1
	}
}

export default handler
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' 𝙷𝚊𝚛𝚒 ☀️\n ', h, ' 𝙹𝚊𝚖 🕐\n ', m, ' 𝙼𝚎𝚗𝚒𝚝 ⏰\n ', s, ' 𝙳𝚎𝚝𝚒𝚔 ⏱️ '].map(v => v.toString().padStart(2, 0)).join('')
}
