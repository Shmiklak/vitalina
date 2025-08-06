import { Client } from "discord.js"
import fs from "fs"
import path from "path"

export default class Bot extends Client {

    constructor(options) {
        super(options);
        this.setupEvents();
    }

    async setupEvents() {
        const eventsPath = path.resolve("src/bot/events");
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

        for (const file of eventFiles) {
            const { default: event } = await import(`./events/${file}`);
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args, this));
            } else {
                this.on(event.name, (...args) => event.execute(...args, this));
            }
        }
    }
}