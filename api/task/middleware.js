const express = require('express')
const Tasks = require('./model')

const checkProjectId = async (req, res, next) => {
	await Tasks.checkProjectId(req.body.project_id)
		.then(project => {
			if (project) {
				next()
			} else {
				res.status(400).json({message:"invalid project id"})
			}
		})
}
const checkTasksPayload = (req, res, next) => {
	const { task_description, project_id } = req.body
	if (!task_description || !project_id ||typeof project_id !== 'number') {
		res.status(400).json({ message: "need all proper fields" })
	} else {
		next()
	}
}
module.exports = {
	checkProjectId,
	checkTasksPayload
}