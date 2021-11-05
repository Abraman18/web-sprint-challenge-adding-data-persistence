const db = require('../../data/dbConfig')

const getAll = async () => {
	const tasks = await db('tasks')
	tasks.forEach(task => {
		if (task.task_completed == 0) {
			task.task_completed = false
		} else {
			task.task_completed = true
		}
	})

	return tasks
}
const getById = async task_id => {
	const [task] = await db('tasks').where('task_id', task_id)
			if (task.task_completed == 0) {
				task.task_completed = false
			} else {
				task.task_completed = true
			}
	return task
}
const create = async task => {
	const [id] = await db('tasks').insert(task)
	const newTask = await getById(id)
	return newTask
}
const checkProjectId = async project_id => {
	const [project] = await db('projects').where('project_id', project_id)
	return project
}

module.exports = {
	getAll,
	getById,
	create,
	checkProjectId
}// build your `Task` model here
