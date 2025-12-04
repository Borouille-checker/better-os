import desktop from "./front/index.html";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": desktop,
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("server = " + server.url)

