interface IUpdateTaskDTO {
	taskId: string
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
}

export { IUpdateTaskDTO }
