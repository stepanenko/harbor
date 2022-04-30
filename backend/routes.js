
export default async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('countries');

  fastify.get('/countries', async (request, reply) => {
    return await collection.find().toArray();
  });

  fastify.get('/countries/:name', async (request, reply) => {
    return await collection.findOne({ name: request.params.name });
  });

  fastify.delete('/countries/:name', async (request, reply) => {
    try {
      return await collection.deleteOne({ name: request.params.name });
    } catch (err) {
      return new Error(`Could not delete country. ${err}`); // works same as 'throw new...' ??
    }
  });

  const countryBodyJsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string' },
    },
  };

  const schema = {
    body: countryBodyJsonSchema,
  };

  fastify.post('/countries', { schema }, async (request, reply) => {
    // use the `request.body` object to get the data sent by the client
    return await collection.insertOne({ name: request.body.name });
  });


  fastify.get('/', async (request, reply) => {
    console.log('>>> Request', request.method, request.url);

    return { name: 'Harbor API', health: 'OK', version: 0.1 };
  });

  fastify.get('/about', async (request, reply) => {
    return 'Harbor Backend REST API Version 0.1';
  });
}
