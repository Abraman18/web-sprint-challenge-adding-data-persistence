const db = require('../../data/dbConfig')

const getAll = async () => {
	const projects = await db('projects')
	projects.forEach(project => {
		if (project.project_completed == 0) {
			project.project_completed = false
		} else {
			project.project_completed = true
		}
	})
	return projects
}
const getById = async id => {
	const [project] = await db('projects').where('id', id)
	if (project.project_completed == 0) {
		project.project_completed = false
	} else {
		project.project_completed = true
	}
	return project
}
const create = async project => {
	const [id] = await db('projects').insert(project)
	const newProject = await getById(id)
	return newProject
}

module.exports = {
	getAll,
	getById,
	create
}