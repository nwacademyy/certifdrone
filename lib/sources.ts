/**
 * SOURCES RÉGLEMENTAIRES OFFICIELLES — CertifDrone.fr
 * Toutes les sources sont vérifiées et citées avec leur URL officielle.
 * Dernière mise à jour : Juin 2026
 */

export type RegulatorySource = {
  id: string;
  name: string;
  authority: string;
  country: string;
  type: "regulation" | "amcgm" | "decision" | "portal" | "guide" | "faq";
  url: string;
  description: string;
  format?: string[];
  lastUpdated?: string;
};

export const REGULATORY_SOURCES: RegulatorySource[] = [
  // ── RÈGLEMENTS UE PRIMAIRES ──────────────────────────────────────────
  {
    id: "eu_2019_947",
    name: "Règlement (UE) 2019/947",
    authority: "Commission Européenne",
    country: "UE",
    type: "regulation",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019R0947",
    description: "Règlement d'exécution sur les règles et procédures pour l'exploitation des aéronefs sans équipage à bord. Base légale de toutes les certifications BAPD, A2, CATS.",
    format: ["HTML", "PDF", "XML", "JSON"],
    lastUpdated: "2024-04",
  },
  {
    id: "eu_2019_945",
    name: "Règlement délégué (UE) 2019/945",
    authority: "Commission Européenne",
    country: "UE",
    type: "regulation",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019R0945",
    description: "Règlement sur les systèmes d'aéronefs sans équipage (drones). Définit les classes C0 à C6, les exigences techniques et les marquages.",
    format: ["HTML", "PDF", "XML"],
    lastUpdated: "2024-04",
  },
  {
    id: "eu_2024_1108",
    name: "Règlement délégué (UE) 2024/1108",
    authority: "Commission Européenne",
    country: "UE",
    type: "regulation",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1108",
    description: "Modification de 2019/945 — Mise à jour des exigences pour les classes de drones. En vigueur depuis 2024.",
    format: ["HTML", "PDF"],
    lastUpdated: "2024-04",
  },
  {
    id: "eu_2024_1110",
    name: "Règlement d'exécution (UE) 2024/1110",
    authority: "Commission Européenne",
    country: "UE",
    type: "regulation",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1110",
    description: "Modification de 2019/947 — Nouvelles dispositions opérationnelles. En vigueur depuis 2024.",
    format: ["HTML", "PDF"],
    lastUpdated: "2024-04",
  },
  {
    id: "eu_2021_664",
    name: "Règlement (UE) 2021/664 — U-Space",
    authority: "Commission Européenne",
    country: "UE",
    type: "regulation",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R0664",
    description: "Cadre réglementaire pour l'espace aérien U-Space. Régit l'intégration des drones dans l'espace aérien non ségrégué.",
    format: ["HTML", "PDF"],
    lastUpdated: "2021-04",
  },

  // ── EASA — EASY ACCESS RULES & AMC/GM ───────────────────────────────
  {
    id: "easa_ear_uas_2024",
    name: "Easy Access Rules for UAS — Révision Juillet 2024",
    authority: "EASA",
    country: "UE",
    type: "amcgm",
    url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-unmanned-aircraft-systems-regulations-eu",
    description: "Consolidation de 2019/947 + 2019/945 avec AMC et GM. Disponible en PDF et XML machine-readable. Source principale pour le contenu pédagogique.",
    format: ["PDF", "XML", "Online"],
    lastUpdated: "2024-07",
  },
  {
    id: "easa_amc_gm_partuas",
    name: "AMC & GM to Part-UAS — Issue 1, Amendment 2",
    authority: "EASA",
    country: "UE",
    type: "amcgm",
    url: "https://www.easa.europa.eu/en/document-library/acceptable-means-of-compliance-and-guidance-materials/amc-gm-part-uas-issue-1-2",
    description: "Moyens de conformité acceptables et matériel d'orientation. Contient le SYLLABUS COMPLET des examens théoriques A1/A3, A2, STS-01, STS-02.",
    format: ["PDF"],
    lastUpdated: "2022-10",
  },
  {
    id: "easa_faq_drones",
    name: "EASA FAQ Drones (UAS)",
    authority: "EASA",
    country: "UE",
    type: "faq",
    url: "https://www.easa.europa.eu/en/the-agency/faqs/drones-uas",
    description: "Questions officielles EASA sur la réglementation, l'enregistrement, la formation et les opérations. Source de référence pour le contenu QCM.",
    format: ["HTML"],
    lastUpdated: "2026",
  },
  {
    id: "easa_sts_page",
    name: "EASA — Standard Scenario (STS)",
    authority: "EASA",
    country: "UE",
    type: "guide",
    url: "https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/specific-category-civil-drones/standard-scenario-sts",
    description: "Page officielle EASA sur STS-01 et STS-02. Exigences, formations, examens.",
    format: ["HTML"],
    lastUpdated: "2026",
  },

  // ── EUR-LEX — API MACHINE READABLE ──────────────────────────────────
  {
    id: "eurlex_api",
    name: "EUR-Lex Web Services (SOAP/REST)",
    authority: "Publications Office EU",
    country: "UE",
    type: "portal",
    url: "https://eur-lex.europa.eu/content/help/data-reuse/webservice.html",
    description: "API officielle EUR-Lex pour accéder aux textes législatifs en JSON/XML. Permet de récupérer le texte intégral de 2019/947 et 2019/945 de façon programmatique. Gratuit.",
    format: ["JSON", "XML", "SOAP"],
    lastUpdated: "2026",
  },
  {
    id: "eurlex_sparql",
    name: "EUR-Lex SPARQL Endpoint",
    authority: "Publications Office EU",
    country: "UE",
    type: "portal",
    url: "https://publications.europa.eu/webapi/rdf/sparql",
    description: "Point d'accès SPARQL pour requêter les métadonnées des textes législatifs européens. Permet de suivre les modifications réglementaires automatiquement.",
    format: ["RDF", "SPARQL"],
    lastUpdated: "2026",
  },

  // ── FRANCE — DGAC / ALPHATANGO ───────────────────────────────────────
  {
    id: "dgac_alphatango",
    name: "AlphaTango — Portail officiel DGAC",
    authority: "DGAC",
    country: "France",
    type: "portal",
    url: "https://alphatango.aviation-civile.gouv.fr",
    description: "Plateforme officielle française d'enregistrement des opérateurs et télépilotes. Examen BAPD (A1/A3) accessible en ligne. Pas d'API publique documentée.",
    format: ["Web"],
    lastUpdated: "2026",
  },
  {
    id: "dgac_reglementation",
    name: "DGAC — Réglementation drones",
    authority: "DGAC",
    country: "France",
    type: "guide",
    url: "https://www.ecologie.gouv.fr/politiques-publiques/alphatango",
    description: "Documentation officielle DGAC sur la réglementation française des drones, conforme EASA.",
    format: ["HTML", "PDF"],
    lastUpdated: "2026",
  },
  {
    id: "dgac_geoportail",
    name: "Géoportail — Carte des restrictions UAS",
    authority: "DGAC / IGN",
    country: "France",
    type: "portal",
    url: "https://www.geoportail.gouv.fr",
    description: "Carte officielle des zones de restrictions de vol en France (CTR, zones R, zones P, zones D). Données accessibles via API Géoportail IGN.",
    format: ["WMS", "WMTS", "API"],
    lastUpdated: "2026",
  },
  {
    id: "dgac_geoportail_api",
    name: "API Géoportail IGN — UAS Zones",
    authority: "IGN / DGAC",
    country: "France",
    type: "portal",
    url: "https://geoservices.ign.fr/documentation/services/api-et-services-ogc",
    description: "API REST/WMS pour récupérer les zones de restrictions aériennes françaises en temps réel. Données officielles DGAC intégrées. Gratuit pour usage éducatif.",
    format: ["WMS", "REST", "GeoJSON"],
    lastUpdated: "2026",
  },

  // ── PAYS-BAS — RDW / ILT ─────────────────────────────────────────────
  {
    id: "rdw_drone",
    name: "RDW — Drone pilot licence",
    authority: "RDW",
    country: "Pays-Bas",
    type: "portal",
    url: "https://www.rdw.nl/en/drone/applying-for-a-pilot-licence-or-operator-number-for-a-drone",
    description: "Portail officiel RDW pour l'émission des licences de télépilote néerlandaises (A1/A3, A2, STS). C'est via RDW que le CATS est délivré.",
    format: ["Web"],
    lastUpdated: "2026",
  },
  {
    id: "ilt_formations",
    name: "ILT — Opleidingen dronebewijzen",
    authority: "ILT",
    country: "Pays-Bas",
    type: "portal",
    url: "https://www.ilent.nl/onderwerpen/luchtvaart/drones-en-modelvliegtuigen/opleidingen-voor-dronebewijzen",
    description: "Liste officielle des organismes agréés ILT pour les examens théoriques et pratiques STS-01/02. Mise à jour réglementaire par le gouvernement néerlandais.",
    format: ["HTML"],
    lastUpdated: "2026",
  },

  // ── ROYAUME-UNI — CAA ────────────────────────────────────────────────
  {
    id: "caa_uk_drone",
    name: "UK CAA — Drone & Model Aircraft",
    authority: "CAA UK",
    country: "Royaume-Uni",
    type: "portal",
    url: "https://www.caa.co.uk/drones/",
    description: "Autorité de l'aviation civile britannique. Depuis Brexit, le UK a son propre cadre réglementaire (Drone & Model Aircraft Code) distinct d'EASA mais aligné.",
    format: ["HTML", "PDF"],
    lastUpdated: "2026",
  },
  {
    id: "uk_drone_code",
    name: "UK Drone Code",
    authority: "CAA UK",
    country: "Royaume-Uni",
    type: "guide",
    url: "https://www.caa.co.uk/consumers/drones/the-drone-code/",
    description: "Code de conduite officiel UK pour les drones. Équivalent au cadre EASA Open Category mais avec spécificités britanniques post-Brexit.",
    format: ["HTML", "PDF"],
    lastUpdated: "2026",
  },
  {
    id: "uk_nats_drone",
    name: "NATS — Drone Assist App API",
    authority: "NATS",
    country: "Royaume-Uni",
    type: "portal",
    url: "https://dronesafe.uk",
    description: "Application officielle UK de vérification des zones de vol. Données airspace disponibles via API pour développeurs. Données temps réel UK.",
    format: ["API REST"],
    lastUpdated: "2026",
  },

  // ── BELGIQUE — BCAA ───────────────────────────────────────────────────
  {
    id: "bcaa_drone",
    name: "BCAA — Direction Générale Transport Aérien",
    authority: "BCAA",
    country: "Belgique",
    type: "portal",
    url: "https://mobilit.belgium.be/fr/transport-aerien/navigation-aerienne/drones",
    description: "Autorité belge de l'aviation civile. Implémente EASA 2019/947. L'examen STS peut se passer en ligne via des organismes agréés BCAA.",
    format: ["HTML"],
    lastUpdated: "2026",
  },

  // ── ALLEMAGNE — LBA ───────────────────────────────────────────────────
  {
    id: "lba_drone",
    name: "LBA — Luftfahrt-Bundesamt",
    authority: "LBA",
    country: "Allemagne",
    type: "portal",
    url: "https://www.lba.de/DE/Drohnen/Drohnen_node.html",
    description: "Autorité allemande de l'aviation. Délivre les EU Drone Operator Certificates. Conforme EASA.",
    format: ["HTML"],
    lastUpdated: "2026",
  },

  // ── ESPAGNE — AESA ─────────────────────────────────────────────────────
  {
    id: "aesa_drone",
    name: "AESA — Agencia Estatal de Seguridad Aérea",
    authority: "AESA",
    country: "Espagne",
    type: "portal",
    url: "https://www.seguridadaerea.gob.es/en/ambitos/drones",
    description: "Autorité espagnole de l'aviation. Organise directement les examens théoriques STS en ligne via leur portail officiel (SMOWL proctoring). Gratuit.",
    format: ["HTML", "Web"],
    lastUpdated: "2026",
  },

  // ── USA — FAA ────────────────────────────────────────────────────────
  {
    id: "faa_uas",
    name: "FAA — UAS (Drone) Regulations",
    authority: "FAA",
    country: "États-Unis",
    type: "portal",
    url: "https://www.faa.gov/uas",
    description: "Cadre réglementaire américain des drones. Part 107 pour usage commercial. Différent d'EASA mais utile pour comparaison internationale.",
    format: ["HTML", "PDF"],
    lastUpdated: "2026",
  },
  {
    id: "faa_dronezone",
    name: "FAA DroneZone API / LAANC",
    authority: "FAA",
    country: "États-Unis",
    type: "portal",
    url: "https://uas-facilities.faa.gov/",
    description: "API FAA pour les autorisations d'espace aérien contrôlé (LAANC). Données GeoJSON des zones UAS disponibles publiquement.",
    format: ["REST", "GeoJSON"],
    lastUpdated: "2026",
  },

  // ── OPENSKY NETWORK — DONNÉES TRAFIC ────────────────────────────────
  {
    id: "opensky_network",
    name: "OpenSky Network API",
    authority: "OpenSky Network",
    country: "International",
    type: "portal",
    url: "https://opensky-network.org/apidoc/",
    description: "API REST gratuite pour les données de trafic aérien en temps réel (ADS-B). Utile pour illustrer la coexistence drones/aviation civile dans les formations.",
    format: ["REST", "JSON"],
    lastUpdated: "2026",
  },

  // ── AVIATION WEATHER — MÉTÉO ─────────────────────────────────────────
  {
    id: "aviationweather_api",
    name: "Aviation Weather Center API (AWC/NOAA)",
    authority: "NOAA",
    country: "International",
    type: "portal",
    url: "https://aviationweather.gov/data/api/",
    description: "API REST gratuite pour METAR, TAF, SIGMET, AIRMET en temps réel. Données mondiales. Permet d'intégrer de vraies données météo dans les exercices.",
    format: ["REST", "JSON", "XML"],
    lastUpdated: "2026",
  },
  {
    id: "meteofrance_api",
    name: "API Météo-France — données aviation",
    authority: "Météo-France",
    country: "France",
    type: "portal",
    url: "https://portail-api.meteofrance.fr",
    description: "API officielle Météo-France. Fournit METAR/TAF des aéroports français, données vent, pression, visibilité. Utile pour exercices pratiques.",
    format: ["REST", "JSON"],
    lastUpdated: "2026",
  },
];

