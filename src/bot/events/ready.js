import { ActivityType } from "discord.js";
import { logEvent } from "../../utils/logger.js";

export default {
    name: "ready",
    once: true,
    execute(client) {
      console.info(`${client.user.username} is online`);
      logEvent(`${client.user.username} is online`);
      client.user.setActivity("osu!", { type: ActivityType.Playing });
    },
};