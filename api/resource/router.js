const express = require('express')
const router = express.Router()
const Resources = require('./model')
const { checkNameUnique } = require('./middleware')

router.get('/', async (req, res) => {
	await Resources.getAll(req.query)
		.then(projects => {
			res.status(200).json(projects)
		})
})

router.post('/',checkNameUnique ,async (req, res) => {
	await Resources.create(req.body)
		.then(newResource => {
			res.status(201).json(newResource)
		})
})

module.exports = router