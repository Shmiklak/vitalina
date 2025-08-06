import dotenv from "dotenv";

dotenv.config();

export const discordToken = process.env.DISCORD_TOKEN;
export const openAiToken = process.env.OPENAI_TOKEN;
export const mode = process.env.MODE;

export const botConfig = mode === "dev" ? {
    admin_users: ["138957703853768705"],
    triggers: ['наст', 'nast', '1207670928515796992']
} : {
    admin_users: ["138957703853768705"],
    triggers: ['витал', 'vital', '1187685558382772254', 'гуталин', 'буталин', 'оленина']
};

export const database = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}