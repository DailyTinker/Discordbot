const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzY2OTQ3ODkyOTc1NTAxMzEy.X4qx4g.4qkRfHC_R7_JwRHYiCVQoa8CLrs';
const prefix = "+";

bot.on('ready', ()=>{
    console.log("Helper is online");
})  

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if(command ==='+subscribe') {
        let subLink = 'https://youtube.com/channel/UCps7yuPTgrJjXta4v1mYc_Q?sub_confirmation=1'
        const subEmbed = new Discord.MessageEmbed()
                .setColor(0x03e3fc)
                .setTitle('Subscribe to Dailytinkers Gaming Mashups!')
                .setURL(subLink)
                .setDescription('Click the link to subscribe.')
                .setThumbnail('https://imgur.com/5zlhJn3.jpg') 
                .setAuthor(message.author.username)
                .addField('Server Rank', 'Wanna obtain Subscriber rank on the server? DM Dailytinker With proof of your subscription')
                .setImage('https://imgur.com/OHUyXaM.jpg')
                .setFooter('Thanks for showing support to the channel!')
                .setTimestamp()
            try{
            message.author.send(subEmbed);
            } catch {
            message.reply(` Sorry @${message.author.username} Sorry I am unable to process the command right now!`)
            }
    } else
    if(command === '+ping') {
        message.channel.send('pong!');
    } else 
    if(command === '+test') {
        message.channel.send('I am working and online!')
    } else (
        message.channel.send('I am online but something seems to be wrong.')
    )
})
    
    
bot.login(token);