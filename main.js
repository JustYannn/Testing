const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require("moment-timezone")
const { spawn, exec, execSync } = require("child_process")
 const figlet = require('figlet')
 const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'))
const canvas = require('discord-canvas')

require('./index.js')
nocache('./index.js', module => console.log(color('├ [ INFO ]', 'cyan'), `${module} updated`))
nocache('./main.js', module => console.log(color('├ [ INFO ]', 'cyan'), `${module} updated`))

const starts = async (puki = new WAConnection(), mek) => {
    puki.logger.backel = 'warn'
    puki.version = [2, 2123, 8]
    puki.browserDescription = [ 'Peler', 'Safari', '7.0' ]
    puki.setMaxListeners(0)
puki.removeAllListeners('close')
puki.removeAllListeners('error')
m = simple.smsg(puki, mek)
console.log(color(figlet.textSync('HEROKU', {
		font: 'Alpha',
		horizontalLayout: 'center',
		vertivalLayout: 'center',
		width: 50,
		whitespaceBreak: false
	}), 'cyan'))
    puki.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })
    puki.on('message-delete', async (m) => {
    	if (!m.key.fromMe && m.key.fromMe) return
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
    puki.sendMessage("6285793432434-1618061428@g.us", `╭────「  MESSAGE DELETED 」───\n├\n├ Nama : *@${m.participant.split("@")[0]}*\n├ Time : *${jam} ${week} ${calender}*\n├ Type : *${type}*\n├\n╰────「  MESSAGE DELETED」───`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
      puki.copyNForward("6285793432434-1618061428@g.us", m.message).catch(e => console.log(e, m))
    console.log(m.message)
    })
puki.on('CB:action,,call', async json => {
    let { from } = json[2][0][1]
    let id = json[2][0][2][0][1]["call-id"]
    await puki.rejectIncomingCall(from, id)
   ///await puki.sendMessage(from, '「 Reject Call 」\nAuto Reject, Maaf', 'conversation')

})

puki.on('group-participants-update', async (anu) => {

	console.log(anu)
		try {
					ppimg = await puki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/25bee11ec86f7956f6bdf.jpg'
				}
				const memJid = anu.participants[0]
				const pushnem = puki.contacts[memJid] !== undefined ? puki.contacts[memJid].notify : PhoneNumber('+' + memJid.replace('@s.whatsapp.net', '')).getNumber('international')
				const mems = anu.participants
				const pushname = await puki.getName(memJid)
				const from = anu.jid
				const mdata = await puki.groupMetadata(anu.jid)
				const iniGc = anu.jid.endsWith('@g.us')
				const jumlahMem = iniGc ? mdata.participants : ''
		try {
			if (anu.action == 'add') {
if (!welkom.includes(anu.jid)) return
			for (let i of mems) {
					const pic = ppimg
                const welcomer = await new canvas.Welcome()
                    .setUsername(await pushnem)
                    .setDiscriminator(mdata.participants.length)
                    .setMemberCount(mdata.participants.length)
                    .setGuildName(mdata.subject)
                    .setAvatar(pic)
                    .setColor('border', '#00100c')
                    .setColor('username-box', '#00100c')
                    .setColor('discriminator-box', '#00100c')
                    .setColor('message-box', '#00100c')
                    .setColor('title', '#5cffd6')
                    .setBackground(fs.readFileSync('./media/back.jpeg'))
                    .toAttachment()
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                await puki.sendMessage(anu.jid, Buffer.from(base64, 'base64'), MessageType.image, { caption: `Welcome 👋@${memJid.split('@')[0]}\n`, contextInfo: { mentionedJid: [memJid] }})
                }
			} 
			if (anu.action == 'remove') {
if (!welkom.includes(anu.jid)) return
					for (let i of mems) {
					const bye = await new canvas.Goodbye()
                    .setUsername(await pushnem)
                    .setDiscriminator(mdata.participants.length)
                    .setMemberCount(mdata.participants.length)
                    .setGuildName(mdata.subject)
                    .setAvatar(ppimg)
                    .setColor('border', '#00100c')
                    .setColor('username-box', '#00100c')
                    .setColor('discriminator-box', '#00100c')
                    .setColor('message-box', '#00100c')
                    .setColor('title', '#ff3636')
                    .setBackground(fs.readFileSync('./media/back.jpeg'))
                    .toAttachment()
                const base64 = `${bye.toBuffer().toString('base64')}`
                await puki.sendMessage(anu.jid, Buffer.from(base64, 'base64'), MessageType.image, { caption: `Sayonara👋@${memJid.split('@')[0]}\n`, contextInfo: { mentionedJid: [memJid] }})
			}
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
		puki.on('close', async () => {
  if (puki.state == 'close') {
  puki.logger.error('Reconnecting...')
    await puki.loadAuthInfo('./session.json')
    await puki.connect()
    global.timestamp.connect = new Date
  }
})
    fs.existsSync('./session.json') && puki.loadAuthInfo('./session.json')
    puki.on('connecting', () => {
        start('2', 'Waiting New Message...')
    })
    puki.on('open', () => {
    	console.log(chalk.greenBright('╭───────「  PHONE STAT」──────'))
        console.log(chalk.greenBright("├"))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("WA Version : " + puki.user.phone.wa_version))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Version : " + puki.user.phone.os_version))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Device : " + puki.user.phone.device_manufacturer))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Model : " + puki.user.phone.device_model))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Build Number : " + puki.user.phone.os_build_number))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("You Number Phone : " + puki.user.jid))
        console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright('Connected'))
        console.log(chalk.greenBright("├"))
        console.log(chalk.greenBright('╰───────「  PHONE STAT」──────'))
    })
    await puki.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(puki.base64EncodedAuthInfo(), null, '\t'))

    puki.on('chat-update', async (message) => {
        require('./index.js')(puki, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
