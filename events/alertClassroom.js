const cron = require('node-cron')
const {MessageEmbed} = require('discord.js')

module.exports = {
    'name': 'ready',
    execute(client) {
        const channel = client.channels.cache.get('923224129077903481')
        cron.schedule('30 23 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle('Alert Classroom')
                            .setDescription('https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n Meeting ID: 636 510 7396"
                                            + '\n Passcode: 994407')

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })    
    }
}