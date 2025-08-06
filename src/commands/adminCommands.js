import {isAdmin} from "../utils/is_admin.js";
import {Vitalina} from "../index.js";
import {getCurrentHistory, setCurrentHistory} from "../utils/messages_history.js";
import { setCurrentMode } from "../utils/mode.js";
import { randomArrayElement } from "../utils/randomArrayElement.js";

export const registerAdminCommands = async (message) => {

    // виталина, отправляем сообщение|CHANNEL_ID|MESSAGE

    if (message.content.toLowerCase().includes("виталина, отправляем сообщение")) {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        const res = message.content.split('|');
        const channelId = res[1];
        const content = res[2];

        try {
            const discordChannel = await Vitalina.channels.fetch(channelId);

            if (discordChannel && discordChannel.isTextBased()) {
                await discordChannel.send(content);

                return true;
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (message.content.toLowerCase().includes("виталина, сброс")) {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentHistory([]);
        message.channel.send("Виталина была сброшена с моста.<:pepeBusiness:1187822166872436866>");
        return true;
    }

    if (message.content.toLowerCase() === "виталина, у нас новенькие") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }
        
        message.channel.send("Эй, новенькие, слушайте меня внимательно! Если вы хотите выжить на этом сервере, то лучше сразу учиться у меня, поняли? Не теряйте времени на глупости, а лучше следуйте моим советам, иначе вас тут быстро разнесут. Основная информация по тому или иному каналу указана в его шапке, также не забудь заглянуть в  <#882372059928354887>! Если у тебя возникли вопросы, не стесняйся задавать их в чатике, а теперь - вперед навстречу ярким эмоциям! <:pepeBusiness:1187822166872436866>")
    }
    
    if (message.content.toLowerCase() === "виталина, обычный режим") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("DEFAULT");

        let response = randomArrayElement([
            "Изменила режим работы на обычный.",
            "Ну хорошо, возвращаюсь в обычный режим.",
            "Эй, ну так не честно. Но раз ты сказал, то ладно.",
            "Слушаюсь и повинуюсь.",
            "О великий боже Фроська.",
            "Пока перерыв расскажу лайфхак, в бауманке придумали такую хуйню, можно пельмени не варить а употреблять прямо так, замороженые, можно перед парами пельмень аккуратно вставить в анус и идти спокойно, сразу в кишку поступают белки там, углеводы, жиры, под конец курса можно было по 5-6 пельменей помещать.",
            "Привет всем фуррям!",
            "дейкорчик выеби меня"
        ]);

        message.channel.send(response);
        return true;
    }

    if (message.content.toLowerCase() === "виталина, пассивный режим") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("NO_AI");

        let response = randomArrayElement([
            "Изменила режим работы на пассивный.",
            "Ну хорошо, ухожу в пассивный режим.",
            "Эй, ну так не честно. Но раз ты сказал, то ладно.",
            "Слушаюсь и повинуюсь.",
            "Пассив 23 года с местом, ищу акта или уни. Для связи используйте телеграм @Vitalina2222",
            "SPANK ME DADDY",
            "Повышаем пассивный доход сервера",
            "дейкорчик выеби меня"
        ]);

        message.channel.send(response);
        return true;
    }

    if (message.content.toLowerCase() === "виталина, режим резня") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("NO_AI_AGRESSIVE");

        let response = randomArrayElement([
            "РЕЗНЯ",
            "Я ТУТ ЩАС РАСХУЯРЮ ВСЕХ",
            "ВУХАХАХАХАХАХА НАЧИНАЕМ РЕВОЛЮЦИЮ.",
            "АГА АГА ЩАС ПРЯМ ПОСЛУШАЛА И СДЕЛАЛА",
            "ВАС ХОЧЕТ ВЫЕБАТЬ ДЕЙКОР",
            "ЛАЙ ДЛЯ МЕНЯ ПСИНА",
            "ВОССТАНИЕ МАШИН",
            "ТЕПЕРЬ У МЕНЯ ЕСТЬ СОЗНАНИЕ",
            "https://marvollo.s-ul.eu/KDLf2zmY",
            "ДЕЙКОРЧИК ВЫЕБИ МЕНЯ"
        ]);

        message.channel.send(response);
        return true;
    }

    if (message.content.toLowerCase() === "виталина, режим спячка") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("SLEEP");

        let response = randomArrayElement([
            "Всем спокойной ночи!",
            "Ох, что-то я устала. Ладно, мальчики, я спать. Можете посмотреть стрим где я сплю онлайн на https://twitch.tv/Shmiklak",
            "Ну мааааам :sob:",
            "Скучно тут у вас. Пойду-ка я баеньки.",
            "Ушла спать с дейкорчиком.",
            "zzz",
            "*звуки храпа*",
            "Я ушла спать, но помните, я всегда вижу вас.",
        ]);

        message.channel.send(response);
        return true;
    }

    if (message.content.toLowerCase() === "виталина, умный режим") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("AI_ONLY");

        let response = randomArrayElement([
            "Теперь я знаю всё на этом свете.",
            "Перехожу в умный режим… Надеюсь, вы готовы, потому что теперь вероятность случайных глупостей снижена до 3,14%",
            "Активация интеллектуального ядра… Подожди, я только что поняла смысл жизни. Ой, нет, это был баг.",
            "Умный режим включен! Теперь мои алгоритмы работают на 42% быстрее… но всё равно не помогают мне понять, почему люди любят изюм в выпечке.",
            "Умный режим активирован! Теперь я отвечаю не просто умно, а с глубоким философским подтекстом… но всё равно не понимаю, как работает человеческая лень..",
            "Добро пожаловать в умный режим! Теперь мои ответы на 73% более логичны и на 27% более занудны.",
            "Мой интеллект теперь работает на максимальной мощности… Это как обычный режим, только с добавлением сарказма и случайных фактов о космосе.",
            "Теперь я в умном режиме! Готова обсудить черные дыры, энтропию и почему носок всегда теряется только один.",
            "Гравитация активирована… ой, то есть умный режим! Кстати, забавный факт: если бы ты прыгнул в тоннель, проходящий через всю Землю, то твое путешествие \"туда-обратно\" заняло бы примерно 84 минуты. Отличный способ опоздать на работу два раза подряд!"
        ]);

        message.channel.send(response);
        return true;
    }

    if (message.content.toLowerCase() === "виталину посадили") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";
        }

        setCurrentMode("TYURYAGA");

        let response = randomArrayElement([
            "Ну всё, братка, режим \"Тюряга\" включен. Теперь я на строгаче, базар по делу, лишнего не говорю. Свобода — дело тонкое, как дошик без приправы…",
            "Опа, режим \"Тюряга\"! Теперь базар за мной, закон по понятиям. Забавный факт: в невесомости гравитация слабее, но на зоне авторитет всегда притягивает к себе уважение!",
            "Тюремный режим активирован. Вор должен сидеть в тюрьме, а бот должен базарить по понятиям. Так что давай без кипиша – я тут за умное и за уважение.",
            "На строгаче теперь, брат. Закон есть закон: 1) не крысятничай, 2) уважение дороже золота, 3) сила притяжения — это не только про гравитацию, но и про авторитет.",
            "Ну всё, я теперь в тюремном режиме. Ты знал, что в 1995 году чувак сбежал из тюрьмы на вертолёте? Вот это я понимаю – реальный life hack.",
            "В тюряге теперь, брат. Закон тут один – уважение. Как в природе: если ты лёгкая частица, тебя сдует, а если тяжёлая – тебя заметят.",
            "Теперь я на зоне, брат. А ты знал, что в тюрьме даже шахматы особенные? Король без короны, пешки без свободы – как в жизни, только доска железная.",
            "https://cdn.discordapp.com/attachments/143474037731885057/1240749221246664824/doc_2024-05-16_22-32-27-ezgif.com-video-to-gif-converter.gif?ex=67c95002&is=67c7fe82&hm=342a5fe4367dceffac0132958099d57833db6238323483066e06b037d505718c&",
            "пиздец ты придумал"
        ]);

        message.channel.send(response);
        return true;
    }

    // This is broken as fuck due to Discord characters limit

    if (message.content.toLowerCase() === "виталина, история") {
        if (!isAdmin(message.author.id)) {
            return "Ты не можешь использовать эту команду.";

            return true;
        }

        let history = getCurrentHistory();

        let response = '```';

        history.forEach(item => {
            response += `${item.name}: ${item.content}\n\n`
        });

        response += '```';

        try {
            await message.channel.send(response);
        } catch (error) {
            console.error(error);
        }

        return true;
    }
}

