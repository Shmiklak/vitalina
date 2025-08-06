import {loadTxtData} from "../utils/load_txt_data.js";
import {randomArrayElement} from "../utils/randomArrayElement.js";

export const sendRandomUser = async () => {
    let users = await loadTxtData("../data/random_user.txt");
    return randomArrayElement(users);
}