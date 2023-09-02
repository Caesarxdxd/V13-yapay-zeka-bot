const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
        const ping = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(' `Ping Değerlerim;`')
        .setDescription(`
        **>** Botun Pingi: ${client.ws.ping} ms`)

        return message.reply({embeds: [ping]})
    },
      
      
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};