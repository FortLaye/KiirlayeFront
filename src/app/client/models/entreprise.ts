export interface Entreprise {
  id: number
  nomEntreprise: string
  adresse: adresse
  ninea: string
  numRegCommerce: string
  numeroTelephone: string
  emailEntreprise:string
  logo:string
  fax:string
}
export interface adresse{
  pays: string
  region: string
  ville: string
  departement: string
  rue_entrprise: string
  latitude: number
  longitude: number
  etatAdresse: boolean
}

