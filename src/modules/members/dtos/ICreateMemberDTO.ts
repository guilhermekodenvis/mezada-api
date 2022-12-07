interface ICreateMemberDTO {
	name: string
	profilePicture: string
	email?: string
	phone: string
	kinship: number // TODO: TRANSFORM INTO ENUM
	familyId?: string
}

export { ICreateMemberDTO }
