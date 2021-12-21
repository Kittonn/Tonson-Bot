module.exports = {
    name: 'ready',
    execute(client) {
        client.user.setActivity(';help | lnwtxn', {type: 'PLAYING'})
    }
}