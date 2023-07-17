import {Entreprise} from "./entreprise";

export interface Contrat {
  id: number
  etatContrat: boolean
  date_signature: Date
  date_entree_vigueur: Date
  date_fin_contrat: Date
  copie_contrat: string
  periodicite_contrat: string[]
  entrepriseClients: Entreprise
}
