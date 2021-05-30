const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

client.on("message", async (message) => {
    if (message.content == "!button" && message.author.id === "Owner ID") { // Use this command only once and only on one channel.
    let buttons = new disbut.MessageButton()
        .setStyle('green') // Button Color
        .setLabel('Test') // Button Name 
        .setID('Button') // Button ID
    message.channel.send('Message Text.', { buttons: [buttons] });
    }
    if (message.content == "!urlbutton" && message.author.id === "Owner ID") { // Use this command only once and only on one channel.
    let buttons2 = new disbut.MessageButton()
        .setStyle('url') // Button Url
        .setLabel('Discord') // Button Name
        .setURL('https://discord.com') // URL for forwarding
        .setDisabled()
    message.channel.send('Message Text.', { buttons: [buttons2] });
    }
});

client.on('clickButton', async (button) => {
    if (button.id === 'Button') { // You must enter the button ID in the 'Button' section.
        if (button.clicker.member.roles.cache.get("Roles ID")) {
            await button.clicker.member.roles.remove("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was taken because you clicked the button.!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was given because you clicked the button.`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});


client.login(config.token)
