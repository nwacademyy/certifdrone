/**
 * BANQUE DE QUESTIONS — CertifDrone.fr
 * 
 * Toutes les questions sont basées sur :
 * - Règlement (UE) 2019/947 (dernière version 2024)
 * - AMC & GM to Part-UAS Issue 1, Amendment 2 (EASA)
 * - Easy Access Rules for UAS — Révision Juillet 2024
 * 
 * Chaque question cite sa référence réglementaire exacte.
 */

export type Question = {
  id: number;
  category: "bapd" | "a2" | "cats";
  theme: string;
  difficulty: "facile" | "moyen" | "difficile";
  source: string;           // Référence réglementaire exacte
  question: string;
  options: string[];
  answer: number;           // Index 0-based de la bonne réponse
  explanation: string;
};

export const questions: Question[] = [

  // ════════════════════════════════════════
  // BAPD — OPEN A1/A3
  // ════════════════════════════════════════

  {
    id: 1,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, Art. 10 + 2019/945 Art. 3",
    question: "À partir de quelle masse un opérateur de drone doit-il obligatoirement s'enregistrer ?",
    options: ["À partir de 100 g", "À partir de 250 g (ou si équipé d'un capteur d'images)", "À partir de 500 g", "À partir de 1 kg"],
    answer: 1,
    explanation: "Selon l'article 10 du règlement (UE) 2019/947 et l'article 14 : l'enregistrement est obligatoire pour tout opérateur exploitant un drone ≥ 250 g en catégorie Ouverte, ou tout drone équipé d'un capteur capable de capturer des données personnelles, quelle que soit sa masse.",
  },
  {
    id: 2,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.060(1)(a)",
    question: "Quelle est l'altitude maximale de vol autorisée en catégorie Ouverte sans autorisation spéciale ?",
    options: ["100 m AGL", "120 m AGL", "150 m AGL", "200 m AGL"],
    answer: 1,
    explanation: "L'article UAS.OPEN.060(1)(a) fixe la limite à 120 m au-dessus du point le plus élevé au sol dans un rayon horizontal de 50 m. Une exception permet de dépasser jusqu'à 15 m supplémentaires à 50 m d'une structure de plus de 105 m.",
  },
  {
    id: 3,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, UAS.OPEN.010",
    question: "Un drone de 300 g sans marquage de classe CE peut-il voler en catégorie Ouverte ?",
    options: [
      "Oui, en sous-catégorie A1 uniquement",
      "Oui, en sous-catégorie A3 uniquement, à l'écart des personnes",
      "Non, tout drone ≥ 250 g doit avoir un marquage CE",
      "Oui, partout sauf au-dessus des rassemblements"
    ],
    answer: 1,
    explanation: "Un drone sans marquage de classe CE peut voler en catégorie Ouverte sous-catégorie A3 ('legacy'), à condition de respecter les distances réglementaires (>150 m des zones résidentielles, commerciales et industrielles). La sous-catégorie A1 est réservée aux drones < 250 g ou marqués C1.",
  },
  {
    id: 4,
    category: "bapd",
    theme: "Espace aérien",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.060(3)",
    question: "Dans quelle zone est-il interdit de voler avec un drone en catégorie Ouverte sans autorisation spécifique ?",
    options: [
      "À plus de 1 km d'un aéroport",
      "Dans l'espace aérien contrôlé et dans les zones géographiques UAS interdites",
      "Au-dessus de 50 m si vent > 20 km/h",
      "À moins de 300 m d'un bâtiment public"
    ],
    answer: 1,
    explanation: "UAS.OPEN.060(3) interdit d'opérer dans l'espace aérien contrôlé sans autorisation ATC préalable, et dans toute zone géographique UAS déclarée interdite par l'autorité nationale compétente (en France : zones P, D, R, CTR, etc.).",
  },
  {
    id: 5,
    category: "bapd",
    theme: "Espace aérien",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, Art. 15 + Règl. délégué (UE) 2021/665",
    question: "Qu'est-ce qu'une zone géographique UAS de type 'zone d'exclusion' ?",
    options: [
      "Une zone où le vol est autorisé mais soumis à conditions",
      "Une zone où le vol de drones est totalement interdit",
      "Une zone dédiée uniquement aux drones de loisir",
      "Une zone où les drones doivent voler en dessous de 50 m"
    ],
    answer: 1,
    explanation: "Selon l'article 15 de 2019/947, les États membres peuvent établir des zones géographiques UAS : zones d'exclusion (vol interdit), zones géographiques à conditions (vol soumis à conditions), et zones de facilitation (vol simplifié). En France : zones P (interdites), R (réglementées), D (dangereuses).",
  },
  {
    id: 6,
    category: "bapd",
    theme: "Sécurité",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.060(1)(d)",
    question: "En catégorie Ouverte, le télépilote doit maintenir le drone :",
    options: [
      "Dans son champ de vision direct, sans aide optique",
      "En ligne de vue directe ou via un observateur",
      "À moins de 200 m de distance horizontale",
      "En permanence en dessous de lui"
    ],
    answer: 0,
    explanation: "UAS.OPEN.060(1)(d) impose le VLOS (Visual Line of Sight) : le télépilote doit maintenir le contact visuel direct avec le drone, sans aide optique (jumelles interdites sauf pour l'observation). Un observateur UAS peut assister mais le pilote reste responsable.",
  },
  {
    id: 7,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, Art. 9 + 2019/945",
    question: "Qu'est-ce que le Remote ID (identification à distance) ?",
    options: [
      "Un système de télécommande à longue portée",
      "Un système permettant d'identifier le drone et son opérateur en temps réel par diffusion de données",
      "Un badge électronique que le télépilote doit porter",
      "Un système de navigation GPS amélioré"
    ],
    answer: 1,
    explanation: "Le Remote ID est un système embarqué qui diffuse en temps réel l'identifiant de l'opérateur, la position du drone, sa vitesse, son altitude, et la position du pilote. Obligatoire sur les drones de classe C1 et supérieure selon le règlement (UE) 2019/945.",
  },
  {
    id: 8,
    category: "bapd",
    theme: "Vie privée",
    difficulty: "facile",
    source: "RGPD (UE) 2016/679, Art. 6 + 9",
    question: "Filmer une manifestation sportive depuis un drone avec des visages identifiables est :",
    options: [
      "Autorisé si le drone est à plus de 50 m",
      "Autorisé pour usage personnel non diffusé",
      "Soumis au RGPD — nécessite une base légale (consentement, contrat ou intérêt légitime)",
      "Totalement interdit en toutes circonstances"
    ],
    answer: 2,
    explanation: "Toute captation de données permettant l'identification de personnes physiques est soumise au RGPD. L'opérateur doit disposer d'une base légale (consentement explicite, exécution d'un contrat, ou intérêt légitime). Sans base légale, c'est une violation du RGPD.",
  },
  {
    id: 9,
    category: "bapd",
    theme: "Sécurité",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.060(2)(a)",
    question: "Quelle est la procédure obligatoire si une urgence aérienne survient dans la zone de vol du drone ?",
    options: [
      "Monter à 150 m pour libérer l'espace bas",
      "Atterrir immédiatement et libérer l'espace aérien",
      "Continuer le vol et signaler l'urgence à la tour de contrôle",
      "Se rapprocher pour filmer l'intervention"
    ],
    answer: 1,
    explanation: "UAS.OPEN.060(2)(a) : le télépilote doit immédiatement faire atterrir le drone ou le mettre à l'écart si une urgence aérienne se produit. Les aéronefs d'urgence (SAMU, pompiers, police) ont toujours la priorité absolue.",
  },
  {
    id: 10,
    category: "bapd",
    theme: "Météo",
    difficulty: "facile",
    source: "AMC1 UAS.OPEN.060(1)(b)",
    question: "Quelle visibilité météorologique minimale est requise pour voler en catégorie Ouverte ?",
    options: ["100 m", "300 m", "500 m", "1 000 m"],
    answer: 2,
    explanation: "L'AMC1 UAS.OPEN.060(1)(b) fixe la visibilité météorologique minimale à 500 m pour maintenir le VLOS et assurer la sécurité de l'opération en catégorie Ouverte.",
  },
  {
    id: 11,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, UAS.OPEN.020(5)",
    question: "Un télépilote en sous-catégorie A1 doit avoir quel âge minimum ?",
    options: ["14 ans", "16 ans", "18 ans", "12 ans avec supervision"],
    answer: 1,
    explanation: "UAS.OPEN.020(5) : l'âge minimum pour voler en A1 (avec drone C1) est 16 ans. Pour les drones < 250 g (y compris jouets), il n'y a pas d'âge légal minimum au niveau EASA, mais les États peuvent fixer des limites nationales.",
  },
  {
    id: 12,
    category: "bapd",
    theme: "Réglementation",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.020 + Art. 14",
    question: "Quel document le télépilote doit-il être en mesure de présenter pendant un vol en catégorie Ouverte ?",
    options: [
      "Son passeport et le certificat de navigabilité du drone",
      "La preuve d'enregistrement de l'opérateur et l'attestation de réussite à l'examen théorique applicable",
      "L'autorisation de la mairie et la facture d'achat du drone",
      "Le manuel du constructeur et l'assurance RC"
    ],
    answer: 1,
    explanation: "Selon l'article 14 de 2019/947, pendant le vol ou suite à une demande d'autorité, le télépilote doit pouvoir présenter : la preuve d'enregistrement de l'opérateur (numéro), et selon la sous-catégorie (A2, STS), le certificat de compétence. En A1/A3, l'attestation de réussite au quiz en ligne suffit.",
  },
  {
    id: 13,
    category: "bapd",
    theme: "Sécurité",
    difficulty: "moyen",
    source: "AMC1 UAS.OPEN.060 — Inspection pré-vol",
    question: "Parmi les éléments suivants, lequel NE fait PAS partie d'une inspection pré-vol standard ?",
    options: [
      "Vérification de la charge des batteries",
      "Vérification des hélices (fissures, déformations)",
      "Vérification du plan de vol déposé auprès de l'ATC",
      "Vérification du calibrage de la boussole si requis"
    ],
    answer: 2,
    explanation: "En catégorie Ouverte, aucun plan de vol n'est requis auprès de l'ATC (sauf espace aérien contrôlé). L'inspection pré-vol couvre : état mécanique, batteries, firmware, NOTAM, météo, espace aérien. Le dépôt de plan de vol est requis seulement en espace contrôlé ou pour certaines opérations spécifiques.",
  },
  {
    id: 14,
    category: "bapd",
    theme: "Espace aérien",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, Art. 15 + décret national",
    question: "La lettre 'P' dans une zone aéronautique française signifie :",
    options: ["Prioritaire — les drones y ont la priorité", "Prohibée — vol totalement interdit", "Provisoire — restriction temporaire", "Permettant — vol autorisé sans restriction"],
    answer: 1,
    explanation: "Une zone P (Prohibited) est une zone de vol totalement interdite à tout aéronef sauf autorisation exceptionnelle. En France, les zones P couvrent notamment le survol des centrales nucléaires, des palais nationaux, et des prisons. Pour les drones, l'interdiction est absolue.",
  },
  {
    id: 15,
    category: "bapd",
    theme: "Assurance",
    difficulty: "facile",
    source: "Règlement (UE) 785/2004 + 2019/947 Art. 10",
    question: "L'assurance responsabilité civile est-elle obligatoire pour les drones en catégorie Ouverte ?",
    options: [
      "Non, jamais obligatoire pour les drones de loisir",
      "Oui, obligatoire pour tous les drones ≥ 250 g selon le règlement UE 785/2004",
      "Uniquement pour les vols au-dessus de zones habitées",
      "Uniquement pour les drones utilisés à titre professionnel"
    ],
    answer: 1,
    explanation: "Le règlement (UE) 785/2004 impose une assurance RC pour tous les aéronefs, y compris les drones. En France, l'ordonnance n°2021-1717 précise que tout drone ≥ 800 g doit être assuré. Certains contrats habitation incluent une garantie RC modèles réduits — vérifier les conditions.",
  },

  // ════════════════════════════════════════
  // CATT — OPEN A2
  // ════════════════════════════════════════

  {
    id: 16,
    category: "a2",
    theme: "Réglementation A2",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.030(2)(b)",
    question: "En sous-catégorie A2, quelle est la distance minimale par défaut à maintenir par rapport aux personnes non impliquées ?",
    options: ["5 m", "15 m", "30 m", "50 m"],
    answer: 2,
    explanation: "UAS.OPEN.030(2)(b) : la distance minimale est de 30 m des personnes non impliquées. Elle peut être réduite à 5 m si le drone est équipé d'un mode Low Speed (vitesse horizontale ≤ 3 m/s) ET que ce mode est activé.",
  },
  {
    id: 17,
    category: "a2",
    theme: "Réglementation A2",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, UAS.OPEN.030 + 2019/945 Art. 4",
    question: "Un drone de classe C2 doit obligatoirement être équipé de :",
    options: [
      "Un transpondeur ADS-B et une caméra thermique",
      "Un Remote ID direct, un mode Low Speed et un mode follow-me",
      "Un Remote ID et des feux de position",
      "Un parachute balistique et un système de terminaison de vol"
    ],
    answer: 1,
    explanation: "Selon le règlement (UE) 2019/945, un drone C2 doit avoir : Remote ID direct (diffusion en temps réel), mode Low Speed (limitation à 3 m/s horizontal), et mode follow-me (si applicable). Ces équipements sont vérifiés lors de la certification de classe.",
  },
  {
    id: 18,
    category: "a2",
    theme: "Météo",
    difficulty: "moyen",
    source: "AMC/GM METAR format OACI Annexe 3",
    question: "Dans un METAR, la mention 'METAR LFBD 191400Z 27015G25KT 9999 FEW020 15/09 Q1013 NOSIG' — que signifie 'G25KT' ?",
    options: [
      "Vitesse du vent de 25 nœuds",
      "Rafales atteignant 25 nœuds",
      "Vent en provenance de 250° à 25 nœuds",
      "Visibilité de 25 km"
    ],
    answer: 1,
    explanation: "Dans le codage METAR OACI (Annexe 3 ICAO), 'G' signifie Gust (rafale). '27015G25KT' se lit : vent du 270° (ouest), 15 nœuds en moyenne, avec rafales atteignant 25 nœuds. Les rafales sont critiques pour l'évaluation de la stabilité du drone.",
  },
  {
    id: 19,
    category: "a2",
    theme: "Météo",
    difficulty: "moyen",
    source: "AMC/GM + documentation OACI Annexe 3",
    question: "Un TAF valide de 24 heures a été émis à 06h00 UTC. Il est actuellement 05h50 UTC le lendemain. Ce TAF est-il encore valide ?",
    options: [
      "Oui, il est toujours valide",
      "Non, il a expiré à 06h00 UTC le jour précédent",
      "Non, un TAF 24h expire à minuit UTC",
      "Oui, mais seulement pour les 10 prochaines minutes"
    ],
    answer: 3,
    explanation: "Un TAF de 24 heures émis à 06h00 UTC couvre la période jusqu'à 06h00 UTC le lendemain. À 05h50 UTC le lendemain, il est toujours techniquement valide pour encore 10 minutes. Cependant, un TAF aussi proche de son expiration doit être complété par un METAR récent.",
  },
  {
    id: 20,
    category: "a2",
    theme: "Performance de vol",
    difficulty: "difficile",
    source: "AMC1 UAS.OPEN.030 — Facteurs de performance",
    question: "Le phénomène de 'Vortex Ring State' (VRS) survient principalement lors de :",
    options: [
      "Une descente rapide dans l'axe du souffle des rotors, à faible vitesse horizontale",
      "Un vol par vent de travers fort (>15 m/s)",
      "Une montée rapide en mode sport",
      "Une rotation excessive autour de l'axe de lacet"
    ],
    answer: 0,
    explanation: "Le VRS (anneau tourbillonnaire) se produit quand le drone descend à vitesse verticale élevée (>2 m/s) et faible vitesse horizontale, dans son propre souffle. Les rotors rentrent dans leur propre vortex, la portance chute brutalement. Condition dangereuse : augmenter la vitesse horizontale pour en sortir.",
  },
  {
    id: 21,
    category: "a2",
    theme: "Performance de vol",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Principes aérodynamiques",
    question: "L'effet de sol (ground effect) se manifeste à quelle hauteur approximativement ?",
    options: [
      "À toutes les altitudes",
      "Principalement sous une hauteur égale au diamètre du rotor",
      "Uniquement au moment du décollage",
      "Uniquement sur sol dur (béton, asphalte)"
    ],
    answer: 1,
    explanation: "L'effet de sol est sensible quand le drone vole à une hauteur inférieure à environ la moitié à un diamètre de rotor. Le sol perturbe le flux d'air sous les rotors, créant une portance accrue. Cet effet peut masquer une batterie faible au décollage.",
  },
  {
    id: 22,
    category: "a2",
    theme: "Technique",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Systèmes UAS",
    question: "Un ESC (Electronic Speed Controller) est chargé de :",
    options: [
      "Contrôler le GPS et la navigation autonome",
      "Réguler la vitesse de rotation de chaque moteur brushless selon les ordres du contrôleur de vol",
      "Gérer la charge et la décharge de la batterie LiPo",
      "Calculer l'altitude barométrique"
    ],
    answer: 1,
    explanation: "L'ESC reçoit les signaux PWM (ou DSHOT numérique) du contrôleur de vol et régule le courant alimentant chaque moteur brushless pour obtenir la vitesse de rotation exacte. Un ESC défaillant peut provoquer la perte du drone.",
  },
  {
    id: 23,
    category: "a2",
    theme: "Technique",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS + Safety data",
    question: "Une batterie LiPo gonflée/boursouflée doit être :",
    options: [
      "Rechargée lentement avec un chargeur de stockage",
      "Mise immédiatement hors service et traitée comme déchet dangereux",
      "Percée délicatement pour libérer la pression",
      "Utilisée uniquement pour des vols courts"
    ],
    answer: 1,
    explanation: "Une LiPo gonflée présente un risque d'emballement thermique (thermal runaway) pouvant causer un incendie violent et difficile à éteindre. Elle doit être retirée du service immédiatement, déchargée à 0V si possible, et déposée en déchetterie spécialisée (collecte batteries). Ne jamais la percer.",
  },
  {
    id: 24,
    category: "a2",
    theme: "Facteurs humains",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Human Performance Limitations",
    question: "La 'tunnelisation attentionnelle' en opération drone décrit :",
    options: [
      "Un problème de transmission vidéo en zone urbaine",
      "Le phénomène où le pilote se concentre excessivement sur un élément au détriment de la conscience globale",
      "Une panne du système de navigation inertielle",
      "Le blindage electromagnetic des télécommandes"
    ],
    answer: 1,
    explanation: "La tunnelisation (ou fixation) est un facteur humain critique : le pilote se focalise sur un élément (par ex. la caméra) et perd la conscience globale de la situation (autres aéronefs, batterie, espace aérien). C'est une cause fréquente d'accidents. Corriger : scans réguliers de la situation.",
  },
  {
    id: 25,
    category: "a2",
    theme: "Réglementation A2",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, UAS.OPEN.030(2)(f)",
    question: "Un drone C2 peut-il voler au-dessus d'un rassemblement de personnes ?",
    options: [
      "Oui, en activant le mode Low Speed",
      "Non, jamais — les rassemblements sont interdits en A2",
      "Oui, avec une autorisation préfectorale",
      "Oui, à plus de 50 m d'altitude"
    ],
    answer: 1,
    explanation: "UAS.OPEN.030(2)(f) : voler au-dessus de rassemblements de personnes est interdit en sous-catégorie A2, quelle que soit la configuration. Pour voler au-dessus de foules, il faut une autorisation en catégorie Spécifique (PDRA ou STS avec classe C5/C6 appropriée).",
  },
  {
    id: 26,
    category: "a2",
    theme: "Espace aérien",
    difficulty: "moyen",
    source: "Décision EASA 2019/021/R + Géoportail DGAC",
    question: "Comment un télépilote français doit-il vérifier les restrictions d'espace aérien avant un vol ?",
    options: [
      "En appelant la préfecture",
      "En consultant le Géoportail (carte des restrictions UAS) ou l'application officielle (ex: AirConso)",
      "En consultant uniquement les NOTAM militaires",
      "En vérifiant uniquement l'application du constructeur du drone (ex: DJI Fly)"
    ],
    answer: 1,
    explanation: "Le Géoportail (carte réglementaire IGN/DGAC) est la référence officielle française pour les restrictions permanentes. Les NOTAM (via SIA/OACI) complètent pour les restrictions temporaires. Les applications constructeurs (DJI, etc.) ne sont pas des références officielles et peuvent être incomplètes.",
  },
  {
    id: 27,
    category: "a2",
    theme: "Facteurs humains",
    difficulty: "facile",
    source: "AMC/GM to Part-UAS — Human factors",
    question: "La 'complacency' (complaisance) en sécurité aérienne décrit :",
    options: [
      "Un comportement conforme aux procédures",
      "Un sentiment de fausse sécurité lié à la routine, diminuant la vigilance",
      "Une technique de vol avancée pour experts",
      "La satisfaction après un vol réussi"
    ],
    answer: 1,
    explanation: "La complaisance est l'un des 'Dirty Dozen' des facteurs humains en aviation. La routine génère un sentiment de fausse sécurité : le pilote expérimenté suppose que 'ça va se passer comme d'habitude' et réduit sa vigilance. C'est une cause majeure d'incidents et d'accidents.",
  },

  // ════════════════════════════════════════
  // CATS — SPÉCIFIQUE STS
  // ════════════════════════════════════════

  {
    id: 28,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "facile",
    source: "Règlement (UE) 2019/947, Annexe — UAS.STS-01 et UAS.STS-02",
    question: "Quel document l'opérateur doit-il soumettre à l'autorité nationale AVANT d'opérer sous STS-01 ou STS-02 ?",
    options: [
      "Une demande d'autorisation d'opération (lettre au préfet)",
      "Une déclaration opérationnelle",
      "Un plan de vol NOTAM",
      "Un certificat de navigabilité UAS"
    ],
    answer: 1,
    explanation: "La catégorie Spécifique STS fonctionne sur le principe de la déclaration opérationnelle (non de l'autorisation). L'opérateur déclare qu'il respecte toutes les conditions du STS via AlphaTango (France) ou l'équivalent national. La déclaration doit précéder toute opération.",
  },
  {
    id: 29,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, UAS.STS-01.020",
    question: "Quelle est la hauteur maximale autorisée en STS-01 ?",
    options: ["80 m AGL", "100 m AGL", "120 m AGL", "150 m AGL"],
    answer: 2,
    explanation: "UAS.STS-01.020(8) : la hauteur maximale est de 120 m AGL, identique à la catégorie Ouverte. Cette limitation est absolue en STS-01 et STS-02, sauf dans les situations où l'opérateur a obtenu une autorisation spécifique pour voler plus haut (hors standard STS).",
  },
  {
    id: 30,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, UAS.STS-01.020 + 2019/945 Art. 5",
    question: "Quelle est la différence principale entre STS-01 et STS-02 concernant les personnes non impliquées ?",
    options: [
      "STS-01 autorise le survol de personnes, STS-02 l'interdit",
      "STS-01 requiert une zone contrôlée au sol (personnes exclues de la zone d'opération), STS-02 permet le survol de personnes sous conditions avec un drone C6",
      "STS-01 est pour drones > 25 kg, STS-02 pour drones < 25 kg",
      "Il n'y a pas de différence — les deux sont identiques pour les personnes"
    ],
    answer: 1,
    explanation: "STS-01 : drone C5, zone d'opération contrôlée où les personnes non impliquées sont exclues. STS-02 : drone C6, opération en zone peu peuplée avec possibilité de survol de personnes non impliquées (sous conditions de la MTOM et du parachute). C'est la distinction fondamentale entre les deux scénarios.",
  },
  {
    id: 31,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/945, Art. 5 — Classe C5",
    question: "Un drone de classe C5 pour STS-01 doit obligatoirement disposer de :",
    options: [
      "Un transpondeur ADSB-B et une caméra de recul",
      "Un système de terminaison de vol ET un parachute (ou équivalent ramenant l'énergie cinétique à impact ≤ 80 J)",
      "Un moteur de secours redondant",
      "Un système anti-collision actif"
    ],
    answer: 1,
    explanation: "La classe C5 (2019/945, Art. 5) impose : Remote ID direct, système de terminaison de vol fiable (arrêt commandé), et un système ramenant l'énergie cinétique à moins de 80 J en cas d'impact (parachute balistique ou équivalent). Ces équipements sont obligatoires et vérifiés.",
  },
  {
    id: 32,
    category: "cats",
    theme: "Sécurité opérationnelle",
    difficulty: "moyen",
    source: "AMC1 UAS.STS-01.020 + GM to Part-UAS",
    question: "Qu'est-ce que le 'ground risk buffer' (zone tampon au sol) en STS-01 ?",
    options: [
      "Une zone de sécurité délimitée autour du site de décollage uniquement",
      "Une zone entourant la zone d'opération, maintenue libre de personnes non impliquées pour mitiger le risque au sol",
      "Un filet de protection placé sous le drone",
      "La distance minimale entre deux drones opérant simultanément"
    ],
    answer: 1,
    explanation: "Le ground risk buffer est une zone tampon calculée selon les caractéristiques du drone (MTOM, hauteur max, vitesse) et les conditions de vol. Elle entoure la zone d'opération et doit être maintenue exempte de personnes non impliquées. Sa taille est définie dans le manuel d'opérations.",
  },
  {
    id: 33,
    category: "cats",
    theme: "Procédures opérationnelles",
    difficulty: "difficile",
    source: "AMC1 UAS.STS-01.020 — Operations Manual",
    question: "Quelles sont les trois niveaux de procédures qu'un opérateur STS doit avoir définies dans son manuel d'opérations ?",
    options: [
      "Décollage, vol et atterrissage",
      "Procédures normales, procédures de contingence et procédures d'urgence",
      "Inspection, vol et maintenance",
      "Préparation, exécution et débriefing"
    ],
    answer: 1,
    explanation: "Le manuel d'opérations STS doit obligatoirement décrire : (1) procédures normales (opération nominale), (2) procédures de contingence (situation dégradée mais contrôlée, ex: perte partielle de liaison), (3) procédures d'urgence (situation critique, ex: perte totale du drone, blessé). Chaque niveau a des déclencheurs et des actions précises.",
  },
  {
    id: 34,
    category: "cats",
    theme: "Sécurité opérationnelle",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Contingency procedures",
    question: "Une 'procédure de contingence' est déclenchée quand :",
    options: [
      "L'opération se déroule parfaitement",
      "La situation dépasse les conditions normales mais avant l'urgence déclarée",
      "Le drone est perdu (crash confirmé)",
      "La batterie est à 100%"
    ],
    answer: 1,
    explanation: "Les contingency procedures sont le niveau intermédiaire : la situation sort des limites normales (ex: météo se dégradant, intrusion dans la zone, liaison dégradée) mais n'est pas encore une urgence. Elles permettent de ramener la situation au niveau normal ou de décider l'arrêt sécurisé de l'opération.",
  },
  {
    id: 35,
    category: "cats",
    theme: "Espace aérien STS",
    difficulty: "moyen",
    source: "Règlement (UE) 2021/664 — U-Space",
    question: "Qu'est-ce que l'U-Space dans le contexte des opérations drone ?",
    options: [
      "Un espace réservé aux vols sans équipage au-dessus de 150 m",
      "Un ensemble de services numériques permettant l'intégration des drones dans l'espace aérien non ségrégué de manière sûre et ordonnée",
      "Un réseau de recharge de batteries pour drones en vol",
      "Le système de positionnement GPS européen (Galileo)"
    ],
    answer: 1,
    explanation: "L'U-Space (règlement UE 2021/664) est le cadre réglementaire et technique européen pour l'intégration des UAS dans l'espace aérien. Il regroupe des services : enregistrement, e-identification, geo-awareness, autorisation de vol UAS, et détection/évitement des conflits avec l'aviation conventionnelle.",
  },
  {
    id: 36,
    category: "cats",
    theme: "Facteurs humains",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — CRM UAS",
    question: "Le CRM (Crew Resource Management) appliqué aux opérations drone multi-personnes vise principalement à :",
    options: [
      "Optimiser la consommation électrique du drone",
      "Améliorer la communication, la coordination et la prise de décision au sein de l'équipe d'opération",
      "Gérer la relation avec les clients et sous-traitants",
      "Planifier les maintenances préventives de l'équipement"
    ],
    answer: 1,
    explanation: "Le CRM UAS s'inspire du CRM aviation civile (cockpit/crew). Il couvre : communication explicite des informations critiques, répartition claire des rôles (RPIC, observateurs), gestion des désaccords, prise de décision collective, et gestion de la charge de travail. Crucial en opérations STS avec équipe.",
  },
  {
    id: 37,
    category: "cats",
    theme: "Météo STS",
    difficulty: "difficile",
    source: "ICAO Annex 3 + AMC/GM to Part-UAS",
    question: "Un SIGMET (SIGnificant METeorological information) concerne :",
    options: [
      "Les prévisions météo horaires pour les aéroports",
      "Des phénomènes météo significatifs pouvant affecter la sécurité des aéronefs (turbulence sévère, givrage sévère, cendres volcaniques, etc.)",
      "Les bulletins quotidiens pour les pilotes de drones",
      "Les données de vent en surface uniquement"
    ],
    answer: 1,
    explanation: "Les SIGMET sont des messages d'information météo signalant des phénomènes dangereux pour tous les aéronefs : turbulence sévère (SEV TURB), givrage sévère (SEV ICE), orages (TS), cendres volcaniques (VA), ondes de tempête tropicale (TC), etc. Essentiels pour la planification des opérations STS.",
  },
  {
    id: 38,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, Art. 12 + UAS.STS-01.030",
    question: "Que doit faire un opérateur STS si un accident impliquant son UAS cause des dommages corporels à un tiers ?",
    options: [
      "Informer l'assureur sous 30 jours",
      "Déclarer l'occurrence à l'autorité nationale compétente sans délai injustifié, conformément au règlement (UE) 376/2014",
      "Rédiger un rapport interne uniquement",
      "Contacter la police locale et attendre ses instructions"
    ],
    answer: 1,
    explanation: "L'article 12 de 2019/947 et le règlement (UE) 376/2014 imposent la déclaration d'événements de sécurité à l'autorité compétente (DGAC en France). Les blessures à des tiers, dommages à des aéronefs ou infrastructures, pertes de contrôle doivent être déclarés. En France : via le portail ECCAIRS/SIGANE.",
  },
  {
    id: 39,
    category: "cats",
    theme: "UAS STS",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/945, Art. 5 — C5 flight termination",
    question: "Qu'est-ce qu'un 'système de terminaison de vol' (flight termination system) pour un drone C5 ?",
    options: [
      "Un système de retour automatique à la maison (RTH)",
      "Un système permettant, sur commande ou automatiquement, de mettre fin au vol de manière contrôlée pour éviter des dommages au sol",
      "Un système d'enregistrement vidéo de la fin du vol",
      "Un mode économie de batterie activé en fin de mission"
    ],
    answer: 1,
    explanation: "Le flight termination system C5 doit permettre d'arrêter le vol de façon fiable et contrôlée. Il peut couper les moteurs sur commande du pilote ou automatiquement (géofence, perte de contrôle). Son activation doit réduire l'énergie cinétique à l'impact à ≤ 80 J via un parachute ou équivalent.",
  },
  {
    id: 40,
    category: "cats",
    theme: "Sécurité STS",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Security threats",
    question: "Le 'GPS spoofing' est une menace de sécurité consistant à :",
    options: [
      "Émettre un signal GPS falsifié pour tromper le système de navigation du drone sur sa position réelle",
      "Bloquer physiquement le signal GPS par un dispositif métallique",
      "Mettre à jour frauduleusement le firmware du drone",
      "Voler les données vidéo transmises par le drone"
    ],
    answer: 0,
    explanation: "Le spoofing GPS consiste à diffuser un signal GPS frauduleux qui amène le récepteur du drone à croire qu'il se trouve à une position différente. Le drone peut alors quitter sa zone d'opération ou s'écraser. C'est une menace réelle pour les opérations en zone sensible. Mitigation : IMU redondant, vérification multi-constellation (GPS+GLONASS+Galileo).",
  },
  {
    id: 41,
    category: "cats",
    theme: "Facteurs humains",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Situational Awareness (Endsley 1995)",
    question: "Le modèle de conscience situationnelle d'Endsley comprend 3 niveaux. Quel est le niveau 1 ?",
    options: [
      "Compréhension de la situation",
      "Projection dans le futur",
      "Perception des éléments de l'environnement",
      "Prise de décision"
    ],
    answer: 2,
    explanation: "Le modèle d'Endsley (1988/1995) définit la conscience situationnelle en 3 niveaux : Niveau 1 — Perception (détecter les éléments clés : autres aéronefs, météo, batterie), Niveau 2 — Compréhension (interpréter ce que ça signifie pour l'opération), Niveau 3 — Projection (anticiper l'évolution de la situation). La perte de niveau 1 est la cause la plus fréquente d'accidents.",
  },
  {
    id: 42,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, UAS.STS-01.020(12)",
    question: "Quel est l'âge minimum pour être télépilote en catégorie Spécifique (STS) ?",
    options: ["14 ans", "16 ans", "18 ans", "21 ans"],
    answer: 1,
    explanation: "UAS.STS-01.020(12) : l'âge minimum pour opérer en STS est de 16 ans, contre 16 ans également pour la sous-catégorie A2. Pour l'A1, c'est aussi 16 ans pour les C1. Certains États membres peuvent imposer un minimum plus élevé dans leur réglementation nationale.",
  },
  {
    id: 43,
    category: "cats",
    theme: "Procédures opérationnelles",
    difficulty: "moyen",
    source: "AMC1 UAS.STS-01.020 — Pre-flight",
    question: "Un 'site survey' pré-opérationnel en STS doit inclure :",
    options: [
      "Uniquement une vérification visuelle rapide du terrain",
      "L'identification des obstacles, personnes non impliquées, espace aérien, conditions météo, voies d'accès urgence, et validation du ground risk buffer",
      "Seulement la vérification de la couverture GPS",
      "Un test de la caméra et de la liaison vidéo"
    ],
    answer: 1,
    explanation: "Le site survey (reconnaissance du site) est obligatoire avant toute opération STS. Il couvre : cartographie des obstacles (bâtiments, lignes HT, arbres), identification et exclusion des personnes non impliquées, vérification de l'espace aérien (NOTAM), conditions météo, accès pour secours, et confirmation que le ground risk buffer est maintenu.",
  },
  {
    id: 44,
    category: "cats",
    theme: "Météo STS",
    difficulty: "moyen",
    source: "ICAO Annex 3 + documentation OACI",
    question: "Dans un METAR, la mention 'BKN015CB' signifie :",
    options: [
      "Ciel dégagé à 1 500 pieds",
      "Nuages fragmentés (5/8 à 7/8 de couverture) à 1 500 pieds, de type cumulonimbus",
      "Brouillard à 15 km de visibilité",
      "Brume sèche à 1 500 m"
    ],
    answer: 1,
    explanation: "BKN = Broken (fragmenté, couverture 5 à 7 octas). 015 = base des nuages à 1 500 pieds AGL (× 100 ft). CB = Cumulonimbus. La présence de CB signale des orages et turbulences sévères potentielles. Un vol drone est fortement déconseillé (voire interdit selon le manuel d'opérations) en présence de CB.",
  },
  {
    id: 45,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "difficile",
    source: "Règlement (UE) 2019/947, Art. 5 + Annexe",
    question: "Un opérateur LUC (Light UAS Operator Certificate) peut :",
    options: [
      "Opérer uniquement des drones < 2 kg",
      "Auto-autoriser certaines opérations en catégorie Spécifique sans déclaration individuelle par opération",
      "Piloter sans restriction dans tout l'espace aérien européen",
      "Former d'autres télépilotes sans agrément supplémentaire"
    ],
    answer: 1,
    explanation: "Le LUC (Art. 5 et Annexe VI de 2019/947) est un certificat délivré aux opérateurs qui démontrent un niveau de maturité sécurité élevé (SMS complet, organisation, procédures). Il leur permet d'auto-autoriser certaines opérations en catégorie Spécifique dans les limites définies dans leur certificat, sans dépôt de déclaration par mission.",
  },
  {
    id: 46,
    category: "cats",
    theme: "Facteurs humains",
    difficulty: "difficile",
    source: "AMC/GM to Part-UAS — FRMS (Fatigue Risk Management)",
    question: "Dans le cadre d'une opération STS longue durée, quel facteur est le plus susceptible de dégrader la conscience situationnelle ?",
    options: [
      "Une batterie neuve",
      "La fatigue cognitive cumulée, particulièrement au-delà de 4 heures d'opération continue",
      "Un vent de face constant",
      "Une résolution vidéo FHD vs 4K"
    ],
    answer: 1,
    explanation: "La fatigue cognitive est le premier facteur dégradant la SA lors d'opérations longues. Au-delà de 2-4 heures d'opération continue, les capacités d'attention, de mémoire de travail et de prise de décision se dégradent significativement. Les FRMS (Fatigue Risk Management Systems) recommandent des rotations de pilotes et des pauses régulières.",
  },
  {
    id: 47,
    category: "cats",
    theme: "Réglementation STS",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/947, UAS.STS-01.020(4)",
    question: "En STS-01, l'opération doit se dérouler en :",
    options: [
      "BVLOS (Beyond Visual Line of Sight) avec observateurs",
      "EVLOS (Extended Visual Line of Sight) avec relais radio",
      "VLOS (Visual Line of Sight) uniquement",
      "VLOS ou BVLOS selon les conditions"
    ],
    answer: 2,
    explanation: "UAS.STS-01.020(4) : le scénario STS-01 est strictement limité au VLOS (Visual Line of Sight). Le télépilote ou un observateur UAS doit maintenir le contact visuel direct avec le drone. STS-01 et STS-02 sont tous deux des scénarios VLOS — il n'existe pas encore de STS standard pour le BVLOS.",
  },
  {
    id: 48,
    category: "cats",
    theme: "UAS STS",
    difficulty: "moyen",
    source: "Règlement (UE) 2019/945, Art. 6 — Classe C6",
    question: "La classe C6, requise pour STS-02, impose quelle exigence supplémentaire par rapport à C5 ?",
    options: [
      "Un moteur de secours redondant",
      "Un parachute balistique certifié EASA",
      "Un système anti-collision actif (ACAS-like) pour le survol de personnes",
      "Une masse maximale au décollage (MTOM) < 3 kg"
    ],
    answer: 0,
    explanation: "La classe C6 (pour STS-02, survol de personnes) impose des exigences supplémentaires de redondance et sécurité par rapport à C5. Notamment : redondance des systèmes critiques, système de terminaison de vol plus fiable, et parachute démontrant une réduction de l'énergie cinétique suffisante pour protéger les personnes survolées. Les exigences exactes sont en cours de finalisation par EASA.",
  },
  {
    id: 49,
    category: "cats",
    theme: "Sécurité STS",
    difficulty: "moyen",
    source: "AMC/GM to Part-UAS — Privacy STS",
    question: "En opération STS professionnelle avec caméra, l'opérateur est soumis au RGPD. Il doit notamment :",
    options: [
      "Obtenir le consentement écrit de chaque personne dans la zone survolée",
      "Tenir un registre des activités de traitement, informer les personnes concernées, et respecter les finalités déclarées",
      "Flou automatique le visage de toutes les personnes filmées",
      "Détruire toutes les données vidéo dans les 24 heures"
    ],
    answer: 1,
    explanation: "En opération professionnelle, l'opérateur est 'responsable de traitement' au sens du RGPD (Art. 24). Il doit : tenir un registre des traitements (Art. 30), informer les personnes (Art. 13-14), disposer d'une base légale (Art. 6), respecter les finalités déclarées (Art. 5), et prendre des mesures de sécurité appropriées (Art. 32).",
  },
  {
    id: 50,
    category: "cats",
    theme: "Procédures opérationnelles",
    difficulty: "difficile",
    source: "AMC1 UAS.STS-01.020 — Emergency procedures",
    question: "Si un drone C5 perd totalement sa liaison de commande en STS-01, quelle séquence se déclenche prioritairement ?",
    options: [
      "Le drone reste en hover (vol stationnaire) jusqu'à ce que la liaison soit rétablie",
      "La procédure de perte de liaison préprogrammée (failsafe) s'exécute : RTH, hover ou terminaison de vol selon la configuration",
      "Le drone monte automatiquement à 150 m pour améliorer la réception",
      "Le drone se pose immédiatement là où il se trouve"
    ],
    answer: 1,
    explanation: "Le failsafe (procédure de perte de lien) doit être défini et validé dans le manuel d'opérations avant toute opération STS. Les options typiques sont : RTH (Return to Home), hover pendant X secondes puis RTH, ou terminaison de vol contrôlée. La terminaison de vol est privilégiée en STS si le RTH risque de sortir de la zone sûre.",
  },
];

export const themes = {
  bapd: ["Réglementation", "Espace aérien", "Sécurité", "Météo", "Vie privée", "Assurance"],
  a2: ["Réglementation A2", "Météo", "Performance de vol", "Technique", "Espace aérien", "Facteurs humains"],
  cats: ["Réglementation STS", "Sécurité opérationnelle", "Procédures opérationnelles", "Espace aérien STS", "Météo STS", "Facteurs humains", "UAS STS"],
};

export const questionsByCategory = (cat: Question["category"]) =>
  questions.filter((q) => q.category === cat);

export const questionsByDifficulty = (diff: Question["difficulty"]) =>
  questions.filter((q) => q.difficulty === diff);
