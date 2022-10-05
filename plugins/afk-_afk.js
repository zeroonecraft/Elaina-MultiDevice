export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        conn.sendButtonDoc(m.chat,`
    𝙺𝚊𝚖𝚞 𝚋𝚎𝚛𝚑𝚎𝚗𝚝𝚒 𝙰𝙵𝙺${user.afkReason ? ' 𝚜𝚎𝚝𝚎𝚕𝚊𝚑 ' + user.afkReason : ''}
𝚂𝚎𝚕𝚊𝚖𝚊 ${(new Date - user.afk).toTimeString()}
  `,'𝙷𝚊𝚒 𝙺𝚊𝚔')
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        conn.sendButtonDoc(m.chat,`
    𝙹𝚊𝚗𝚐𝚊𝚗 𝚝𝚊𝚐 𝚍𝚒𝚊!
  𝙳𝚒𝚊 𝚜𝚎𝚍𝚊𝚗𝚐 𝙰𝙵𝙺 ${reason ? '𝚍𝚎𝚗𝚐𝚊𝚗 𝚊𝚕𝚊𝚜𝚊𝚗 ' + reason : '𝚝𝚊𝚗𝚙𝚊 𝚊𝚕𝚊𝚜𝚊𝚗'}
  𝚂𝚎𝚕𝚊𝚖𝚊 ${(new Date - afkTime).toTimeString()}
  `,'𝙼𝚊𝚊𝚏 𝙺𝚊𝚔')
    }
    return true
}
