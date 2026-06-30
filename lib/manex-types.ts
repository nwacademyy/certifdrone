export type UAS = {
  nom: string;
  fabricant: string;
  type: "multirotor" | "voilure_fixe";
  classe: string;
  mtom: string;
  parachute: boolean;
  parachuteDesc: string;
  fts: boolean;
  ftsDesc: string;
  tmpr: boolean;
  tmprDesc: string;
  chargeutile: string;
  lienC3: string;
  confinement: string;
  conditionsEnv: string;
};

export type Pilote = {
  nom: string;
  immatriculation: string;
  modelesUAS: string;
  scenarios: string;
  qualification: string;
  experience: string;
  dateDebut: string;
  dateFin: string;
};

export type PersonnelMaintenance = {
  nom: string;
  modelesUAS: string;
  typeAutorisation: string;
  dateDebut: string;
  dateFin: string;
};

export type EssaiVol = {
  date: string;
  reference: string;
  type: "Simulé" | "Réel";
  nombre: string;
  resultat: string;
};

export type ManexData = {
  // Opérateur
  operateurNom: string;
  operateurSiret: string;
  operateurAdresse: string;
  operateurCodePostal: string;
  operateurVille: string;
  operateurPays: string;
  operateurEmail: string;
  operateurTel: string;
  operateurNumAlphaTango: string;

  // Organisation
  societeAnneeCreation: string;
  societeDomaineActivite: string;
  societeDescription: string;
  accountableManager: string;
  safetyManager: string;
  maintenanceManager: string;
  flightOpsManager: string;
  trainingManager: string;

  // Date création
  dateCreation: string;

  // UAS (1 à 4)
  uas: UAS[];

  // Zone de vol 1
  zone1Scenario: string;
  zone1Description: string;
  zone1HauteurMax: string;
  zone1GRB: string;
  zone1VentMax: string;
  zone1VisibiliteMin: string;
  zone1TempMin: string;
  zone1TempMax: string;
  zone1GRC: string;
  zone1ARC: string;

  // Zone 2
  zone2Active: boolean;
  zone2Scenario: string;
  zone2Description: string;
  zone2HauteurMax: string;
  zone2GRB: string;

  // ERP local
  erpAerodrome: string;
  erpAerodromeTel: string;
  erpATC: string;
  erpPompiersTel: string;
  erpPoliceTel: string;

  // Personnel
  pilotes: Pilote[];
  personnelMaintenance: PersonnelMaintenance[];
  personnelInspection: PersonnelMaintenance[];

  // Essais en vol
  essaisVol: EssaiVol[];
};

export const EMPTY_UAS: UAS = {
  nom: "",
  fabricant: "",
  type: "multirotor",
  classe: "C5",
  mtom: "",
  parachute: false,
  parachuteDesc: "Un parachute n'est pas installé et n'est pas utilisé.",
  fts: false,
  ftsDesc: "Pas de système de terminaison de vol installé.",
  tmpr: false,
  tmprDesc: "Non requis.",
  chargeutile: "",
  lienC3: "Toutes les liaisons C3 utilisées fournissent suffisamment d'informations pour que le pilote puisse contrôler à tout moment si les exigences opérationnelles sont respectées.",
  confinement: "",
  conditionsEnv: "",
};

export const EMPTY_PILOTE: Pilote = {
  nom: "",
  immatriculation: "",
  modelesUAS: "",
  scenarios: "",
  qualification: "BAPD, CATS",
  experience: "",
  dateDebut: "",
  dateFin: "",
};

export const EMPTY_MAINTENANCE: PersonnelMaintenance = {
  nom: "",
  modelesUAS: "",
  typeAutorisation: "Permanente",
  dateDebut: "",
  dateFin: "",
};

export const EMPTY_ESSAI: EssaiVol = {
  date: "",
  reference: "",
  type: "Simulé",
  nombre: "3",
  resultat: "3/3 réussi",
};

export const EMPTY_MANEX: ManexData = {
  operateurNom: "",
  operateurSiret: "",
  operateurAdresse: "",
  operateurCodePostal: "",
  operateurVille: "",
  operateurPays: "France",
  operateurEmail: "",
  operateurTel: "",
  operateurNumAlphaTango: "",
  societeAnneeCreation: "",
  societeDomaineActivite: "",
  societeDescription: "",
  accountableManager: "",
  safetyManager: "",
  maintenanceManager: "",
  flightOpsManager: "",
  trainingManager: "",
  dateCreation: new Date().toLocaleDateString("fr-FR"),
  uas: [{ ...EMPTY_UAS }],
  zone1Scenario: "STS-01",
  zone1Description: "",
  zone1HauteurMax: "120",
  zone1GRB: "25",
  zone1VentMax: "8",
  zone1VisibiliteMin: "5",
  zone1TempMin: "-10",
  zone1TempMax: "40",
  zone1GRC: "GRC3",
  zone1ARC: "ARC-b",
  zone2Active: false,
  zone2Scenario: "STS-02",
  zone2Description: "",
  zone2HauteurMax: "120",
  zone2GRB: "25",
  erpAerodrome: "N/A",
  erpAerodromeTel: "N/A",
  erpATC: "N/A",
  erpPompiersTel: "112 / 18",
  erpPoliceTel: "110 / 17",
  pilotes: [{ ...EMPTY_PILOTE }],
  personnelMaintenance: [{ ...EMPTY_MAINTENANCE }],
  personnelInspection: [{ ...EMPTY_MAINTENANCE }],
  essaisVol: [{ ...EMPTY_ESSAI }],
};
