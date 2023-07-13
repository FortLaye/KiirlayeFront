import {Entreprise} from "./entreprise";

export interface Contrat {
  id: number
  etatContrat: boolean
  date_signature: number
  date_entree_vigueur: number
  date_fin_contrat: number
  copie_contrat: string
  periodicite_contrat: string[]
  entrepriseClients: Entreprise
}
