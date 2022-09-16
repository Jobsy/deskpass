import * as redis from 'redis';

// const redisClient = redis.createClient();
const redisClient = redis.createClient({
	// Redis will use port 6379, the default port
	// and connect to the redis docker through the host address "cache" as defined on docker-compose
	socket: {
		host: process.env.REDIS_HOST,
		port: 6379,
	},
});

(async () => {
	console.log('Connecting to Redis');

	// connect() method, which starts the connection with Redis on the default port 6379
	await redisClient.connect();
})();

// on() method that registers events on the Redis object
redisClient.on('ready', () => {
	console.log('Redis Connected!');
});

redisClient.on('error', (err) => {
	console.log('Error in the Connection: ', err);

	if (err.hostname === 'cache') {
		redis.createClient();
	}
});

export default redisClient;
