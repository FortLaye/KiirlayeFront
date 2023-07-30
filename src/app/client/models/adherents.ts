import {Entreprise} from "./entreprise";

// export interface Adherent{
//   id: number
//   nom: string
//   prenom: string
//   genre: string
//   userIdd: string
//   tel: string
//   email: string
//   image: string
//   adresse: string
//   dateNaiss: string
//   lieuNaiss: string
//   conventionCollective:string
//   poste:string
//   entrepriseClients:Entreprise
// }
export interface Adherent {
  ridca: string
  DateNais: string
  adresse: any
  poste: any
  DateEmbauche: string
  sexe: any
  categorie: string
  dateEmbauche: string
  dateNais: string
  telephonePro: string
  sitMatrimoniale: string
  nbreEnfant: string
  numCNI: string
  lieuNais: string
  emailPro: string
  estActif: any
  nbreEpouse: string
  password: string
  email: string
  isActive: boolean
  nom: string
  prenom: string
  telephone: string
  firstConnexion: boolean
  userId: number
}

export interface dataOfAdherents{
  data: Adherent[]
}
