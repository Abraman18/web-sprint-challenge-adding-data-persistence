// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')
const {
	checkProjectPayload
} = require('./miidleware')

router.get('/', async (req, res) => {
	await Projects.getAll(req.query)
		.then(projects => {
			res.status(200).json(projects)
		})
})

router.post('/', checkProjectPayload, async (req, res) => {
	await Projects.create(req.body)
		.then(newProject => {
			if (newProject.project_completed == 0) {
				newProject.project_completed = false
			} else {
				newProject.project_completed = true
			}
			res.status(201).json(newProject)
		})
})


module.exports = router
