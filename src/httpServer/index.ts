import express, { type Express } from 'express'
import { Server } from 'http'
import { usersRouter } from './routes/users'
import { statusRouter } from './routes/status'

export const httpServer = new class {
	private server: Server | undefined
	private app: Express

	constructor() {
		this.app = express()

		this.app.use('/', statusRouter)
		this.app.use('/users', usersRouter)
	}

	start() {
		this.server = this.app.listen(3000)
	}

	stop() {
		return new Promise<void>((resolve, reject) => {
			if (this.server) {
				this.server.close((err) => {
					console.error(err)
					resolve()
				})
			} else {
				resolve()
			}
		})
	}
}

// za mě je lepší vždy exportovat ne-defaultně pojmenované proměnné, protože ti pak IDE suggestuje a autoimportuje (defaulty většinou neumí)