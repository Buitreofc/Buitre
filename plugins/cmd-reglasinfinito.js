import fetch from 'node-fetch'

let handler = async (m, {conn, command }) =>{

let url = pack6 [Math.floor(Math.random() * pack6.length)]

conn.sendFile(m.chat, url ,m)

}

handler.help = ['.infinito']

handler.tags = ['infinito']

handler.command = /^(infinito)$/i

handler.exp = 50

export default handler

global.pack6 = [

 

 "https://j.top4top.io/p_29280c0nn0.jpg"

  ]