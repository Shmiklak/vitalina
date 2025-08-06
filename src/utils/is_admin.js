import { botConfig } from "../config/index.js";

export const isAdmin = (user_id) => {
    return botConfig.admin_users.includes(user_id);
}