import {loadTxtData} from "../utils/load_txt_data.js";
import {randomArrayElement} from "../utils/randomArrayElement.js";

export const sendRandomGif = async (channel) => {
    let gifs = await loadTxtData("../data/gif_collection.txt");
    await channel.send(randomArrayElement(gifs));
    return true;
}