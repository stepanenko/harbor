
import fastifyPlugin from 'fastify-plugin';
import fastifyMongodb from "@fastify/mongodb";
import config from './config.js';

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongodb, { url: config.mongo });

  // Wait for the database connection and log the status
  fastify.addHook('onReady', async () => {
    try {
      const client = fastify.mongo.client;
      // Check if the client is connected
      await client.db().command({ ping: 1 });
      console.log("Successfully connected to MongoDB");
    } catch (error) {
      // Log an error if the connection failed
      console.error(`Failed to connect to MongoDB: ${error.message}`);
    }
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
