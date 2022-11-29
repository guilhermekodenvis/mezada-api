import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTasksHistoryTable1669666962596
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tasks_history',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'picture',
						type: 'varchar',
					},
					{
						name: 'task_id',
						type: 'uuid',
					},
					{
						name: 'conclued_by_id',
						type: 'uuid',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						name: 'TasksHistoryTaskId',
						referencedTableName: 'tasks',
						referencedColumnNames: ['id'],
						columnNames: ['task_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
					{
						name: 'TasksHistoryConcluedByMemberId',
						referencedTableName: 'members',
						referencedColumnNames: ['id'],
						columnNames: ['conclued_by_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tasks_history')
	}
}
