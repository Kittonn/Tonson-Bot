const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js')
const axios = require('axios')

const url_covid_country = 'https://coronavirus-19-api.herokuapp.com/countries'

const date = new Date().toLocaleString()

const arrCovid = async () => {
    const res = await axios.get(url_covid_country)
    return res
}

module.exports = {
    data: new SlashCommandBuilder()
            .setName('covid')
            .setDescription('Send Covid Stats.')
            .addStringOption(option => option
                                .setName('country')
                                .setDescription('Country you want to know stats.')
                                .setRequired(true)),
    async execute(interaction) {

        const args = interaction.options.getString('country')

        const value = await arrCovid()
        const data = value.data

        for (let i = 0; i < data.length; i++) {
            if (args === data[i].country) {

                const country = data[i].country
                const cases = data[i].cases
                const todayCases = data[i].todayCases
                const deaths = data[i].deaths
                const todayDeaths = data[i].todayDeaths
                const recovered = data[i].recovered
                
                const covidEmbed = new MessageEmbed()
                    .setColor('#001524')
                    .setTitle(`:microbe: รายงานยอดผู้ติดเชื้อประเทศ ${country}`)
                    .setDescription(`\`ข้อมูล ณ ${date}\``)
                    .addFields(
                        {name: 'ติดเชื้อเพิ่มวันนี้', value: `${todayCases}`, inline: true},
                        {name: 'ติดเชื้อสะสมในประเทศ', value: `${cases}`, inline: true},
                        {name: 'เสียชีวิตเพิ่ม', value: `${todayDeaths}`, inline: true},
                        {name: 'เสียชีวิตรวม', value: `${deaths}`, inline: true},
                        {name: 'รักษาหายรวม', value: `${recovered}`, inline: true}
                    )
                    
                    
                await interaction.reply({embeds: [covidEmbed]})

            }
            
        }

    }
}