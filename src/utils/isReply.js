import { MessageType } from "discord.js"

export const isReply = async(message, bot) => {
    if (message.type === MessageType.Reply) {
        let reference = await message.channel.messages.fetch(message.reference.messageId);
        if (reference.author.id === bot.user.id) {
            console.log(true);
            return true;
        }
    }
    return false;
}