import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const cristiano = (await axios.get(`https://k.top4top.io/p_2930k67vy0.jpg`)).data;
  const ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())];
  conn.sendFile(m.chat, ronaldo, 'error.jpg', `*Venta de diamantes ID aquí:  https://chat.whatsapp.com/GVweATZgOlHKmk4PmLwtZu*`, m);
};
// conn.sendButton(m.chat, "*Venta de diamantes ID aquí:  https://chat.whatsapp.com/GVweATZgOlHKmk4PmLwtZu*", author, ronaldo, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['diamantes', 'cr7'];
handler.tags = ['internet'];
handler.command = /^(diamantes|diamantes)$/i;
export default handler;
