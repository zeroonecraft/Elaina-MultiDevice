const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    let hapus = m.key.participant
    let pesan = m.key.id

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*𝙶𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔 𝚍𝚎𝚝𝚎𝚌𝚝!*${isBotAdmin ? '' : '\n\n_𝙱𝚘𝚝 𝚗𝚘𝚝 𝚊𝚍𝚖𝚒𝚗_  t_t'}`, author, ['off antilink', '/disable antilink'], m)
        if (isBotAdmin && bot.restrict) {
           return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: pesan, participant: hapus }})
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('𝙾𝚠𝚗𝚎𝚛 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘 𝚔𝚒𝚌𝚔!')
    }
    return !0
}
