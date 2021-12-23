const cron = require('node-cron')
const {MessageEmbed} = require('discord.js')
const {channelId} = require('../config.json')

module.exports = {
    'name': 'ready',
    execute(client) {

        const channel = client.channels.cache.get(channelId)

        //================================| Monday |=======================================

        cron.schedule('45 7 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `07:45-08:30` '
                                            +'\n\n:books: **Subject** : `คณิตศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูชิงชัย อุตรัตน์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('10 9 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `09:10-10:50` '
                                            +'\n\n:books: **Subject** : `เคมี`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูธนากร มหาราช`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('50 10 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:50-12:30` '
                                            +'\n\n:books: **Subject** : `คณิตศาสตร์เพิ่มเติม`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูจีรนันท์ สีนอก`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('15 14 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `14:15-15:00` '
                                            +'\n\n:books: **Subject** : `ภาษาอังกฤษ`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสหาย สุระเสียง`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('25 15 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `15:25-16:10` '
                                            +'\n\n:books: **Subject** : `สังคมศึกษา`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูหนึ่งฤทัย ทรัพย์พร้อม`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('10 16 * * mon', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `16:10-17:00` '
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

        //================================| Tuesday |=======================================

        cron.schedule('45 7 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `07:45-08:30` '
                                            +'\n\n:books: **Subject** : `คณิตศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูชิงชัย อุตรัตน์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('10 9 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `09:10-10:00` '
                                            +'\n\n:books: **Subject** : `Physics`'
                                            +'\n\n:teacher: **Teacher** : `Mr.Jubert P. Bela-o`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('0 10 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:00-10:50` '
                                            +'\n\n:books: **Subject** : `พลศึกษา`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสิทธิเดช ขันธ์พานิช`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('50 10 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:50-12:00` '
                                            +'\n\n:books: **Subject** : `Chemistry`'
                                            +'\n\n:teacher: **Teacher** : `Mrs.Abel Andos`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('0 12 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `12:00-12:30` '
                                            +'\n\n:books: **Subject** : `การงาน`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูเบ็ญจวรรณ์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('30 13 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `13:30-15:00` '
                                            +'\n\n:books: **Subject** : `ฟิิสิกส์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสุรเกียรติ`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/MjUwMDMyNTg0MzQ3"
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('25 15 * * tue', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `15:25-17:00` '
                                            +'\n\n:books: **Subject** : `ดาราศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูนริศรา`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/MzcwMjgwODQ0Nzk1"
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        //================================| Wednesday |=======================================

        cron.schedule('45 7 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `07:45-08:30` '
                                            +'\n\n:books: **Subject** : `Chemistry`'
                                            +'\n\n:teacher: **Teacher** : `Mrs.Abel Andos`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('0 10 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:00-10:50` '
                                            +'\n\n:books: **Subject** : `ประวัติศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูศักดิ์ดา สำเร็จผล`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('50 10 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:50-12:30` '
                                            +'\n\n:books: **Subject** : `ภาษาไทย`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสุรัตน์ สุขใส`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('15 14 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `14:15-15:00` '
                                            +'\n\n:books: **Subject** : `English`'
                                            +'\n\n:teacher: **Teacher** : `Mrs.Lucia B. Lumichao`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/9504580269'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('25 15 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `15:25-16:10` '
                                            +'\n\n:books: **Subject** : `ภาษาอังกฤษ`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสหาย สุระเสียง`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('10 16 * * wed', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `16:10-17:00` '
                                            +'\n\n:books: **Subject** : `Mathematics`'
                                            +'\n\n:teacher: **Teacher** : `Mrs.Nelly-Ann Bugnay`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/2910068947'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        //================================| Thursday |=======================================

        cron.schedule('45 7 * * thu', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `07:45-08:30` '
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
                            .setDescription(':clock12: **Time** : `09:10-10:00`'
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
                            .setDescription(':clock12: **Time** : `15:25-17:00`'
                                            +'\n\n:books: **Subject** : `เลือกเสรี`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูอดิศักดิ์ ศรีจันทร์`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })


        //================================| Friday |=======================================
        cron.schedule('45 7 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `07:45-08:30`'
                                            +'\n\n:books: **Subject** : `ดนตรี`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูศิวนาท ฟ้องเสียง`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('0 10 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:00-10:50`'
                                            +'\n\n:books: **Subject** : `วิทยาศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสุทธินันท์ จันทร์แวว`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('50 10 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `10:50-12:00`'
                                            +'\n\n:books: **Subject** : `ชีววิทยา`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูเพ็ญพัชร สีมาพล`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })
        
        cron.schedule('30 13 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `13:30-14:15`'
                                            +'\n\n:books: **Subject** : `Mathematics`'
                                            +'\n\n:teacher: **Teacher** : `Mrs.Nelly-Ann Bugnay`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })

        cron.schedule('15 14 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `14:15-15:00`'
                                            +'\n\n:books: **Subject** : `ภาษาจีน`'
                                            +'\n\n:teacher: **Teacher** : `คุณครูสุภาพร ศิริแวว`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                                            )
                                    

            await channel.send({ embeds: [Embed] })
        },{
            scheduled: true,
            timezone: 'Asia/Bangkok'
        })
        
        cron.schedule('25 15 * * fri', async () => {

            const Embed = new MessageEmbed()
                            .setColor('#57F2AA')
                            .setTitle(':alarm_clock: Alert Classroom')
                            .setDescription(':clock12: **Time** : `15:25-16:10`'
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

    }
}