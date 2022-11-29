interface ICreateMemberDTO {
	name: string
	profilePicture: string
	phone: string
	status: string
	kinship: number // TODO: TRANSFORM INTO ENUM
	familyId: string
}

export { ICreateMemberDTO }
