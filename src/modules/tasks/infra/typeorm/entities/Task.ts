import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('tasks')
class Task {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column({ name: 'task_name' })
	taskName!: string

	@Column({ name: 'start_date' })
	startDate!: string

	@Column({ name: 'execution_hour' })
	executionHour?: string

	@Column()
	frequency?: number

	@Column({ name: 'frequency_kind' })
	frequencyKind?: number

	@Column({ name: 'weekday_repeat' })
	weekdayRepeat?: string

	@Column({ name: 'month_day_repeat' })
	monthDayRepeat?: number

	@Column({ name: 'finish_date' })
	finishDate?: string

	@Column()
	value!: number

	@Column({ name: 'is_active' })
	isActive!: number

	@Column({ name: 'assigned_id' })
	assignedId?: string

	@Column({ name: 'created_by_id' })
	createdById!: string

	@Column({ name: 'family_id' })
	familyId!: string

	@CreateDateColumn()
	created_at?: Date

	@UpdateDateColumn()
	updated_at?: Date
}

export { Task }
