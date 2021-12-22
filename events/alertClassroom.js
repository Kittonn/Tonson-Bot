const cron = require('node-cron')
const {MessageEmbed} = require('discord.js')
const {channelId} = require('../config.json')

module.exports = {
    'name': 'ready',
    execute(client) {

        const channel = client.channels.cache.get(channelId)

        //================================| Monday |=======================================

        cron.schedule('47 0 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':timer: **Time** : .........'
                                            +'\n\n:books: **Subject** : บลาๆๆๆๆ'
                                            +'\n\n:teacher: **Teacher** : ................'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n\n:bookmark: **Classroom** : .........."
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })    
    }
}