import {isAdmin} from "../utils/is_admin.js";
import {Vitalina} from "../index.js";
import {getCurrentHistory, setCurrentHistory} from "../utils/messages_history.js";

export const registerAdminCommands = async (message) => {

    // виталина, отправляем сообщение|CHANNEL_ID|MESSAGE

    if (message.content.toLowerCase().includes("виталина, отправляем сообщение")) {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        const res = message.content.split('|');
        const channelId = res[1];
        const content = res[2];

        try {
            const discordChannel = await Vitalina.channels.fetch(channelId);

            if (discordChannel && discordChannel.isTextBased()) {
                await discordChannel.send(content);

                return true;
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (message.content.toLowerCase().includes("виталина, сброс")) {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentHistory([]);
        message.channel.send("Виталина была сброшена с моста.<:pepeBusiness:1187822166872436866>");
        return true;
    }

    // This is broken as fuck due to Discord characters limit

    if (message.content.toLowerCase() === "виталина, история") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";

            return true;
        }

        let history = getCurrentHistory();

        let response = '```';

        history.forEach(item => {
            response += `${item.name}: ${item.content}\n\n`
        });

        response += '```';

        try {
            await message.channel.send(response);
        } catch (error) {
            console.error(error);
        }

        return true;
    }
}

