const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === '𝙱𝙰𝙻𝙰𝚂 𝙿𝙴𝚂𝙰𝙽' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚔𝚒𝚛𝚒𝚖 𝚙𝚎𝚜𝚊𝚗 𝚋𝚊𝚕𝚊𝚜𝚊𝚗 𝚔𝚊𝚖𝚞.\n𝙺𝚎𝚝𝚒𝚔 𝚙𝚎𝚜𝚊𝚗 𝚜𝚎𝚜𝚞𝚊𝚝𝚞 𝚕𝚊𝚕𝚞 𝚔𝚒𝚛𝚒𝚖, 𝚖𝚊𝚔𝚊 𝚙𝚎𝚜𝚊𝚗 𝚘𝚝𝚘𝚖𝚊𝚝𝚒𝚜 𝚖𝚊𝚜𝚞𝚔 𝚔𝚎 𝚝𝚊𝚛𝚐𝚎𝚝 𝚋𝚊𝚕𝚊𝚜 𝚙𝚎𝚜𝚊𝚗.");
	else {
		let imgr = flaaa.getRandom()
		let txt = `𝙷𝚊𝚒 𝚔𝚊𝚔 @${mf.dari.split('@')[0]}, 𝚔𝚊𝚖𝚞 𝚖𝚎𝚗𝚎𝚛𝚒𝚖𝚊 𝚋𝚊𝚕𝚊𝚜𝚊𝚗 𝚗𝚒𝚑.\n\n𝙿𝚎𝚜𝚊𝚗 𝚢𝚊𝚗𝚐 𝚔𝚊𝚖𝚞 𝚔𝚒𝚛𝚒𝚖 𝚜𝚎𝚋𝚎𝚕𝚞𝚖𝚗𝚢𝚊:\n${mf.pesan}\n\n𝙿𝚎𝚜𝚊𝚗 𝚋𝚊𝚕𝚊𝚜𝚊𝚗𝚗𝚢𝚊:\n${m.text}\n`.trim();
		await this.sendButton(mf.dari, bottime, txt, `${imgr + 'Menfess'}`, [['BALAS PESAN', '.balasmenfess']], null).then(() => {
			m.reply('𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕 𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝚋𝚊𝚕𝚊𝚜𝚊𝚗.')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}