import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('families')
class Family {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column({ name: 'family_name' })
	familyName!: string

	@CreateDateColumn()
	created_at!: Date

	@UpdateDateColumn()
	updated_at!: Date
}

export { Family }
