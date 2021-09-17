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

/*puki.on('group-participants-update', async (anu) => {
	try {
		const mdata = await puki.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			const moment = require('moment-timezone')                                                   
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
				try {
pushnem = puki.contacts[num] != undefined ? puki.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : puki.contacts[num].notify || puki.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await puki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/welcome/pp.jpeg'
			}
				const foooKanan = 'WELCOME'
                const foooliKanan = foooKanan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fooolKanan = foooKanan.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/welcome/back.jpeg',
                    '-font',
                    './media/welcome/font.tff',
                    '-size',
                    '1280x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '12',
                    '-annotate',
                    '+89+190',
                    '${pushnem}',
                    './media/welcome/hamsil.jpeg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    puki.sendMessage(mdata.id, fs.readFileSync('./media/welcome/hamsil.jpeg'), MessageType.image, {caption: `Irasaimasen👋@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
                
                })
			//leave
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		const moment = require('moment-timezone')                                                   
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
pushnem = puki.contacts[num] != undefined ? puki.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : puki.contacts[num].notify || puki.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await puki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './media/welcome/pp.jpeg'
			}
				exec(`magick './media/welcome/back.jpeg' -gravity west -fill '#ff2fa2' -font './media/welcome/font.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite './media/welcome/back.jpeg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			puki.sendMessage(mdata.id, fs.readFileSync('./media/welcome/back.jpeg'), MessageType.image, {caption: `Sayonara👋@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
	
ipuki.on('group-participants-update', async(chat) => {
        try {
            mem = chat.participants[0]
            try {
                var pp_user = await puki.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                var pp_group = await puki.getProfilePicture(chat.jid)
            } catch (e) {
                var pp_group = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (chat.action == 'add') {
                ini_user = puki.contacts[mem]
                group_info = await puki.groupMetadata(chat.jid)
                ini_img = await simple.getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=a945b6f40c36eb870252c5eb&img1=${pp_user}&img2=${pp_group}&background=https://telegra.ph/file/218b62ea57631a010fcea.jpg&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                backkam = `Irasshaimase 🤙, ${ini_user.notify}*`
                await puki.sendMessage(chat.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (chat.action == 'remove') {
                ini_user = puki.contacts[mem]
                group_info = await puki.groupMetadata(chat.jid)
                ini_img = await simple.getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=a945b6f40c36eb870252c5eb&img1=${pp_user}&img2=${pp_group}&background=https://telegra.ph/file/218b62ea57631a010fcea.jpg&username=${ini_user.notify}&member=${group_info.participants.length}&groupname= ${group_info.subject}`)
                ini_out = ` *Sayonara 👋, ${ini_user.notify}*`
                await puki.sendMessage(chat.jid, ini_img, MessageType.image, { caption: ini_out })
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })**/
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
