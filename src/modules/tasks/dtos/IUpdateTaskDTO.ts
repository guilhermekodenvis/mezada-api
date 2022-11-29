interface IUpdateTaskDTO {
	taskName: string
	startDate: Date
	executionHour?: string
	frequency?: number
	frequencyKind?: number
	weekdayRepeat?: string
	monthDayRepeat?: number
	finishDate?: string
	value: number
	isActive: number
	assignedId?: string
}

export { IUpdateTaskDTO }
