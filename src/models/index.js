import { Sequelize } from "sequelize";
import { readdirSync } from "fs";
import { basename, join } from "path";
import { fileURLToPath } from "url";
import { database } from "../config/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

export const sequelize = new Sequelize(
  `postgres://${database.user}:${database.password}@${database.host}:${database.port}/${database.database}`
);

export const db = {};

const modelFiles = readdirSync(join(__dirname))
  .filter(
    (file) =>
      file !== "index.js" && file.endsWith(".js")
  );

for (const file of modelFiles) {
  const { default: model } = await import(`./${file}`);
  const definedModel = model(sequelize);
  db[definedModel.name] = definedModel;
}

db.sequelize = sequelize;
