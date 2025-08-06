# Vitalina 2.0

<p align="center">
  <img src="https://raw.githubusercontent.com/Shmiklak/Vitalina2222/refs/heads/main/assets/default.png" alt="Vitalina" />
</p>

**Vitalina 2.0** is a humorous, personality-driven Discord bot built around ChatGPT. Designed primarily for entertainment within a close-knit community, the bot generates responses based on recent chat history and its own custom "persona". It also includes playful interactions, osu! game integration, and a few admin tools.

This project blends conversational AI with Discord API features to create a bot that feels alive, quirky, and responsive to the context of your server.

---

## 💡 Features

- 🤖 **AI-Powered Chat** — Uses OpenAI's ChatGPT to generate witty or sarcastic replies, based on message history and context.
- 🎯 **osu! Integration** — Hooks into osu! API to show stats, rankings, and user info.
- 🎲 **Random Reactions** — Sends GIFs, your own messages, or memes based on triggers, message content, or randomness.
- 📚 **Message Memory** — Maintains a lightweight message history to feed better prompts to the AI.
- 🛠 **Admin Commands** — Supports several commands for moderators and server admins.
- 🧠 **Custom Personality** — The bot has a defined "character" that shapes how it responds in conversations.

---

## ⚙️ Technologies

- **Node.js**
- **Discord.js**
- **PostgreSQL** (via Sequelize)
- **OpenAI API**

---

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Shmiklak/Vitalina.git
cd Vitalina
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root directory with the following structure:

```env
DISCORD_TOKEN=your_discord_token
OPENAI_TOKEN=your_openai_token
MODE=dev
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_DATABASE=your_database_name
```

> You can also use `MODE=prod` to enable production-specific behaviors.

### 4. Run the bot

```bash
npm run start
```
