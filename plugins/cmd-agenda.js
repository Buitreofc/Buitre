import fetch from 'node-fetch'

let handler = async (m, {conn, command }) =>{

let url = pack6 [Math.floor(Math.random() * pack6.length)]

conn.sendFile(m.chat, url ,m)

}

handler.help = ['agendasemanal']

handler.tags = ['internet']

handler.command = /^(agendasemanal)$/i

handler.exp = 50

export default handler

global.pack6 = [

 

 "https://d.top4top.io/p_2930gjo2j0.jpg"

  ]