const Hapi = require("@hapi/hapi");
const Gun = require("gun");

const server = new Hapi.Server({
  port: 4200,
  host: "localhost",
});

async function runtime() {
  new Gun({
    web: server.listener,
  });

  await server.start();
  console.log("Server running at:", server.info.uri);
}

runtime();
