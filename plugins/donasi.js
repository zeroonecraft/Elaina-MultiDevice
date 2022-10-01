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
    {index: 2, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 3, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: "Donasi",
footer: "Makasih yang udah donasi",
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['support']
handler.command = /^dona(te|si)$/i

export default handler
