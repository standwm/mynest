import { httpServer } from "./httpServer";

console.log("Starting the server")

// Listeners
httpServer.start()

// Node process handlers - - - - - - - - - - - - - - - - - 
const stop = async () => {
	if (httpServer) {
		await httpServer.stop();
		console.info('Http server stopped');
	}
}

const unexpectedErrorHandler = async (error: Error) => {
	console.error(error);
	await stop()
	process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', async () => {
	await stop()
	process.exit(0);
})
