function formatDateToSaveInDatabase(
	date: string | undefined,
): string | undefined {
	if (!date) return undefined
	const explodedBornDate = date.split('/')

	return `${explodedBornDate[2]}-${explodedBornDate[1]}-${explodedBornDate[0]}`
}

export { formatDateToSaveInDatabase }
