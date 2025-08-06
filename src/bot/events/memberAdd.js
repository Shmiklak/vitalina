import { db } from "../../models/index.js"

export default {
    name: "guildMemberAdd",
    once: false,
    async execute(member, bot) {
        db.DiscordVerification.create({
            guild_id: member.guild.id,
            discord_user_id: member.user.id
        });
    }
}