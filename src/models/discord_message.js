import { DataTypes } from "sequelize";

export default (sequelize) => {
    const DiscordMessage = sequelize.define("DiscordMessage", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      message_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guild_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      channel_id: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: "discord_messages",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at"
    });
  
    return DiscordMessage;
  };