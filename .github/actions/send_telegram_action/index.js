const core = require("@actions/core");

const TelegramBot = require('node-telegram-bot-api');
const token = core.getInput("token_father");
const bot = new TelegramBot(token, {polling: false});
var chat_Id=core.getInput("cahtId");
const name = core.getInput("name");



try {
    bot.sendMessage(chat_Id,`${name}, el commit se ha realizado exitosamente:\n\nAutor`);
  
  } catch (error) {
    core.setFailed(error.message);
  }
  
  core.setOutput("msg", "Mensaje enviado con exito");