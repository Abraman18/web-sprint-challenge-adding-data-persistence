const express = require('express')
const Projects = require('./model')

const checkProjectPayload = (req, res, next) => {
	const { project_name} = req.body
	if (project_name ) {
		next()
	} else {
		res.status(400).json({ message: 'project name is required' })
	}

}
module.exports = {
	checkProjectPayload
}