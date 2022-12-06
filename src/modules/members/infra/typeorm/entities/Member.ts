import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity('members')
class Member {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column()
	name!: string

	@Column({ name: 'profile_picture' })
	profilePicture!: string

	@Column({ name: 'born_date' })
	bornDate?: string

	@Column()
	email?: string

	@Column()
	phone!: string

	@Column()
	status?: string

	@Column()
	kinship!: number

	@Column({ name: 'family_id' })
	familyId?: string

	@CreateDateColumn()
	created_at!: Date

	@UpdateDateColumn()
	updated_at!: Date
}

export { Member }
