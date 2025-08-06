import { randomArrayElement } from "../utils/randomArrayElement.js";

const users = [{
    discord_id: '662608589499924491', // mystaz
    options: [
        "https://tenor.com/view/mother-sgnila-cute-dance-moves-bear-gif-16312770",
        "https://tenor.com/view/%D0%BC%D0%B0%D1%82%D1%8C-gif-20664796",
        "https://tenor.com/view/%D1%81%D0%B3%D0%BD%D0%B8%D0%B2%D1%88%D0%B0%D1%8F%D0%BC%D0%B0%D1%82%D1%8C-%D1%81%D0%B3%D0%BD%D0%B8%D0%BB%D0%B0-%D0%BC%D0%B0%D1%82%D1%8C-gif-27596187",
        "https://tenor.com/view/dead-dance-gif-24921725",
        "https://tenor.com/view/%D0%BC%D0%B0%D1%82%D1%8C%D1%81%D0%B3%D0%BD%D0%B8%D0%BB%D0%B0-gif-26581212",
        "https://tenor.com/view/qotic-dance-mother-mama-gif-20781245",
        "https://tenor.com/view/mother-imyourfather-tekken-gif-26462893",
        "https://tenor.com/view/your-mother-%D0%BC%D0%BD%D0%B5%D1%82%D0%B2%D0%BE%D1%8F%D0%BC%D0%B0%D0%BC%D0%B0%D1%87%D0%B0%D1%81%D1%8B%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%B8%D0%BB%D0%B0-cat-gif-26986305"
    ]
}, {
    discord_id: '1379513046967521391', // какие-то фурри
    options: [
        "https://i.pinimg.com/564x/e6/25/0c/e6250ca744d67bcff00afb323609ff18.jpg",
        "https://i.pinimg.com/564x/a4/d3/3a/a4d33a7e21e55d73f784488abc3169e6.jpg",
        "https://lh3.googleusercontent.com/proxy/HnSVVrKAThNQe9nm_DASxyNFiMNPCIYWP85krWrb_joC3yLFk_fF5fB4syTb4LiTce3qDgXp6sljQw14rYtw7n_GrGUd2HTqmw",
    ]
}, {
    discord_id: '305361927415136258', // какие-то фурри
    options: [
        "https://i.pinimg.com/564x/e6/25/0c/e6250ca744d67bcff00afb323609ff18.jpg",
        "https://i.pinimg.com/564x/a4/d3/3a/a4d33a7e21e55d73f784488abc3169e6.jpg",
        "https://lh3.googleusercontent.com/proxy/HnSVVrKAThNQe9nm_DASxyNFiMNPCIYWP85krWrb_joC3yLFk_fF5fB4syTb4LiTce3qDgXp6sljQw14rYtw7n_GrGUd2HTqmw",
    ]
}, {
    discord_id: '1107231272473993296', // какие-то фурри
    options: [
        "https://i.pinimg.com/564x/e6/25/0c/e6250ca744d67bcff00afb323609ff18.jpg",
        "https://i.pinimg.com/564x/a4/d3/3a/a4d33a7e21e55d73f784488abc3169e6.jpg",
        "https://lh3.googleusercontent.com/proxy/HnSVVrKAThNQe9nm_DASxyNFiMNPCIYWP85krWrb_joC3yLFk_fF5fB4syTb4LiTce3qDgXp6sljQw14rYtw7n_GrGUd2HTqmw",
    ]
}, {
    discord_id: '391901940457537538', // айдар)
    options: [
        "https://www.meme-arsenal.com/memes/1f8f8fbb6afedb317071d11cc8c7c1b7.jpg",
        "https://memchik.ru//images/memes/5a8f036db1c7e305522611f8.jpg",
        "https://kartinkivsem.ru/img/s-dnem-rozhdeniya/s-dnem-rozhdeniya-2-ajdar.jpg",
        "https://pozdravko.ru/resources/postcards/otkrytka-s-dnem-rozhdeniya-Aidar-01.jpg"
    ]
}, {
    discord_id: '143343954816008192', // фрося
    options: [
        "https://lh5.googleusercontent.com/proxy/xG-UcsMIL_sofruXntp4qwnzdjRwvKBJqHKAQ4p6uUXkJ1ddKTNmjbjJTw3RtgFGKOrsaj65gFHHmtB-enJnx0OH9ZYb",
    ]
}, {
    discord_id: '304470215733936148', // дейкор
    options: [
        "дейкорчик выеби меня"
    ]
}]

export const sendUserBasedResponse = (message) => {
    let user = users.find(u => u.discord_id == message.author.id);
    if (user) {
        let option = randomArrayElement(user.options);
        message.channel.send(option);
        return true;
    }
    return false;
}