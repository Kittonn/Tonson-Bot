const commands = require('../config/interactionHandler')


module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId === 'select') {
            await interaction.reply('Hello test');
        }
    }
}