import {loadTxtData} from "../utils/load_txt_data.js";
import {randomArrayElement} from "../utils/randomArrayElement.js";

export const sendRandomShrine = async (channel) => {
    let messages = await loadTxtData("../data/shrine.txt");
    await channel.send(randomArrayElement(messages));
    return true;
}