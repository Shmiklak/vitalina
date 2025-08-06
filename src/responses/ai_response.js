import {getCurrentHistory, setCurrentHistory} from "../utils/messages_history.js";
import {generate_response} from "../services/chatgpt.js";
import {prepareResponse} from "../utils/prepare_response.js";

export const sendAIResponse = async (history, channel) => {
    let response = await generate_response(history);
    response = prepareResponse(response);

    let new_history = history;

    new_history.push({
        role: "assistant",
        content: response,
        name: 'Vitalina2222'
    });

    setCurrentHistory(new_history);

    await channel.send(response);

    return true;
}