let consecutive_messages = [];
let recent_senders = [];

const required_messages = 3;

export const checkConsecutiveMessages = (message) => {
    if (!recent_senders.includes(message.author.id) && consecutive_messages.includes(message.content)) {
        recent_senders.push(message.author.id);
        consecutive_messages.push(message.content);
    }
    else {
        recent_senders = [message.author.id];
        consecutive_messages = [message.content];
    }

    if (consecutive_messages.length === required_messages) {
        return true;
    }
    return false;
}