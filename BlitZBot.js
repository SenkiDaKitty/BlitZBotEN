const Discord = require("discord.js");
const botsettings = require("./botsettings.json");
var client = new Discord.Client();
var prefix = "B!";

client.on("ready", function () {
    console.log("BlitZ Bot - Electrisant !");
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "setgame")) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage("Only an Administrator of the bot can use this command ! :warning:")
        } else {
        var args = message.content.substring(prefix.length).split(" ");
        let game = args.slice(1).join(' ')   
    message.channel.sendMessage(`Description mis à jour : ${game}`)
    client.user.setActivity(game)
        }
    }
});
client.on('message', message => {
if (message.content === prefix + "list") {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
    
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++;  
        });
        return memberCount;
      }
    var ServerListEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .addField(`Server List :`,client.guilds.map(r => `${r.name} | **${message.guild.memberCount}** membres.`))
    .setColor("0x02e427")
    .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
    message.delete(message);
    message.channel.sendEmbed(ServerListEmbed);
}
});
client.on('message', message => {
if (message.content === prefix + "sinfo") {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
    
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++; 
        });
        return memberCount;
      }
    
      var ServerInfoEmbed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) 
        .setColor('#f4df42') 
        .addField('Server Owner :', message.guild.owner, true) 
        .addField('Channels :', message.guild.channels.size, true) 
        .addField(`Members : :`, message.guild.memberCount) 
        .addField('Humans Members :', checkMembers(message.guild), true)
        .addField('Bot Members :', checkBots(message.guild), true)
        .setFooter('Server Create Date :')
        .setTimestamp(message.guild.createdAt); 
    
        message.channel.send(ServerInfoEmbed);
        return
    }
});
client.on('message', message => {
if (message.content === prefix + "ping"){
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(`${Math.round(client.ping)} ms`, "Host on Heroku")
    .setColor("0x02e427")
    .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
    message.delete()
    message.channel.send(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {
var args = message.content.substring(prefix.length).split(' ');
    	 let say = args.join(' ');
	 if(!say) return message.channel.send("Ecrivez un message !")
else {
        var embedSay = new Discord.RichEmbed()
		.setColor(0xff4c4c)
		.setDescription(`⚡📝 | `, say)
		message.delete()
		message.channel.send(embedSay)
    }
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            var BanEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Permissions >> Insuffisantes | Les instructions ont été envoyé en MP`)
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
            message.author.sendMessage("```Be sure that : \n The bot has enough permissions.\n That you wrote an user to ban.\n That YOU have enough permissions.\n Write a reason.```")
            message.channel.send(BanEmbed).catch((error) => { console.log(error.message) })
            return
        } else {
        let member = message.mentions.members.first();
        if(!member) {
          var BanEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setTitle(`Sanctions >> Ban >> Utilisateur | Check your DM`)
              .setColor("0xff4c4c")
              .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
          message.delete()
            message.author.sendMessage("```Be sure that : \n The bot has enough permissions.\n That you wrote an user to ban.\n That YOU have enough permissions.\n Write a reason.```")
          message.channel.send(BanEmbed).catch((error) => { console.log(error.message) });
          return
        } else {
        if(!member.bannable) {
                var EmbedBan = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Sanctions >> Ban >> Erreur : Pas assez de permissions | Check your DM`)
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
            message.author.sendMessage("```Be sure that : \n The bot has enough permissions.\n That you wrote an user to ban.\n That YOU have enough permissions.\n Write a reason.```")
                message.channel.send(EmbedBan).catch((error) => { console.log(error.message) });
                return
        } else {
            var args = message.content.substring(prefix.length).split(" ");
            let reason = args.slice(2).join(' ')            
            if(!reason) reason = "Aucune Raison n'a été fournie, désolé (ツ)"

        member.ban(reason)
          .catch(error => message.reply(`Désolé ${message.author} Je ne peux pas sanctionnés la personne : ${error}`));
          message.channel.send(new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription(`${message.mentions.members.first} a été banni par ${message.author.tag} raisons : ${reason}`)
          .setColor("0x02e427")
          .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473"))
        var BanLogEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(`Sanctions Appliquée( Ban )`,`L'utilisateur ${message.mentions.users.first} à été banni par ${message.author.tag} Raison : ${reason}`)
          .setColor("0x02e427")
          .setFooter("BlitzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
          const logs = message.guild.channels.find(channel => channel.name === "logs");
          logs.send(BanLogEmbed)
            return;
                }
            }
        }
    }
    if (message.content.startsWith(`${prefix}mute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Punishment >> Mute >> No enough Permissions | Check your DM")
            .setColor("0xff4c4c")
            .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage("```Be sure that : \n The bot has enough permissions.\n That you wrote an user to mute.\n That YOU have enough permissions.\n Write a reason.```")
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanction >> Mute >> Utilisateur | Les instructions ont été envoyé en MP")
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage("```Be sure that : \n The bot has enough permissions.\n That you wrote an user to mute.\n That YOU have enough permissions.\n Write a reason.```")
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "❌ Silence ❌");
                if (!role) {
                    try {
                        role = message.guild.createRole({
                            name: "❌ Silence ❌",
                            color: "#c4c1c1",
                            permissions: []
                        });
                        message.guild.channels.forEach(async (channel) => {
                            channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                var args = message.content.substring(prefix.length).split(" ");
                let mutereason = args.slice(2).join(' ')
                const memberToMute = message.guild.member(userToMute) || message.guild.fetchMember(userToMute);
                memberToMute.addRole(role);
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`La Sanction a été appliquée. !`,`L'utilisateur ${message.mentions.users.first()} à été réduit au silence par ${message.author.tag}, Raison : ${mutereason}`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(MuteEmbed); 
                var MuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Sanctions Appliquée ( Mute )`,`L'utilisateur ${message.mentions.users.first()} à été mute par ${message.author.tag}, raison : ${mutereason}`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.send(MuteLogEmbed)
                return;
            }
        }
    }
    if (message.content.startsWith(`${prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Sanctions >> Unmute >> Permissions Insuffisantes")
            .setColor("0xff4c4c")
            .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanctions >> Unmute >> Utilisateur")
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "❌ Silence ❌");

                const memberToMute = message.guild.member(userToMute) || message.guild.fetchMember(userToMute);
                
                memberToMute.removeRole(role);
                var unMuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`La Sanction a bien été supprimé`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(unMuteEmbed);
                var unMuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Sanctions Supprimé ( Unmute )`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.send(unMuteLogEmbed)
                return;
            }
        }   
    }
});

client.login(process.env.BOT_TOKEN);
