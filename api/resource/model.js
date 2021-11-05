const db = require('../../data/dbConfig')

const getAll = async () => {
	const resources = await db('resources')
	
	return resources
}
const getById = async resource_id => {
	const [resource] = await db('resources').where('resource_id', resource_id)
	
	return resource
}
const create = async resource => {
	const [id] = await db('resources').insert(resource)
	const newResource = await getById(id)
	return newResource
}
const checkName = async name => {
	return await db('resources')
		.where({ resource_name: `${name}` })
		.first()
}

module.exports = {
	getAll,
	getById,
	create,
	checkName
}