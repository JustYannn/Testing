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
console.log(color(figlet.textSync('BOT', {
		font: 'Alpha',
		horizontalLayout: 'center',
		vertivalLayout: 'center',
		width: 50,
		whitespaceBreak: false
	}), 'cyan'))
    console.log(banner.string)
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
    puki.sendMessage(puki.user.jid, `╭────「  MESSAGE DELETED 」───\n├\n├ Nama : *@${m.participant.split("@")[0]}*\n├ Time : *${jam} ${week} ${calender}*\n├ Type : *${type}*\n├\n╰────「  MESSAGE DELETED」───`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
      puki.copyNForward(puki.user.jid, m.message).catch(e => console.log(e, m))
    console.log(m.message)
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
