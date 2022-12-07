import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMembersTable1669664084009 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'members',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'profile_picture',
						type: 'varchar',
					},
					{
						name: 'born_date',
						type: 'date',
						isNullable: true,
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'phone',
						type: 'varchar',
					},
					{
						name: 'status',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'kinship',
						type: 'smallint',
					},
					{
						name: 'family_id',
						type: 'uuid',
						isNullable: true,
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
						name: 'MemberFamilyId',
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
		await queryRunner.dropTable('members')
	}
}
