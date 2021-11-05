const express = require('express')
const Resources = require('./model')

const checkNameUnique = (req, res, next) => {
	const { resource_name } = req.body
	Resources.checkName(resource_name)
		.then(resource => {
			if (resource) {
				res.status(400).json({ message: 'resource name taken' })
			} else {
				next()
			}
		})
}
module.exports = {
	checkNameUnique
}