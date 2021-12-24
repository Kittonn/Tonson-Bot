const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const help = new MessageEmbed()
    .setColor('#03045e')
    .setTitle(':file_folder: Command List')
    .setDescription('**:red_circle: Prefix : `;`**'+ 
                    '\n\n**:school: Class Schedule** \n`;schedule` = `ดูตารางสอน online`'+ 
                    '\n\n**:memo: TCAS65 Schudule**\n `;gatpat` = `ดูตารางสอบ Gat & Pat และดูเวลาเตรียมตัว`'+ 
                    '\n `;saman` = `ดูตารางสอบ 9 วิชาสามัญ และดูเวลาเตรียมตัว` \n `;tcas65` = `ดูปฏิทิน TCAS65`'+ 
                    '\n\n **:speech_left: Message API** \n`;covid` = `ดูรายงานโควิดประจำประเทศไทย`'+
                    ' \n `;inspire` = `ดูแรงบันดาลใจ`'+
                    '\n`;watasalim` = `ดูวาทกรรมสลิ่ม`'+
                    '\n\n **:mag_right: About** \n `;dev` = `ข้อมูลผู้พัฒนา`')

const row = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions([
            {
                label: 'Schedule',
                description: 'Send Class Schedule.',
                value: 'schedule',
            },
            {
                label: 'Gatpat',
                description: 'Send Gat & Pat Schedule.',
                value: 'gatpat',
            },
            {
                label: 'Saman',
                description: 'Send Saman Schedule.',
                value: 'saman',
            },
            {
                label: 'Tcas65',
                description: 'Send Tcas65 Schedule.',
                value: 'tcas65',
            },
            {
                label: 'Inspirational Quote',
                description: 'Send Inspirational Quote.',
                value: 'inspire',
            },
            {
                label: 'Watasalim Quote',
                description: 'Send Watasalim Quote.',
                value: 'watasalim',
            },
            {
                label: 'Developer Information',
                description: 'Send Developer Information.',
                value: 'dev',
            }
        ]),
);


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Send All Commands.'),
    async execute(interaction) {
        return interaction.reply({ embeds: [help], components: [row] });
    },
};