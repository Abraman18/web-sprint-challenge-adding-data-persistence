
exports.up = function(knex) {
	return knex.schema.createTable('projects', table => {
		table.increments('project_id')
		table.text('project_name')
			.notNullable()
		table.text('project_description')
		table.boolean('project_completed')
			.defaultTo('false')
	})
		.createTable('resources', table => {
			table.increments('resource_id')
			table.text('resource_name')
				.unique()
				.notNullable()
			table.text('resource_description')
		})
		.createTable('task', table => {
			table.increments('task_id')
			table.text('task_description')
				.notNullable()
			table.text('task_notes')
			table.boolean('task_completed')
				.defaultTo('false')
			table.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
		})
		.createTable('project_resources', table => {
			table.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
			table.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resource_id')
				.inTable('resources')
	})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('task')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects')
};
