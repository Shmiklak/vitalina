import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { getCurrentMode } from './mode.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readTextFile = async (filePath) => {
    try {
        return await readFile(filePath, 'utf8');
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

export const loadPrompt = async () => {
    const current_mode = getCurrentMode();

    let filePath = '';

    switch (current_mode) {
        case "DEFAULT":
            filePath = path.join(__dirname, '../prompts/default.txt');
            break;
        case "AI_ONLY":
            filePath = path.join(__dirname, '../prompts/smart.txt');
            break;
        case "TYURYAGA":
            filePath = path.join(__dirname, '../prompts/tyuryaga.txt');
            break;
    }

    return await readTextFile(filePath);
};
