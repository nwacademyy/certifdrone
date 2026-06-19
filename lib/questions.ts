export type Question = {
  id: number;
  category: "bapd" | "a2" | "cats";
  theme: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const questions: Question[] = [
  // ── BAPD ──
  {
    id: 1,
    category: "bapd",
    theme: "Réglementation",
    question: "Dans quelle catégorie vole un drone de 199 g sans marquage CE, en vue directe, au-dessus d'une zone non peuplée ?",
    options: ["Catégorie Ouverte A1", "Catégorie Ouverte A3", "Catégorie Spécifique", "Catégorie Certifiée"],
    answer: 1,
    explanation: "Un drone < 250 g sans marquage CE vole en A3 s'il est non identifiable. La sous-catégorie A1 est réservée aux drones marqués C1 ou < 250 g avec marquage."
  },
  {
    id: 2,
    category: "bapd",
    theme: "Réglementation",
    question: "Quelle est l'altitude maximale de vol autorisée en catégorie Ouverte sans autorisation spéciale ?",
    options: ["100 m au-dessus du niveau de la mer", "120 m au-dessus du point le plus élevé à 50 m", "150 m AGL", "120 m AGL"],
    answer: 3,
    explanation: "Le règlement EASA (EU) 2019/947 fixe la limite à 120 m AGL (Above Ground Level) pour la catégorie Ouverte."
  },
  {
    id: 3,
    category: "bapd",
    theme: "Sécurité",
    question: "Avant chaque vol, le télépilote doit :",
    options: ["Vérifier uniquement la charge de la batterie", "Effectuer une inspection pré-vol de l'UAS", "Déposer un plan de vol auprès de la DGAC", "Obtenir une autorisation préfectorale"],
    answer: 1,
    explanation: "L'inspection pré-vol est obligatoire : état mécanique, batterie, logiciel, espace aérien. Elle incombe toujours au télépilote."
  },
  {
    id: 4,
    category: "bapd",
    theme: "Espace aérien",
    question: "Que signifie la zone 'R' sur une carte aéronautique ?",
    options: ["Zone recommandée pour les drones", "Zone réglementée (accès restreint ou interdit)", "Zone de réserve naturelle", "Zone radar militaire"],
    answer: 1,
    explanation: "La lettre R désigne une zone Réglementée où l'accès est soumis à conditions ou interdit. Les drones doivent éviter ces zones sans autorisation."
  },
  {
    id: 5,
    category: "bapd",
    theme: "Météo",
    question: "Quelle visibilité minimale est requise pour voler en catégorie Ouverte ?",
    options: ["100 m", "500 m", "1 km", "3 km"],
    answer: 1,
    explanation: "La réglementation EASA impose une visibilité météorologique d'au moins 500 m pour opérer un drone en catégorie Ouverte."
  },
  {
    id: 6,
    category: "bapd",
    theme: "Réglementation",
    question: "L'enregistrement de l'opérateur drone est obligatoire dès que le drone pèse :",
    options: ["Plus de 500 g", "250 g ou plus", "Plus de 250 g", "100 g ou plus"],
    answer: 1,
    explanation: "Tout opérateur dont le drone pèse 250 g ou plus (ou présente un risque particulier) doit s'enregistrer auprès de l'autorité nationale."
  },
  {
    id: 7,
    category: "bapd",
    theme: "Vie privée",
    question: "Filmer une personne identifiable avec un drone sans son consentement est :",
    options: ["Autorisé si c'est dans un lieu public", "Interdit sauf dérogation CNIL", "Autorisé si la vidéo n'est pas diffusée", "Autorisé pour usage personnel"],
    answer: 1,
    explanation: "Filmer une personne identifiable sans consentement constitue une atteinte à la vie privée et au RGPD, même dans l'espace public."
  },
  {
    id: 8,
    category: "bapd",
    theme: "Sécurité",
    question: "En cas de perte du signal de télécommande, que doit faire un drone conforme EASA ?",
    options: ["Atterrir immédiatement là où il se trouve", "Exécuter la procédure de lien de commande perdu (Return to Home ou hover)", "Poursuivre la mission en autonomie", "Monter à 150 m et attendre"],
    answer: 1,
    explanation: "Selon EASA, tout UAS doit avoir une procédure prédéfinie en cas de perte de lien : Return to Home, hover ou atterrissage contrôlé."
  },

  // ── A2 ──
  {
    id: 9,
    category: "a2",
    theme: "Réglementation A2",
    question: "La sous-catégorie A2 autorise l'approche à quelle distance minimale d'une personne non impliquée ?",
    options: ["5 m avec mode Low Speed", "30 m (ou 5 m en mode Low Speed activé)", "50 m", "15 m"],
    answer: 1,
    explanation: "En A2 : distance minimale de 30 m des personnes. Elle peut être réduite à 5 m si le drone est en mode Low Speed (vitesse ≤ 3 m/s)."
  },
  {
    id: 10,
    category: "a2",
    theme: "Météo",
    question: "Comment le vent influence-t-il principalement la stabilité d'un multirotor ?",
    options: ["Il augmente l'autonomie", "Il crée des turbulences et réduit la précision de maintien de position", "Il améliore la dissipation thermique des moteurs", "Il n'a pas d'impact si le GPS est actif"],
    answer: 1,
    explanation: "Le vent (notamment les rafales et effets de sol) génère des turbulences qui sollicitent les contrôleurs de vol et réduisent la précision, la stabilité et l'autonomie."
  },
  {
    id: 11,
    category: "a2",
    theme: "Performance de vol",
    question: "Quel phénomène décrit une perte brutale de portance lors du passage en descente rapide dans son propre souffle ?",
    options: ["Effet Venturi", "Vortex Ring State (anneau tourbillonnaire)", "Effet de sol", "Surcouple"],
    answer: 1,
    explanation: "Le Vortex Ring State survient quand le drone descend dans son propre sillage tourbillonnaire : la portance chute brutalement. C'est une situation dangereuse à éviter."
  },
  {
    id: 12,
    category: "a2",
    theme: "Technique",
    question: "Qu'est-ce que le 'failsafe' d'une télécommande ?",
    options: ["Un mode de vol manuel d'urgence", "Une procédure automatique déclenchée en cas de perte de signal", "Un fusible électronique protégeant la batterie", "Un mode économie d'énergie"],
    answer: 1,
    explanation: "Le failsafe est la procédure pré-programmée que le drone exécute automatiquement si la liaison radio est perdue (RTH, hover, atterrissage)."
  },
  {
    id: 13,
    category: "a2",
    theme: "Espace aérien",
    question: "Quelle application officielle française permet de vérifier les restrictions de vol drone ?",
    options: ["DroneView", "Géoportail IGN", "Géofence Pro", "AirConso / Géoportail UAV"],
    answer: 3,
    explanation: "AirConso (anciennement carte des restrictions DGAC sur Géoportail) permet de vérifier les zones interdites, réglementées et les CTR en France."
  },
  {
    id: 14,
    category: "a2",
    theme: "Sécurité",
    question: "La LiPo (Lithium Polymère) est gonflée/boursouflée. Que faire ?",
    options: ["La recharger lentement à faible ampérage", "La percer pour libérer les gaz", "Ne plus l'utiliser et la traiter comme déchet dangereux", "La congeler pour la stabiliser"],
    answer: 2,
    explanation: "Une LiPo gonflée est endommagée et présente un risque d'incendie. Elle doit être mise hors service immédiatement et déposée en déchetterie (collecte spéciale batteries)."
  },

  // ── CATS / STS ──
  {
    id: 15,
    category: "cats",
    theme: "Réglementation STS",
    question: "Que signifie l'acronyme STS dans la réglementation EASA ?",
    options: ["Standard Training System", "Safe Transport Scenario", "Standard Scenario", "Specific Training Standard"],
    answer: 2,
    explanation: "STS = Standard Scenario (Scénario Standard Européen). C'est un cadre opérationnel prédéfini de la catégorie Spécifique. Les deux scénarios sont STS-01 et STS-02."
  },
  {
    id: 16,
    category: "cats",
    theme: "Réglementation STS",
    question: "Quelle est la différence principale entre STS-01 et STS-02 ?",
    options: [
      "STS-01 est pour les drones > 25 kg, STS-02 pour les drones < 25 kg",
      "STS-01 autorise le vol en milieu peuplé sous conditions (VLOS), STS-02 autorise le vol en milieu peu peuplé avec possible survol de personnes",
      "STS-01 est BVLOS, STS-02 est VLOS",
      "Il n'y a pas de différence, ce sont des synonymes"
    ],
    answer: 1,
    explanation: "STS-01 : vol VLOS au-dessus d'une zone contrôlée au sol, à proximité de personnes, avec drone C5. STS-02 : vol VLOS en milieu peu peuplé, au-dessus de personnes non impliquées, avec drone C6."
  },
  {
    id: 17,
    category: "cats",
    theme: "Réglementation STS",
    question: "Quel document l'opérateur doit-il soumettre à l'autorité nationale avant d'opérer sous STS ?",
    options: ["Une demande d'autorisation d'opération (PDRA)", "Une déclaration opérationnelle", "Un plan de vol NOTAM", "Un certificat de navigabilité"],
    answer: 1,
    explanation: "Pour opérer sous STS, l'opérateur soumet une déclaration opérationnelle à l'autorité compétente (DGAC en France). Pas de demande d'autorisation : c'est une déclaration."
  },
  {
    id: 18,
    category: "cats",
    theme: "Sécurité opérationnelle",
    question: "Qu'est-ce qu'un 'ground risk buffer' dans le contexte STS-01 ?",
    options: [
      "Une zone tampon au sol autour de la zone d'opération, maintenue libre de personnes non impliquées",
      "Le poids maximum du drone au sol",
      "Une bande de fréquence radio de secours",
      "Un filet de protection placé sous le drone"
    ],
    answer: 0,
    explanation: "Le ground risk buffer (zone tampon au sol) est la zone entourant la zone d'opération que l'opérateur doit maintenir libre de personnes non impliquées pour mitiger le risque au sol."
  },
  {
    id: 19,
    category: "cats",
    theme: "Facteurs humains",
    question: "Lequel des facteurs suivants est une cause fréquente d'accident lié aux facteurs humains en opération drone ?",
    options: ["Trop de charge de batterie", "Biais de confirmation et complacency (complaisance)", "Signal GPS trop fort", "Météo trop stable"],
    answer: 1,
    explanation: "Le biais de confirmation (voir ce qu'on veut voir) et la complacency (excès de confiance lié à la routine) sont des facteurs humains majeurs dans les accidents aériens et drone."
  },
  {
    id: 20,
    category: "cats",
    theme: "Réglementation STS",
    question: "Quelle est la hauteur maximale autorisée en STS-01 ?",
    options: ["120 m AGL", "150 m AGL", "200 m AGL", "300 m AGL"],
    answer: 0,
    explanation: "Le scénario STS-01 limite le vol à 120 m AGL (au-dessus du sol), comme pour la catégorie Ouverte. STS-02 est également limité à 120 m AGL."
  },
  {
    id: 21,
    category: "cats",
    theme: "Sécurité opérationnelle",
    question: "Que doit contenir le manuel d'opérations (OpM) d'un opérateur UAS opérant en STS ?",
    options: [
      "Uniquement les coordonnées de vol",
      "Les procédures d'urgence, les limites opérationnelles, la liste des équipements et les procédures de maintenance",
      "Le numéro de série du drone uniquement",
      "Une copie du CATS du télépilote"
    ],
    answer: 1,
    explanation: "Le manuel d'opérations doit couvrir : description de l'UAS, procédures normales et d'urgence, limites opérationnelles, maintenance, formation des équipages."
  },
  {
    id: 22,
    category: "cats",
    theme: "Météo",
    question: "Comment un METAR se distingue-t-il d'un TAF ?",
    options: [
      "Le METAR est une prévision, le TAF est un relevé observé",
      "Le METAR est un relevé météo observé, le TAF est une prévision aéronautique",
      "Le METAR concerne la mer, le TAF concerne la terre",
      "Ce sont des synonymes régionaux"
    ],
    answer: 1,
    explanation: "METAR = MEssage météorologique d'Aviation Régulier (observation). TAF = Terminal Aerodrome Forecast (prévision sur 24-30h). Le drone pilot doit consulter les deux avant le vol."
  },
  {
    id: 23,
    category: "cats",
    theme: "Réglementation STS",
    question: "Quel est le rôle du responsable à distance pour STS-01 dans une opération avec plusieurs participants ?",
    options: [
      "Piloter le drone manuellement à tout moment",
      "Maintenir la conscience situationnelle globale, coordonner l'équipe et décider de l'arrêt si nécessaire",
      "Gérer uniquement la communication radio",
      "Surveiller la batterie du drone"
    ],
    answer: 1,
    explanation: "Le télépilote responsable à distance (remote pilot in command) maintient la conscience situationnelle, coordonne les observateurs et a autorité pour arrêter l'opération."
  },
  {
    id: 24,
    category: "cats",
    theme: "Technique",
    question: "Un drone C5 pour STS-01 doit obligatoirement disposer de :",
    options: [
      "Un parachute homologué et un système de terminaison de vol",
      "Un transpondeur ADS-B et une caméra thermique",
      "Un moteur thermique et un système anti-collision",
      "Un certificat de navigabilité individuel"
    ],
    answer: 0,
    explanation: "Le drone de classe C5 pour STS-01 doit avoir un système de terminaison de vol (arrêt d'urgence) et un parachute ou équivalent permettant de limiter l'énergie cinétique à l'impact."
  },
  {
    id: 25,
    category: "cats",
    theme: "Sécurité opérationnelle",
    question: "Qu'est-ce qu'un 'contingency procedure' dans le contexte opérationnel STS ?",
    options: [
      "Un plan de maintenance préventive",
      "Une procédure déclenchée quand l'opération sort des limites normales mais avant l'urgence",
      "Le plan de vol nominal",
      "La procédure d'enregistrement de l'opérateur"
    ],
    answer: 1,
    explanation: "Les contingency procedures sont activées quand la situation dépasse les conditions normales mais avant la phase d'urgence. Ex : perte partielle de liaison, météo dégradée, intrusion dans la zone."
  },
];

export const themes = {
  bapd: ["Réglementation", "Sécurité", "Espace aérien", "Météo", "Vie privée"],
  a2: ["Réglementation A2", "Météo", "Performance de vol", "Technique", "Espace aérien", "Sécurité"],
  cats: ["Réglementation STS", "Sécurité opérationnelle", "Facteurs humains", "Technique", "Météo"],
};
