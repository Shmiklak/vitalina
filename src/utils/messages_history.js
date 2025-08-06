let messages_history = [];

export const getCurrentHistory = () => {
    return messages_history;
}

export const setCurrentHistory = (history) => {
    messages_history = history;
    return true;
}