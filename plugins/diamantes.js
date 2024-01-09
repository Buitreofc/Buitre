let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*_Venta de diamantes por ID aquí:_*
https://chat.whatsapp.com/GVweATZgOlHKmk4PmLwtZu`, null, {
mentions: [a, b]
})}
handler.help = ['comprardiamantes']
handler.tags = ['main', 'fun']
handler.command = ['comprardiamantes','comprardiamantes']
handler.group = true
export default handler