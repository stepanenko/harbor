
import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from 'fastify-mongodb';
import config from './config.js';

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongo, { url: config.mongo });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