/**
 * Syllabus officiel des examens — issu du Règlement (UE) 2019/947 
 * et AMC/GM to Part-UAS Issue 1 (EASA ED Decision 2019/021/R)
 */
export const EXAM_SYLLABUS = {
  bapd_a1a3: {
    name: "BAPD — Open A1/A3",
    regulation: "Annexe to Part-UAS, UAS.OPEN.020",
    questions: 40,
    duration_min: 30,
    pass_score_pct: 75,
    attempts: "Illimité (DGAC/AlphaTango)",
    subjects: [
      {
        code: "AIR",
        name: "Sécurité aérienne",
        topics: [
          "Notion de risque en aviation",
          "Comportement non imprudent",
          "Précautions de sécurité et protection des tiers",
          "Procédures opérationnelles",
          "Évaluation pré-vol",
          "Gestion de la zone d'opération",
        ],
      },
      {
        code: "REG",
        name: "Réglementation aérienne",
        topics: [
          "Règlement (UE) 2019/947 — catégorie Ouverte",
          "Enregistrement opérateur (≥250g)",
          "Numéro d'opérateur et étiquetage",
          "Exigences d'identification à distance",
          "Classes de drones C0-C4",
          "Sous-catégories A1, A2, A3",
          "Restrictions de vol (aéroports, foules, zones)",
        ],
      },
      {
        code: "ASP",
        name: "Espace aérien et airspace",
        topics: [
          "Structure de l'espace aérien",
          "Zones géographiques UAS",
          "Zones interdites (P), réglementées (R), dangereuses (D)",
          "CTR — Contrôle Terminal",
          "NOTAM",
          "Altitude maximale 120m AGL",
          "Outils de consultation (Géoportail, Parrot, etc.)",
        ],
      },
      {
        code: "MET",
        name: "Météorologie",
        topics: [
          "Conditions météo minimales (visibilité 500m)",
          "Influence du vent sur les drones",
          "Pluie, givre, brouillard",
          "Lecture simplifiée d'un bulletin météo",
        ],
      },
      {
        code: "PERF",
        name: "Performance et technique",
        topics: [
          "Types de drones (multirotor, aile fixe, hybride)",
          "Batteries LiPo — sécurité et maintenance",
          "Procédure de perte de signal (failsafe)",
          "GPS et modes de vol",
          "Effets gyroscopiques et aérodynamiques de base",
        ],
      },
      {
        code: "PRIV",
        name: "Vie privée et assurance",
        topics: [
          "RGPD et protection des données personnelles",
          "Filmer des personnes identifiables",
          "Obligation d'assurance RC (≥250g)",
          "Données collectées par le drone",
        ],
      },
    ],
  },

  a2: {
    name: "CATT — Open A2",
    regulation: "UAS.OPEN.030 + AMC/GM",
    questions: 30,
    duration_min: 30,
    pass_score_pct: 75,
    attempts: 3,
    subjects: [
      {
        code: "MET_A2",
        name: "Météorologie appliquée",
        topics: [
          "METAR — lecture et décodage",
          "TAF — prévision aéronautique",
          "Vents — surface, rafales, cisaillement",
          "Turbulence et effets de terrain",
          "Phénomènes dangereux (CB, orage, icing)",
          "Indice de stabilité atmosphérique",
          "Influence de la pression sur la portance",
        ],
      },
      {
        code: "PERF_A2",
        name: "Performance de vol — A2",
        topics: [
          "Vortex Ring State (anneau tourbillonnaire)",
          "Effet de sol",
          "Surcouple et déséquilibre",
          "Autonomie et gestion énergétique",
          "Facteurs limitants (altitude, température, charge)",
          "Low Speed Mode — définition et utilisation",
          "Procédures d'urgence en vol",
        ],
      },
      {
        code: "TEC_A2",
        name: "Technique UAS — A2",
        topics: [
          "Architecture des multirotors",
          "ESC, moteurs brushless",
          "Contrôleurs de vol (FC) et stabilisation",
          "Systèmes de navigation (GPS, GLONASS, Galileo)",
          "Liaison de données (2.4GHz, 5.8GHz)",
          "Failsafe et procédures de perte de signal",
          "Maintenance préventive LiPo",
          "Identification à distance (Remote ID)",
        ],
      },
      {
        code: "REG_A2",
        name: "Réglementation A2",
        topics: [
          "Classe C2 — exigences",
          "Distance minimale 30m / 5m Low Speed",
          "Zone contrôlée au sol",
          "Assurance obligatoire",
          "Obligations de l'opérateur",
          "Déclaration en ligne",
        ],
      },
      {
        code: "HF_A2",
        name: "Facteurs humains",
        topics: [
          "Conscience situationnelle",
          "Gestion de la charge de travail",
          "Biais cognitifs (confirmation, ancrage)",
          "Fatigue et vigilance",
          "Stress et prise de décision",
        ],
      },
    ],
  },

  cats_sts: {
    name: "CATS — Spécifique STS-01/02",
    regulation: "UAS.STS-01/02 + AMC/GM to Part-UAS",
    questions_with_a2: 30,
    questions_without_a2: 40,
    duration_min: 45,
    pass_score_pct: 75,
    attempts: 3,
    validity_years: 5,
    subjects: [
      {
        code: "REG_STS",
        name: "Réglementation STS",
        topics: [
          "Règlement (UE) 2019/947 — catégorie Spécifique",
          "Déclaration opérationnelle vs autorisation",
          "STS-01 : conditions opérationnelles complètes",
          "STS-02 : conditions opérationnelles complètes",
          "PDRA-S01, PDRA-S02",
          "Classe C5 et C6 — exigences techniques",
          "Système de terminaison de vol",
          "Parachute balistique",
          "LUC — Light UAS Operator Certificate",
          "Déclaration en ligne — procédure exacte",
          "Obligations de l'opérateur en catégorie Spécifique",
        ],
      },
      {
        code: "OPS_STS",
        name: "Procédures opérationnelles STS",
        topics: [
          "Manuel d'opérations (OpM) — contenu obligatoire",
          "Zone d'opération et zone tampon (ground risk buffer)",
          "Procédures normales, contingency, urgence",
          "Planification de vol (site survey, risk assessment)",
          "Coordination avec les tiers",
          "Gestion des intervenants (équipiers, observateurs)",
          "Arrêt d'urgence — conditions et procédures",
          "Post-vol — débriefing et rapport d'occurrence",
          "Gestion des incidents et accidents",
        ],
      },
      {
        code: "ASP_STS",
        name: "Espace aérien — STS",
        topics: [
          "Coordination avec l'ATM/ATC",
          "U-Space — principes et services",
          "NOTAM — création et lecture avancée",
          "Zones géographiques UAS — types",
          "Espace aérien contrôlé (CTR, TMA, CTA)",
          "Zones temporaires (TFR, TEMPO)",
          "Procédures d'autorisation en espace contrôlé",
          "Remote ID — identification en temps réel",
        ],
      },
      {
        code: "MET_STS",
        name: "Météorologie — STS",
        topics: [
          "METAR — décodage complet",
          "TAF — interprétation opérationnelle",
          "SIGMET et AIRMET",
          "Vent — surface, altitude, turbulence de sillage",
          "Vortex Ring State en contexte opérationnel",
          "Icing — givre et givrage",
          "Orages et cumulonimbus",
          "Inversion de température",
          "Visibilité et plafond nuageux",
          "Effets orographiques et thermiques",
        ],
      },
      {
        code: "HF_STS",
        name: "Facteurs humains — STS",
        topics: [
          "Biais de confirmation et complacency",
          "Tunnelisation attentionnelle",
          "CRM — Crew Resource Management appliqué UAS",
          "Gestion de la fatigue (FRMS)",
          "Prise de décision sous pression",
          "Communication en équipe",
          "Conscience situationnelle (SA) — modèle Endsley",
          "Stress aigu et chronique",
          "Erreur humaine et gestion",
          "Culture de sécurité",
        ],
      },
      {
        code: "UAS_STS",
        name: "Connaissance UAS — STS",
        topics: [
          "Architecture C5/C6 — exigences spécifiques",
          "Systèmes de terminaison de vol — types et déclenchement",
          "Système parachute balistique",
          "Charge utile et centre de gravité",
          "Maintenance et inspection pré-vol avancée",
          "Interfaces de communication sécurisées",
          "Redondances systèmes",
          "Remote ID — implémentation technique",
          "Systèmes anti-collision",
        ],
      },
      {
        code: "SEC_STS",
        name: "Sécurité et sûreté",
        topics: [
          "Cybersécurité et jamming/spoofing GPS",
          "Sûreté des opérations (security threat assessment)",
          "Protection des données RGPD en opération professionnelle",
          "Risque tiers et mitigation",
          "Assurance professionnelle — couverture minimale",
        ],
      },
      {
        code: "PRIV_STS",
        name: "Vie privée — STS professionnel",
        topics: [
          "RGPD — bases légales pour captation vidéo professionnelle",
          "Traitement des données biométriques",
          "DPO et obligation de registre",
          "Droits des personnes filmées",
          "Cas particuliers : surveillance, cartographie, inspection",
        ],
      },
    ],
  },
};

/**
 * Résumé des différences clés entre STS-01 et STS-02
 * Source : Annexe de 2019/947, UAS.STS-01 et UAS.STS-02
 */
export const STS_COMPARISON = {
  "STS-01": {
    environment: "Zones contrôlées avec accès restreint aux personnes (milieu habité possible)",
    mode: "VLOS uniquement",
    drone_class: "C5",
    max_height: "120m AGL",
    over_people: "Au-dessus de zones contrôlées avec buffer — personnes non impliquées exclues de la zone",
    ground_risk_buffer: "Requis autour de la zone d'opération",
    flight_termination: "Obligatoire",
    parachute: "Obligatoire ou équivalent",
    practical_exam: "Requis (organisme agréé ILT/NAA)",
  },
  "STS-02": {
    environment: "Zones peu peuplées, milieu non habité principalement",
    mode: "VLOS uniquement",
    drone_class: "C6",
    max_height: "120m AGL",
    over_people: "Survol de personnes non impliquées autorisé sous conditions",
    ground_risk_buffer: "Requis",
    flight_termination: "Obligatoire",
    parachute: "Obligatoire",
    practical_exam: "Requis (organisme agréé ILT/NAA)",
  },
};
