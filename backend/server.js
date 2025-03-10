
import Fastify from 'fastify';
import cors from 'fastify-cors';

import dbConnector from './dbConnector.js';
import routes from './routes.js';

const fastify = Fastify();
const PORT = 4000;

fastify.register(cors);
fastify.register(dbConnector);
fastify.register(routes);

// Hook to log method and URL for each request
fastify.addHook('onRequest', (request, reply, done) => {
  console.log(`>>> ${request.method}: ${request.url}`);
  done();
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log('Listening on port', PORT);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();
