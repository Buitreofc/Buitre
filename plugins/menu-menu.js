import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `𝙏𝙃𝙀 𝙈𝙔𝙎𝙏𝙄𝘾 - 𝘽𝙊𝙏

 ▢ *Hola,* ${taguser}

  ╔══════════════
║ ✪ ⃟ 📋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒
╚═══════════════
┃╭──────────────
┃├⫹⫺ 𝙽𝙾𝙼𝙱𝚁𝙴 : ${name}
┃├⫹⫺ 𝙻𝙸𝙼𝙸𝚃𝙴 : ${diamond}
┃├⫹⫺ 𝙽𝙸𝚅𝙴𝙻 : ${level}
〬┃├⫹⫺ 𝚁𝙰𝙽𝙶𝙾 : ${role}
┃├⫹⫺ 𝙴𝚇𝙿 : ${exp}
┃╰──────────────
╚══════════════════⋆
╔════════════
║ ✪ ⃟📑 𝐈𝐍𝐅𝐎𝐁𝐎𝐓
╚═══════════════
║╭──────────────
║├⫹⫺ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 : Gael
║├⫹⫺ 𝙽𝚄𝙼𝙴𝚁𝙾: wa.me/
║├⫹⫺ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
║├⫹⫺ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg} 𝐝𝐞 ${totalreg} 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬:
║╰────────────── 
╚══════════════════⋆

╔══════════════
║ ✪ ⃟📅 𝐇𝐎𝐘
╚═══════════════
║┋⫹⫺ 𝙵𝙴𝙲𝙷𝙰 : ${date}
〬╚═════ ≪ •❈• ≫ ═════╝

╔══════════════
║ ✪ ⃟🧾 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍
╚═══════════════
〬║┋ႌ〬⫹⫺ .𝚎𝚜𝚝𝚊𝚍𝚘
〬║┋ႌ〬⫹⫺ .𝚍𝚜
〬║┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚝𝚞𝚛𝚋𝚘
║┋ႌ〬⫹⫺ .𝚘𝚠𝚗𝚎𝚛
〬║┋ႌ〬⫹⫺ .𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚜𝚝
║┋ႌ〬⫹⫺ .𝚍𝚘𝚗𝚊𝚛
║┋ႌ〬⫹⫺ .𝚐𝚛𝚞𝚙𝚘𝚜
║┋ႌ〬⫹⫺ .𝚒𝚗𝚏𝚘𝚋𝚘𝚝
〬║┋ႌ〬⫹⫺ .𝚌𝚞𝚎𝚗𝚝𝚊𝚜
〬║┋ႌ〬⫹⫺ .𝚛𝚎𝚙𝚘𝚛𝚝𝚎
║┋ႌ〬⫹⫺ .𝚓𝚘𝚒𝚗
║┋ႌ〬⫹⫺ .𝚋𝚘𝚝
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🖥 𝐉𝐀𝐃𝐈𝐁𝐎𝐓
╚═══════════════
║┋ႌ〬⫹⫺ .𝚓𝚊𝚍𝚒𝚋𝚘𝚝
║┋ႌ〬⫹⫺ .𝚓𝚊𝚍𝚒𝚋𝚘𝚝 --𝚌𝚘𝚍𝚎
║┋ႌ〬⫹⫺ .𝚋𝚘𝚝𝚜
║┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚎𝚝𝚎𝚜𝚎𝚜𝚒𝚘𝚗
║┋ႌ〬⫹⫺ .𝚜𝚝𝚘𝚙
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🚀 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚙𝚕𝚊𝚢
║┋ႌ〬⫹⫺ .𝚙𝚕𝚊𝚢𝟸
║┋ႌ〬⫹⫺ .𝚢𝚝𝚊
║┋ႌ〬⫹⫺ .𝚢𝚝𝚟
║┋ႌ〬⫹⫺ .𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔
║┋ႌ〬⫹⫺ .𝚝𝚒𝚔𝚝𝚘𝚔
║┋ႌ〬⫹⫺ .𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
║┋ႌ〬⫹⫺ .𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎
║┋ႌ〬⫹⫺ .𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
║┋ႌ〬⫹⫺ .𝚒𝚖𝚊𝚐𝚎𝚗
║┋ႌ〬⫹⫺ .𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🔎 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚐𝚘𝚘𝚐𝚕𝚎
║┋ႌ〬⫹⫺ .𝚢𝚝𝚜
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🛰 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚝𝚘𝚒𝚖𝚐
║┋ႌ〬⫹⫺ .𝚝𝚘𝚖𝚙𝟹
║┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚝𝚝
║┋ႌ〬⫹⫺ .𝚝𝚘𝚞𝚛𝚕
║┋ႌ〬⫹⫺ .𝚝𝚘𝚟𝚒𝚍𝚎𝚘
║┋ႌ〬⫹⫺ .𝚝𝚝𝚜
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🔊 𝐀𝐔𝐃𝐈𝐎𝐒-𝐄𝐅𝐄𝐂𝐓𝐎𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚋𝚊𝚜𝚜
║┋ႌ〬⫹⫺ .𝚋𝚕𝚘𝚠𝚗
║┋ႌ〬⫹⫺ .𝚍𝚎𝚎𝚙
║┋ႌ〬⫹⫺ .𝚎𝚊𝚛𝚛𝚊𝚙𝚎
║┋ႌ〬⫹⫺ .𝚏𝚊𝚜
║┋ႌ〬⫹⫺ .𝚏𝚊𝚜𝚝
║┋ႌ〬⫹⫺ .𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
║┋ႌ〬⫹⫺ .𝚛𝚎𝚟𝚎𝚛𝚜𝚎
║┋ႌ〬⫹⫺ .𝚛𝚘𝚋𝚘𝚝
║┋ႌ〬⫹⫺ .𝚜𝚕𝚘𝚠
║┋ႌ〬⫹⫺ .𝚜𝚖𝚘𝚘𝚝𝚑
║┋ႌ〬⫹⫺ .𝚝𝚞𝚙𝚊𝚒
║┋ႌ〬⫹⫺ .𝚜𝚚𝚞𝚒𝚛𝚛𝚎𝚕
║┋ႌ〬⫹⫺ .𝚌𝚑𝚒𝚙𝚖𝚞𝚗𝚔
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🛠 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚊𝚌𝚘𝚛𝚝𝚊𝚛
║┋ႌ〬⫹⫺ .𝚚𝚛
║┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚎𝚝𝚎
║┋ႌ〬⫹⫺ .𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎
║┋ႌ〬⫹⫺ .𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🎪 𝐉𝐔𝐄𝐆𝐎𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚖𝚊𝚝𝚎𝚜
║┋ႌ〬⫹⫺ .𝚖𝚊𝚝𝚑
║┋ႌ〬⫹⫺ .𝚜𝚒𝚖𝚒
║┋ႌ〬⫹⫺ .𝚜𝚞𝚎𝚛𝚝𝚎
║┋ႌ〬⫹⫺ .𝚙𝚙𝚝
║┋ႌ〬⫹⫺ .𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
║┋ႌ〬⫹⫺ .𝚍𝚎𝚕𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
║┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚐𝚊𝚢𝚜
║┋ႌ〬⫹⫺ .𝚝𝚘𝚙𝚘𝚝𝚊𝚔𝚞𝚜
║┋ႌ〬⫹⫺ .𝚐𝚊𝚢
║┋ႌ〬⫹⫺ .𝚍𝚘𝚡𝚎𝚊𝚛
║┋ႌ〬⫹⫺ .𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊
║┋ႌ〬⫹⫺ .𝚊𝚙𝚘𝚜𝚝𝚊𝚛
║┋ႌ〬⫹⫺ .𝚜𝚕𝚘𝚝
║┋ႌ〬⫹⫺ .𝚍𝚊𝚍𝚘
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟⚙️ 𝐆𝐑𝐔𝐏𝐎𝐒
╚═══════════════
║┋ႌ〬⫹⫺ .𝚐𝚛𝚞𝚙𝚘
║┋ႌ〬⫹⫺ .𝚔𝚒𝚌𝚔
║┋ႌ〬⫹⫺ .𝚊𝚍𝚍
║┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
║┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
║┋ႌ〬⫹⫺ .𝚊𝚍𝚖𝚒𝚗𝚜
║┋ႌ〬⫹⫺ .𝚒𝚗𝚏𝚘𝚐𝚛𝚘𝚞𝚙
║┋ႌ〬⫹⫺ .𝚙𝚛𝚘𝚖𝚘𝚝𝚛
║┋ႌ〬⫹⫺ .𝚍𝚎𝚖𝚘𝚝𝚎
║┋ႌ〬⫹⫺ .𝚑𝚒𝚍𝚎𝚝𝚊𝚐
║┋ႌ〬⫹⫺ .𝚝𝚊𝚐𝚊𝚕𝚕
║┋ႌ〬⫹⫺ .𝚕𝚒𝚗𝚔
║┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
║┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟✅ 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄
╚═══════════════
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎𝚎
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
║┋ႌ〬⫹⫺ .𝚎𝚗𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
║┋ႌ〬⫹⫺ .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🎭 𝐑𝐏𝐆
╚═══════════════
║┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛
║┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛𝟹
║┋ႌ〬⫹⫺ .𝚖𝚒𝚗𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
║┋ႌ〬⫹⫺ .𝚍𝚊𝚒𝚕𝚢
║┋ႌ〬⫹⫺ .𝚠𝚘𝚛𝚔
║┋ႌ〬⫹⫺ .𝚊𝚏𝚔
║┋ႌ〬⫹⫺ .𝚛𝚘𝚋𝚛
║┋ႌ〬⫹⫺ .𝚕𝚒𝚖𝚒𝚝
║┋ႌ〬⫹⫺ .𝚛𝚎𝚐
║┋ႌ〬⫹⫺ .𝚞𝚗𝚛𝚎𝚐
║┋ႌ〬⫹⫺ .𝚖𝚢𝚗𝚜
║┋ႌ〬⫹⫺ .𝚙𝚎𝚛𝚏𝚒𝚕
║┋ႌ〬⫹⫺ .𝚕𝚎𝚟𝚎𝚕𝚞𝚙
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟🛸 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
╚═══════════════
║┋ႌ〬⫹⫺ .𝚜
║┋ႌ〬⫹⫺ .𝚠𝚖
〬╚════ ≪ •❈• ≫ ════╝

╔══════════════
║ ✪ ⃟💎 𝐎𝐖𝐍𝐄𝐑
╚═══════════════
║┋ႌ〬⫹⫺ .𝚞𝚙𝚍𝚊𝚝𝚎
〬║┋ႌ〬⫹⫺ .𝚊𝚌𝚝𝚞𝚊𝚕𝚒𝚣𝚊𝚛
〬║┋ႌ〬⫹⫺ .𝚜𝚎𝚝𝚙𝚛𝚎𝚏𝚒𝚡
〬║┋ႌ〬⫹⫺ .𝚋𝚘𝚘𝚜𝚝
〬║┋ႌ〬⫹⫺ .𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
║┋ႌ〬⫹⫺ .𝚛𝚎𝚜𝚝𝚊𝚛𝚝
║┋ႌ〬⫹⫺ .𝚊𝚞𝚝𝚘𝚊𝚍𝚖𝚒𝚗
║┋ႌ〬⫹⫺ .𝚕𝚎𝚊𝚟𝚎
║┋ႌ〬⫹⫺ .𝚜𝚊𝚕𝚒𝚛
║┋ႌ〬⫹⫺ .𝚌𝚕𝚎𝚊𝚛𝚝𝚙𝚖
║┋ႌ〬⫹⫺ .𝚋𝚌
║┋ႌ〬⫹⫺ .𝚋𝚌𝚚𝚌
║┋ႌ〬⫹⫺ .𝚋𝚌𝚌
║┋ႌ〬⫹⫺ .𝚋𝚊𝚗𝚞𝚜𝚎𝚛
║┋ႌ〬⫹⫺ .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛
〬╚════ ≪ •❈• ≫ ════╝` 
  `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}