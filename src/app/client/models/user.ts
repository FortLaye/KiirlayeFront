export interface User {
	id: number
	prenom: string
	nom: string
	email: string
	phone: string
	idIpm: string
	password: string
}

export interface LoggedUser{
	preference: string
	elmail?: string
	phone?: string
	numIpm?: string
	password: string
}