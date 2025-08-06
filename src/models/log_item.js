import { DataTypes } from "sequelize";

export default (sequelize) => {
    const LogItem = sequelize.define("LogItem", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      event: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: "log_items",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at"
    });
  
    return LogItem;
};