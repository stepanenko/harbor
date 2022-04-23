
export default async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    console.log('>>> Request', request.method, request.url);

    return { hello: 'world' }
  });

  fastify.get('/help', async (request, reply) => {
    console.log('>>> Request', request.method, request.url);

    return 'Help page';
  });

  const collection = fastify.mongo.db.collection('countries');

  fastify.get('/countries', async (request, reply) => {
    const result = await collection.find().toArray();
    if (result.length === 0) throw new Error('No documents found');

    return result;
  });

  fastify.get('/countries/:country', async (request, reply) => {
    const result = await collection.findOne({ country: request.params.country });
    if (!result) throw new Error('Invalid value');

    return result;
  });

  const countryBodyJsonSchema = {
    type: 'object',
    required: ['country'],
    properties: {
      country: { type: 'string' },
    },
  };

  const schema = {
    body: countryBodyJsonSchema,
  };

  fastify.post('/countries', { schema }, async (request, reply) => {
    // use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({ country: request.body.country });

    return result;
  });
}
