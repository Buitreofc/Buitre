const handler = async (m, {conn}) => {
  m.reply(global.terminos);
};
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i;
handler.command = new RegExp;
export default handler;

global.terminos = `
*=> El desconocimiento de lo que aqui se menciona no exime al propietario del Bot, Sub Bot o usuario del bot de la sanciones que se puedan derivar❗*

*⚠️ Términos de privacidad*
_1.- La información que reciba el Bot NO se comparte con ningún tercero ni con nadie_
_2.- Las imágenes/videos/sticker/audios/etc no son compartidos con nadie_
_3.- Su numero de teléfono no es compartido con absolutamente nadie_
_4.- Datos de tarjetas, ubicaciones, direcciones, etc son eliminados inmediatamente y no se comparten con absolutamente nadie_
_5.- Todas las conversaciones son eliminadas cada determinado tiempo y no se hace backup (no se guarda) de ningún tipo de información/conversación_
_-6.- Si el bot es eliminado de un grupo‚ Se podrá agregar nuevamente luego de aver pasado 15 dias_

*⚠️ Términos de uso*
_1.- No nos hacemos responsables de un mal uso que se le pueda dar al Bot_
_2.- No nos hacemos responsables de la ignorancia y/o desconocimiento del tema_
_3.- El Bot no esta activo las 24 horas al menos de que el propietario decida lo contrario_
_4.- La "empresa" no se hace responsable del uso de un Sub Bot o Bot no oficial, ya que son personas (terceros) y no tenemos control sobre ell@s_
_5.- No nos hacemos responsables de los números que se puedan ir a soporte por el uso del Bot, es aconsejable siempre usar números virtuales para usos de Bots_
_6.- Los audios/notas de voz/imágenes/videos o cualquier otro archivo multimedia que sean de propiedad de Buitre - Bot son únicamente y exclusivamente de este Bot, si se detecta a otro Bot con alguno o algunos de los archivos multimedia antes mencionado se tomarán cartas en el asunto._
_7.- Están prohibidos las llamada al bot tanto en grupos como al privado 
_8.- Es normal que un bot no se encuentre activo en algún momento pero solo es temporada ‚ porque pasa esto?:
Ya que son bots y mandan tantos mensajes es normal que WhatsApp los suspenda por unas horas ya que los detecta como spam ‚ pero este proceso solo lleva unas horas y luego todo continua normal 

*➤ Mensaje del numero del Bot?*
_- Si en algún momento recibe un mensaje del numero del Bot y no es un comando posiblemente sea de el propietario del Bot o el propietario del numero, este es un persona real por lo que se le pide que no le falte el respeto_

*➤ Base usada para este Bot:*
*- https://buitre.boxmineworld.com/*

*➤ Agradecimientos a:*
*- Buitre OFC*
*- Diego OFC*
*- Erika*
*- Bruno Sobrino*
*- Virruz OFC*

*⁉️ Te quedaron dudas?*
_- Si todavía tienes alguna duda o reclamo de lo mencionado aqui o referente al Bot, contáctame a mi numero personal al cual estaré respondiendo lo antes posible para brindarte una solución y/o hacerme responsable de alguna reclamación_ 

> wa.me/50664527056
> Buitre OFC
> Correo electronico: buitre167282@gmail.com

*∆ The Buitre BOT ∆*`;
