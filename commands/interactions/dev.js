const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

const url_github = 'https://github.com/lnwtxn'
const url_ig =  'https://www.instagram.com/kitton._/'
const url_facebook = 'https://web.facebook.com/Thunder2004/'

const dev = new MessageEmbed()
        .setColor('#03045e')
        .setTitle(':computer: Developer Profile')
        .setDescription('**This Bot is Develop by : <@400087960428609536> **'+ 
                        `\n\n :envelope: **Contact Me** \n :link: My Github : ${url_github}`+
                        `\n :link: My Facebook : ${url_facebook} \n :link: My Instagram : ${url_ig}`)

const row = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setLabel('GITHUB')
    .setStyle('LINK')
    .setURL(url_github),
  new MessageButton()
    .setLabel('FACEBOOK')
    .setStyle('LINK')
    .setURL(url_facebook),
  new MessageButton()
    .setLabel('INSTAGRAM')
    .setStyle('LINK')
    .setURL(url_ig)
);

module.exports = {
    data: new SlashCommandBuilder()
		.setName('dev')
		.setDescription('Send Developer Information.'),
    async execute(interaction) {

        return interaction.reply({ embeds: [dev], components: [row] });
        
    }
}