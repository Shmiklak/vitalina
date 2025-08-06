import { log_channel } from "../config/index.js";
import { db } from "../models/index.js";
import { Vitalina } from "../index.js";

export const logEvent = async (event) => {
    db.LogItem.create({
        event: event
    });
    const discordChannel = await Vitalina.channels.fetch(log_channel);
    discordChannel.send(event);
}