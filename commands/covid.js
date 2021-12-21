module.exports = {
    name: 'covid',
    execute(msg,argument) {
        if (argument === 'thailand') {
            msg.reply('thailand')
        } else {
            msg.reply('Other')
        }
    }
}