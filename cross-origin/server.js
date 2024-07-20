import fastify from "fastify";
import fastifyCors from "fastify-cors";

const server = fastify();

server.register(fastifyCors, { // cors must be for preflight requests
  origin: "http://localhost:8000",
  // methods: [],
  // allowedHeaders:["Authorization"]
});

server.get("/me", (_, reply) => {
  // reply.headers({
  //   "Access-Control-Allow-Origin": "http://localhost:8000"}) // if there is only simple request, we need not need to set up cors, this header set is enough
  reply.status(200).send({ nickname: "didof" });
});

server.listen(3000, () =>
  console.info(`Server listening on http://localhost:3000`)
);
