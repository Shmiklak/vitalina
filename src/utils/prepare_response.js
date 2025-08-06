export const prepareResponse = (message) => {

    const tail = "<:pepeBusiness:1187822166872436866>";

    let vitalina_response = message
        .replace(/блин/g, "бля")
        .replace(/охрен/g, "оху")
        .replace(/Vitalina2222:/g, "")
        .replace(/Виталина2222:/g, "")

    return vitalina_response + tail;
}