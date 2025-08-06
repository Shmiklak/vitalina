import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadTxtData = async (relativePath) => {
    try {
        const filePath = path.join(__dirname, relativePath);
        const fileContent = await readFile(filePath, 'utf8');
        const lines = fileContent
            .split(/\r?\n/)          // handles both \n and \r\n
            .map(line => line.trim())
            .filter(line => line.length > 0);
        return lines;
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};
