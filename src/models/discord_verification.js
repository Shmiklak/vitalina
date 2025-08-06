import { DataTypes } from "sequelize";

export default (sequelize) => {
    const DiscordVerification = sequelize.define("DiscordVerification", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      guild_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discord_user_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      osu_user_id: {
        type: DataTypes.STRING,
        allowNull: true
      }, 
      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    }, {
        tableName: "discord_verifications",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at"
    });
  
    return DiscordVerification;
  };