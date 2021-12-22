const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

const help = new MessageEmbed()
    .setColor('#03045e')
    .setTitle(':file_folder: Command List')
    .setDescription('**:red_circle: Prefix : `;`**'+ 
                    '\n\n**:school: Class Schedule** \n`;schedule` = `ดูตารางสอน online`'+ 
                    '\n\n**:memo: TCAS65 Schudule**\n `;gatpat` = `ดูตารางสอบ Gat & Pat และดูเวลาเตรียมตัว`'+ 
                    '\n `;saman` = `ดูตารางสอบ 9 วิชาสามัญ และดูเวลาเตรียมตัว` \n `;tcas65` = `ดูปฏิทิน TCAS65`'+ 
                    '\n\n **:speech_left: Message API** \n `;covid19 thailand` = `ดูรายงานโควิดประจำวัน`\n`;covid ชื่อจังหวัด` = `ดูรายงานโควิดประจำจังหวัด`'+
                    ' \n `;inspire` = `ดูแรงบันดาลใจ`'+
                    '\n`;watasalim` = `ดูวาทกรรมสลิ่ม`'+
                    '\n\n **:mag_right: About** \n `;dev` = `ข้อมูลผู้พัฒนา`')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Send All Commands.'),
    async execute(interaction) {
        return interaction.reply({ embeds: [help] });
    },
};