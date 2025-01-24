import express from 'express';
import { usersService } from '../../services/users';
import { StatusCodes } from 'http-status-codes'

export const usersRouter = express.Router()

usersRouter.get('/:id', (req, res) => {
	const userId = Number.parseInt(req.params.id)
	if (typeof userId !== 'number' || userId <= 0) {
		res.sendStatus(StatusCodes.BAD_REQUEST)
		return
	}

	const user = usersService.getUser(userId)
	if (!user) {
		res.sendStatus(StatusCodes.NOT_FOUND)
		return
	}

	res.send(user)
	// res.status(StatusCodes.OK).send(user)
})
