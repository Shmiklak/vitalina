import { registerAdminCommands } from "../../commands/adminCommands.js";
import { sendAIResponse } from "../../responses/ai_response.js";
import { triggersMatch } from "../../utils/triggers.js";
import { getCurrentHistory, setCurrentHistory } from "../../utils/messages_history.js";
import { checkConsecutiveMessages } from "../../utils/consecutive_messages.js";
import { sendUserBasedResponse } from "../../responses/user_based.js";
import { chance } from "../../utils/randomChances.js";
import { isReply } from "../../utils/isReply.js";
import { db } from "../../models/index.js";

export default {
    name: "messageCreate",
    once: false,
    async execute(message, bot) {
        if (message.author.bot) return;

        if (message.content != "") {
            await db.DiscordMessage.create({
                message_id: message.id,
                user_id: message.author.id,
                guild_id: message.guildId,
                channel_id: message.channelId,
                content: message.content
            })
        }
            
        let history = getCurrentHistory();

        if (history.length >= 20) {
            history.shift();
        }

        history.push({
            role: "user",
            content: message.content,
            name: message.author.displayName,
        });

        setCurrentHistory(history);

        if (await registerAdminCommands(message)) return;

        if (message.content === "шмик") {
            message.channel.send("Сегодня я вместо него, чем могу помочь? <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (checkConsecutiveMessages(message)) {
            message.channel.send(message.content);
            return;
        }

        if (chance(1) && sendUserBasedResponse(message)) return;

        if ((message.content.toLowerCase() === "да" || message.content.toLowerCase() === "da") && chance(50)) {
            message.channel.send("https://cdn.discordapp.com/attachments/1204044194499403776/1204394774107525161/wk7pnm_dqkY.png?ex=65d4930a&is=65c21e0a&hm=361e66ff592612704a2aa619b202244a073079dff3c425929f46bf9d7e318703&");
            return;
        }

        if ((message.content.toLowerCase() === "нет" || message.content.toLowerCase() === "net") && chance(50)) {
            message.channel.send("Пидора ответ. <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (message.content.toLowerCase() === "я" && chance(50)) {
            message.channel.send("Головка от хуя. <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (chance(0.1)) {
            message.channel.send("давно <@395117543406436353> не пинговали");
            return;
        }

        if (triggersMatch(message.content) || await isReply(message, bot)) {
            await sendAIResponse(history, message.channel);
        }
    },
};
