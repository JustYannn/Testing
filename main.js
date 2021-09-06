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

require('./index.js')
nocache('./index.js', module => console.log(color('[ INFO ]', 'cyan'), `${module} updated`))

const starts = async (puki = new WAConnection()) => {
    puki.logger.level = 'warn'
    puki.version = [2, 2123, 8]
    puki.browserDescription = [ 'Peler', 'Safari', '7.0' ]
    puki.setMaxListeners(0)
puki.removeAllListeners('close')
puki.removeAllListeners('error')
    console.log(banner.string)
    puki.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && puki.loadAuthInfo('./session.json')
    puki.on('connecting', () => {
        start('2', 'Connecting...')
    })
    puki.on('open', () => {
        success('2', 'Connected')
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
