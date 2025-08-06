import OpenAI from "openai";
import { openAiToken } from "../config/index.js";
import {loadPrompt} from "../utils/load_prompt.js";
import { logEvent } from "../utils/logger.js";

const openai = new OpenAI({
    apiKey: openAiToken
});

export const generate_response = async (history) => {

    let new_history = [...history],
        main_prompt = await loadPrompt();

    new_history.unshift({
        role: "developer",
        content: main_prompt,
        name: 'Shmiklak'
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: new_history,
            temperature: 0.7,
            max_tokens: 300
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Could not generate response:", error);
        logEvent(`Could not generate response, ${error}`);
    }
}