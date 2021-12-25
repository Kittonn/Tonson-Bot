const {MessageEmbed} = require('discord.js')

const axios = require('axios')

const url_covid = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
const url_MOPH_img = 'https://media.discordapp.net/attachments/910557153356550164/911654142768996352/logo_web.png'
const url_covid_province = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces'



module.exports = {
    name: 'covid',
    execute(msg,argument) {
        
        axios.get(url_covid).then(res => {
                    
            const data = res.data[0]
        
            const txn_date = data.txn_date
            const update_date =  data.update_date
            const new_case =  data.new_case
            const total_case =  data.total_case
            const new_death = data.new_death
            const total_death = data.total_death
            const new_recovered =   data.new_recovered
            const total_recovered = data.total_recovered

            const covidEmbed = new MessageEmbed()
                .setColor('#001524')
                .setTitle(`🦠 รายงานยอดผู้ติดเชื้อประจำวันที่ ${txn_date}`)
                .setDescription(`\`อัพเดตข้อมูล ${update_date}\``)
                .addFields(
                    {name: 'ติดเชื้อเพิ่มวันนี้', value: `${new_case}`, inline: true},
                    {name: 'ติดเชื้อสะสมในประเทศ', value: `${total_case}`, inline: true},
                    {name: 'เสียชีวิตเพิ่ม', value: `${new_death}`, inline: true},
                    {name: 'เสียชีวิตรวม', value: `${total_death}`, inline: true},
                    {name: 'รักษาหาย', value: `${new_recovered}`, inline: true},
                    {name: 'รักษาหายรวม', value: `${total_recovered}`, inline: true} 
                )
                .setFooter('อ้างอิงข้อมูลจาก กรมควบคุมโรค', url_MOPH_img)
            msg.channel.send({embeds: [covidEmbed]})
         
        })

        

    }
}

