import {loadTxtData} from "../utils/load_txt_data.js";
import {randomArrayElement} from "../utils/randomArrayElement.js";

export const sendRandomVitas = async (channel) => {
    let messages = await loadTxtData("../data/vitas_messages.txt");
    await channel.send(randomArrayElement(messages));
    return true;
}