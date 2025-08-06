import Bot from "./bot/index.js";
import {discordToken} from "./config/index.js";

export const Vitalina = new Bot({
    intents:[
        "Guilds",
        "GuildMessages",
        "MessageContent",
    ]
});

Vitalina.login(discordToken);