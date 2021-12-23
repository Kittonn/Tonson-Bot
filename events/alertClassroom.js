const cron = require('node-cron')
const {MessageEmbed} = require('discord.js')
const {channelId} = require('../config.json')

module.exports = {
    'name': 'ready',
    execute(client) {

        const channel = client.channels.cache.get(channelId)

        //================================| Thursday |=======================================

        cron.schedule('45 7 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `7:45-8:30` '
                                            +'\n\n:books: **Subject** : `Social`'
                                            +'\n\n:teacher: **Teacher** : `Mrs. Soraya C. Chongkhophanawet`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/Mzc2MDE3OTA5NTE5"
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('10 9 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `9:10-10:00`'
                                            +'\n\n:books: **Subject** : `Physics`'
                                            +'\n\n:teacher: **Teacher** : `Mr.Jubert P. Bela-o`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('0 10 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:00-10:50`'
                                            +'\n\n:books: **Subject** : `ออกแบบและเทคโนโลยี`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูมนตรี โมลิสกุลมงคล`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/NDM0MzczMTA3NjE4"
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })
        
        cron.schedule('50 10 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:50-12:30`'
                                            +'\n\n:books: **Subject** : `คณิตศาสตร์เพิ่มเติม`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูจีรนันท์ สีนอก`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('15 14 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `14:15-15:00`'
                                            +'\n\n:books: **Subject** : `สังคมศึกษา`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูหนึ่งฤทัย ทรัพย์พร้อม`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('25 15 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `14:15-15:00`'
                                            +'\n\n:books: **Subject** : `เลือกเสรี`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูอดิศักดิ์ ศรีจันทร์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/9504580269'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

    }
}