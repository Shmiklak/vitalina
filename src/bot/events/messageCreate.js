import { registerAdminCommands } from "../../commands/adminCommands.js";
import { sendAIResponse } from "../../responses/ai_response.js";
import { triggersMatch } from "../../utils/triggers.js";
import { getCurrentHistory, setCurrentHistory } from "../../utils/messages_history.js";
import { checkConsecutiveMessages } from "../../utils/consecutive_messages.js";
import { sendUserBasedResponse } from "../../responses/user_based.js";
import { chance } from "../../utils/randomChances.js";
import { isReply } from "../../utils/isReply.js";
import { db } from "../../models/index.js";
import { getCurrentMode } from "../../utils/mode.js";
import { sendRandomMessage } from "../../responses/random_message.js";
import { sendRandomGif } from "../../responses/random_gif.js";
import { sendRandomUser } from "../../utils/random_user.js";
import { sendRandomShrine } from "../../responses/random_shrine.js";
import { sendRandomVitas } from "../../responses/random_vitas.js";

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

        if (getCurrentMode() === "SLEEP") return;

        if (message.content === "шмик") {
            await message.channel.send("Сегодня я вместо него, чем могу помочь? <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (checkConsecutiveMessages(message)) {
            await message.channel.send(message.content);
            return;
        }

        if (chance(1) && sendUserBasedResponse(message)) return;

        if ((message.content.toLowerCase() === "да" || message.content.toLowerCase() === "da") && chance(50)) {
            await message.channel.send("https://cdn.discordapp.com/attachments/1204044194499403776/1204394774107525161/wk7pnm_dqkY.png?ex=65d4930a&is=65c21e0a&hm=361e66ff592612704a2aa619b202244a073079dff3c425929f46bf9d7e318703&");
            return;
        }

        if ((message.content.toLowerCase() === "нет" || message.content.toLowerCase() === "net") && chance(50)) {
            await message.channel.send("Пидора ответ. <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (message.content.toLowerCase() === "я" && chance(50)) {
            await message.channel.send("Головка от хуя. <:pepeBusiness:1187822166872436866>");
            return;
        }

        if (message.content.toLowerCase() === "виталина, ты умеешь мапать") {
            await message.channel.send("О, конечно! Совсем недавно я закончила две свои карты. Можешь оценить? https://cdn.discordapp.com/attachments/1187704983651631174/1188428153299943534/MORGENSHTERN_-_SEL_DEDA.osz https://cdn.discordapp.com/attachments/1187704983651631174/1188428257851363328/Team_Grimoire_-_C18H27NO3.osz");
            return;
        }

        if (message.content.toLowerCase() === "виталина, голос") {
            await message.channel.send("Пушистый здряв");
            return;
        }

        if (message.content.toLowerCase() === "виталина, скинь смешнявку") {
            await sendRandomShrine(message.channel);
            return;
        }

        if (message.content.toLowerCase() === "виталина, витас") {
            await sendRandomVitas(message.channel);
            return;
        }

        if (chance(0.1)) {
            await message.channel.send("давно <@395117543406436353> не пинговали");
            return;
        }

        if ((["DEFAULT"].includes(getCurrentMode()) && chance(0.5)) || (["NO_AI_AGRESSIVE"].includes(getCurrentMode()) && chance(25))) {
            await sendRandomMessage(message.channel);
            return;
        }

        if (message.mentions.has(bot.user) && chance(5)) {
            message.channel.send("https://tenor.com/view/chungus-pinged-ben-shapiro-discord-big-gif-21424212");
            return;
        }

        if (triggersMatch(message.content) || await isReply(message, bot)) {
            if (["NO_AI", "NO_AI_AGRESSIVE"].includes(getCurrentMode()) || chance(20)) {
                if (chance(30)) {
                    await sendRandomGif(message.channel);
                    return;
                }
                await sendRandomMessage(message.channel);
                return
            }

            if (chance(2)) {
                await message.channel.send(`Я устала, за меня ответит <@${sendRandomUser()}>.`)
            }

            if (chance(2)) {
                await message.channel.send('Собакам слова не давали')
            }

            if (chance(2)) {
                await message.channel.send('Лай для меня собачка')
            }

            await sendAIResponse(history, message);
        }
    },
};
