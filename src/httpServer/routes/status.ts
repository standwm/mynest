import express from 'express';

export const statusRouter = express.Router()

statusRouter.get('/', (_req, res) => {
	res.send({ ok: true, version: 'ALPHA' })
})
