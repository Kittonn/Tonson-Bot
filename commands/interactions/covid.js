const { SlashCommandBuilder } = require('@discordjs/builders');

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
        await interaction.reply(`${args}`)

        

    }
}