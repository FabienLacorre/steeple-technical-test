import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", () => {
  return { hello: "world" };
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
