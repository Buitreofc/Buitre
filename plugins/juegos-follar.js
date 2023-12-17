let handler = async (m, {conn, text}) => {
  let coger = `🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!!* 🥵👅🤤
    
  te acabas de coger a la puta de ${text} ⁩mientras gemia como una maldita puta
    
  ${text} ¡te han cogido! 😏
 `.trim();
  m.reply(coger, null, {mentions: conn.parseMention(coger)});
};
handler.help = ["follar"];
handler.tags = ["fun"];
handler.command = /^(coger|violar|follar)$/i;
export default handler;
