interface ICreateTaskDTO {
	taskName: string
	startDate: string
	executionHour?: string
	frequency?: number
	frequencyKind?: number
	weekdayRepeat?: string
	monthDayRepeat?: number
	finishDate?: string
	value: number
	isActive: number
	assignedId?: string
	createdById: string
	familyId: string
}

export { ICreateTaskDTO }
