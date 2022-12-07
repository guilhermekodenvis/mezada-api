import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTasksTable1669666873096 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tasks',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'task_name',
						type: 'varchar',
					},
					{
						name: 'start_date',
						type: 'date',
					},
					{
						name: 'execution_hour',
						type: 'time without time zone',
						isNullable: true,
					},
					{
						name: 'frequency',
						type: 'integer',
						isNullable: true,
					},
					{
						name: 'frequency_kind',
						type: 'smallint',
						isNullable: true,
					},
					{
						name: 'weekday_repeat',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'month_day_repeat',
						type: 'smallint',
						isNullable: true,
					},
					{
						name: 'finish_date',
						type: 'date',
						isNullable: true,
					},
					{
						name: 'value',
						type: 'money',
					},
					{
						name: 'is_active',
						type: 'smallint',
						default: 1,
					},
					{
						name: 'assigned_id',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'created_by_id',
						type: 'uuid',
					},
					{
						name: 'family_id',
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
						name: 'TaskAssignedMemberId',
						referencedTableName: 'members',
						referencedColumnNames: ['id'],
						columnNames: ['assigned_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
					{
						name: 'TaskCreatedByMemberId',
						referencedTableName: 'members',
						referencedColumnNames: ['id'],
						columnNames: ['created_by_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
					{
						name: 'TaskFamilyId',
						referencedTableName: 'families',
						referencedColumnNames: ['id'],
						columnNames: ['family_id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE',
					},
				],
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tasks')
	}
}
