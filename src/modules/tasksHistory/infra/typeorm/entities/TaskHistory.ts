import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('tasks_history')
class TaskHistory {
	@PrimaryGeneratedColumn('uuid')
	id?: string

	@Column()
	picture!: string

	@Column({ name: 'task_id' })
	taskId!: string

	@Column({ name: 'conclued_by_id' })
	concluedById!: string

	@CreateDateColumn()
	created_at?: Date

	@UpdateDateColumn()
	updated_at?: Date
}

export { TaskHistory }
