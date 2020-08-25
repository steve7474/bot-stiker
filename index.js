const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.body === "!cek") {
      client.sendText(msg.from, "👋 Hello! BOT STIKER AKTIF");
      client;
      if (msg.body === "!hello") {
      client.sendText(msg.from, "BANTU SAYA UNTUK MENGEMBANGKAN BOT INI DENGAN NOMOR HP 082370331804");
      client;
    } else if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
