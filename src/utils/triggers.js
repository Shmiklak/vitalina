import { botConfig } from "../config/index.js";

export const triggersMatch = (content) => {
    return botConfig.triggers.some(trigger => {
        return content.toLowerCase().includes(trigger);
    });
}