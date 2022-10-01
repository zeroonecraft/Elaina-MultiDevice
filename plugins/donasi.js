let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`

const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let ppown = 'https://media.discordapp.net/attachments/996447135547539478/999308487949553714/qris.png'
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
