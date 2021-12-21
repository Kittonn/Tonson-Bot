const {MessageEmbed} = require('discord.js')

const axios = require('axios')

const url_salim = 'https://watasalim.vercel.app/api/quotes/random'

module.exports = {
    name: 'watasalim',
    execute(msg,argument) {
        axios.get(url_salim).then(res => {
            
            const quote = res.data.quote.body

            const wataEmbed = new MessageEmbed()
                .setColor('#ffb703')
                .setTitle(':speech_balloon: วาทกรรมสลิ่ม')
                .setDescription(`**${quote}**`)
                
            
            msg.channel.send({embeds: [wataEmbed]});
            
        })
    }
}