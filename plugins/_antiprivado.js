export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, 𝐄𝐬𝐭𝐚 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐡𝐚𝐛𝐥𝐚𝐫 𝐚𝐥 𝐩𝐫𝐢𝐯𝐚𝐝𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭 𝐩𝐨𝐫 𝐥𝐨 𝐜𝐮𝐚𝐥 𝐬𝐞𝐫𝐚𝐬 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨‚𝐒𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭 𝐥𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐡𝐚𝐜𝐞𝐫 𝐞𝐧 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐠𝐫𝐮𝐩𝐨:

https://chat.whatsapp.com/F0m1MFj3tGGF4DdB9IKYyY

𝐅𝐄𝐋𝐈𝐙 𝐍𝐀𝐕𝐈𝐃𝐀𝐃`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
