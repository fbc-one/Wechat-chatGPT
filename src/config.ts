import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";

export const config: IConfig = {
  openai_api_key: process.env.OPENAI_API_KEY || "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",
  model: process.env.MODEL || "gpt-3.5-turbo",
  chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "",
  chatTiggerRule: process.env.CHAT_TRIGGER_RULE || "",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
  temperature: process.env.TEMPERATURE ? parseFloat(process.env.TEMPERATURE) : 0.6,
  blockWords: process.env.BLOCK_WORDS?.split(",") || [],
  chatgptBlockWords: process.env.CHATGPT_BLOCK_WORDS?.split(",") || [],
};
