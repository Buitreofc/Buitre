import fetch from 'node-fetch'

let handler = async (m, {conn, command }) =>{

let url = pack6 [Math.floor(Math.random() * pack6.length)]

conn.sendFile(m.chat, url ,m)

}

handler.help = ['compe']

handler.tags = ['internet']

handler.command = /^(compe)$/i

handler.exp = 50

export default handler

global.pack6 = [

 

 "https://f.top4top.io/p_2928g8wql0.jpg"

  ]