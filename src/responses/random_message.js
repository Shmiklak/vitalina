import { Sequelize } from "sequelize"
import { db } from "../models/index.js"

export const sendRandomMessage = async (channel) => {
    let response = await db.DiscordMessage.findOne({
        order: [
            Sequelize.fn("RANDOM")
        ]
    });

    channel.send(response.dataValues.content);
    
    let history = getCurrentHistory();

    history.push({
        role: "assistant",
        content: response.dataValues.content,
        name: 'Vitalina2222',
    });

    setCurrentHistory(history);
}