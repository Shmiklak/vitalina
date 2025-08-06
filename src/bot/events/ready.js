import { ActivityType } from "discord.js";

export default {
    name: "ready",
    once: true,
    execute(client) {
      console.log(`${client.user.username} is online`);
      client.user.setActivity("osu!", { type: ActivityType.Playing });
    },
};