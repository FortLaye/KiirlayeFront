import {Entreprise} from "./entreprise";

export interface adherent{
  id: number
  nom: string
  prenom: string
  genre: string
  userIdd: string
  tel: string
  email: string
  image: string
  adresse: string
  dateNaiss: string
  lieuNaiss: string
  conventionCollective:string
  poste:string
  entrepriseClients:Entreprise

}
