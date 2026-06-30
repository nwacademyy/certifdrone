"use client";
import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

type FormData = {
  // Opérateur
  operateurNom: string;
  operateurSiren: string;
  operateurAdresse: string;
  operateurEmail: string;
  operateurTel: string;
  // RPIC
  rpicNom: string;
  rpicBrevet: string;
  rpicExperience: string;
  // UAS
  uasMarque: string;
  uasModele: string;
  uasNumeroSerie: string;
  uasMasse: string;
  uasClasse: string;
  uasParachute: boolean;
  uasFts: boolean;
  // Opération
  scenario: "STS-01" | "STS-02";
  zoneDescription: string;
  hauteurMax: string;
  grbDistance: string;
  // Contacts
  contactUrgenceNom: string;
  contactUrgenceTel: string;
  contactUrgenceRole: string;
};

const EMPTY: FormData = {
  operateurNom: "", operateurSiren: "", operateurAdresse: "", operateurEmail: "", operateurTel: "",
  rpicNom: "", rpicBrevet: "", rpicExperience: "",
  uasMarque: "", uasModele: "", uasNumeroSerie: "", uasMasse: "", uasClasse: "C5", uasParachute: false, uasFts: false,
  scenario: "STS-01", zoneDescription: "", hauteurMax: "120", grbDistance: "30",
  contactUrgenceNom: "", contactUrgenceTel: "", contactUrgenceRole: "",
};

function F({ label, id, value, onChange, placeholder, type = "text" }: { label: string; id: keyof FormData; value: string; onChange: (id: keyof FormData, v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input type={type} value={value} onChange={e => onChange(id, e.target.value)} placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
    </div>
  );
}

function buildManex(d: FormData): string {
  const today = new Date().toLocaleDateString("fr-FR");
  return `MANUEL D'EXPLOITATION (MANEX)
Conforme AMC1 UAS.STS-01/02.020 — EASA Règlement (UE) 2019/947
Scénario Standard : ${d.scenario}
Généré le : ${today}

═══════════════════════════════════════════════════════════════
SECTION 1 — INFORMATIONS SUR L'OPÉRATEUR
═══════════════════════════════════════════════════════════════

Raison sociale : ${d.operateurNom || "[À compléter]"}
N° SIREN / enregistrement : ${d.operateurSiren || "[À compléter]"}
Adresse du siège social : ${d.operateurAdresse || "[À compléter]"}
Email de contact : ${d.operateurEmail || "[À compléter]"}
Téléphone : ${d.operateurTel || "[À compléter]"}

Déclarations Légales et Conformité :
L'opérateur s'engage à respecter toutes les exigences de l'EASA et des scénarios européens ${d.scenario}. L'opérateur confirme être enregistré sur AlphaTango et disposer d'un numéro d'opérateur valide.

═══════════════════════════════════════════════════════════════
SECTION 2 — STRUCTURE ORGANISATIONNELLE ET RESPONSABILITÉS
═══════════════════════════════════════════════════════════════

Télépilote Responsable (RPIC) : ${d.rpicNom || "[À compléter]"}
N° de brevet / certificat : ${d.rpicBrevet || "[À compléter]"}
Expérience de vol : ${d.rpicExperience || "[À compléter]"} heures
Rôles et responsabilités :
  - Vérification de l'espace aérien avant chaque mission
  - Contrôle pré-vol du système UAS
  - Décision finale sur le lancement ou l'annulation de la mission
  - Gestion des situations d'urgence

Qualifications et exigences du personnel :
  - CATS (STS) obtenu via examen agréé par les autorités aéronautiques
  - Formation pratique en centre agréé validée
  - Formation continue : révision annuelle des procédures

═══════════════════════════════════════════════════════════════
SECTION 3 — SYSTÈME UAS
═══════════════════════════════════════════════════════════════

Fabricant / Marque : ${d.uasMarque || "[À compléter]"}
Modèle : ${d.uasModele || "[À compléter]"}
Numéro de série : ${d.uasNumeroSerie || "[À compléter]"}
Masse au décollage (MTOM) : ${d.uasMasse || "[À compléter]"} kg
Classe EASA : ${d.uasClasse}
Système parachute : ${d.uasParachute ? "OUI — homologué et opérationnel" : "NON"}
Système de fin de vol (FTS) : ${d.uasFts ? "OUI — opérationnel et testé" : "NON"}

Maintenance et entretien :
  - Inspection pré-vol : liste de vérification obligatoire (voir Section 5)
  - Maintenance préventive : selon les recommandations du fabricant
  - Registre de maintenance tenu à jour (heures de vol, incidents, remplacements)
  - Tout défaut détecté = arrêt des opérations jusqu'à correction documentée

═══════════════════════════════════════════════════════════════
SECTION 4 — DESCRIPTION DES OPÉRATIONS
═══════════════════════════════════════════════════════════════

Scénario applicable : ${d.scenario}
${d.scenario === "STS-01"
  ? `Type d'opération : Vols en zones urbaines peuplées (VLOS)
Classe de drone requise : C5
Hauteur maximale autorisée : ${d.hauteurMax} m AGL
Zone tampon au sol (GRB) : ${d.grbDistance} m minimum autour de la zone d'opération
Conditions spécifiques STS-01 :
  - Vol en vue directe du télépilote (VLOS) obligatoire
  - Zone peuplée : application stricte du GRB
  - Signalisation de la zone opérationnelle requise
  - Coordination préalable avec les autorités locales si nécessaire`
  : `Type d'opération : Vols en zones faiblement peuplées (BVLOS jusqu'à +2 km du pilote)
Classe de drone requise : C6
Hauteur maximale autorisée : ${d.hauteurMax} m AGL
Zone tampon au sol (GRB) : ${d.grbDistance} m minimum autour de la zone d'opération
Conditions spécifiques STS-02 :
  - Vols hors vue autorisés jusqu'à 2 km du télépilote
  - Zone faiblement peuplée vérifiée avant opération
  - Observateur de vol (VO) recommandé pour liaisons hors vue
  - Coordination avec le gestionnaire d'espace aérien local`}

Description de la zone opérationnelle :
${d.zoneDescription || "[Décrire la zone : coordonnées GPS, nature du terrain, obstacles, activités riveraines...]"}

Zones de vol et limites opérationnelles :
  - Espace aérien : vérification via Géoportail et AlphaTango avant chaque mission
  - Restrictions temporaires : consultées la veille et le jour J
  - Zones interdites, réglementées et dangereuses : exclues du plan de vol

═══════════════════════════════════════════════════════════════
SECTION 5 — PROCÉDURES NORMALES
═══════════════════════════════════════════════════════════════

5.1 — Procédures pré-vol
  □ Vérification météo (vent < 8 m/s, visibilité > 5 km, pas de précipitations)
  □ Consultation espace aérien (AlphaTango, Géoportail, NOTAMs)
  □ Inspection visuelle du drone (châssis, hélices, moteurs, connecteurs)
  □ Vérification de la charge batterie (≥ 95%)
  □ Contrôle de la liaison de données (signal RC, vidéo-retour)
  □ Test du FTS ${d.uasFts ? "✓ OBLIGATOIRE" : "(non applicable)"}
  □ Test du parachute ${d.uasParachute ? "✓ OBLIGATOIRE" : "(non applicable)"}
  □ Mise en place du périmètre de sécurité / GRB ${d.grbDistance} m
  □ Briefing de l'équipe au sol

5.2 — Procédures de vol
  □ Décollage progressif — vérification stabilité à 5 m AGL
  □ Montée vers altitude opérationnelle (max ${d.hauteurMax} m AGL)
  □ Surveillance continue de la position et du comportement UAS
  □ Contrôle régulier de la charge batterie (RTH si < 30%)
  □ Maintien du contact radio avec l'équipe au sol

5.3 — Procédures post-vol
  □ Atterrissage contrôlé dans la zone désignée
  □ Sécurisation du drone (moteurs arrêtés, batteries retirées)
  □ Inspection post-vol (dommages, usure hélices)
  □ Enregistrement dans le registre de vol (durée, zone, anomalies)
  □ Rapport d'incident si nécessaire

═══════════════════════════════════════════════════════════════
SECTION 6 — PROCÉDURES DE CONTINGENCE
═══════════════════════════════════════════════════════════════

Perte de liaison de données (signal RC perdu) :
  → Le drone exécute le mode RTH (Return to Home) automatiquement
  → Si non résolu en 30 secondes : activation de la procédure d'atterrissage d'urgence
  → Notification immédiate à ${d.contactUrgenceNom || "la personne de contact d'urgence"}

Météo dégradée en cours de vol :
  → Retour immédiat au point de décollage dès que les conditions passent sous les seuils
  → Seuils d'interruption : vent > 8 m/s, rafales > 10 m/s, visibilité < 3 km
  → Atterrissage d'urgence si retour impossible avant conditions critiques

Intrusion dans la zone opérationnelle :
  → Interruption immédiate de la mission
  → Mise en vol stationnaire à l'altitude de sécurité
  → Attente de dégagement de la zone ou atterrissage d'urgence contrôlé

Batterie critique (< 20%) :
  → Retour immédiat au point de décollage
  → Atterrissage d'urgence si retour impossible
  → Log de l'incident dans le registre de vol

═══════════════════════════════════════════════════════════════
SECTION 7 — PROCÉDURES D'URGENCE
═══════════════════════════════════════════════════════════════

Contact urgence : ${d.contactUrgenceNom || "[À compléter]"} — ${d.contactUrgenceTel || "[À compléter]"} (${d.contactUrgenceRole || "[rôle]"})
Urgences publiques : 15 (SAMU), 17 (Police), 18 (Pompiers), 112 (Urgences Europe)

7.1 — Panne moteur / perte de contrôle totale
  1. Activer immédiatement le FTS si équipé
  2. Tenter de reprendre le contrôle manuel
  3. Guider l'UAS vers une zone dégagée si possible
  4. Alerter les personnes au sol
  5. Sécuriser la zone d'impact
  6. Appeler les secours si blessés ou dommages matériels
  7. Rédiger rapport d'incident dans les 24h

7.2 — Incendie de batterie au sol
  1. Éloigner les personnes (périmètre de sécurité 10 m)
  2. NE PAS tenter d'éteindre avec de l'eau
  3. Utiliser un extincteur CO2 ou un sac ignifuge LiPo
  4. Appeler les pompiers (18) si incendie non maîtrisé
  5. Documenter l'incident

7.3 — Accident avec blessés
  1. Alerter les secours (15 ou 112)
  2. Ne pas déplacer les blessés sauf danger immédiat
  3. Sécuriser la zone
  4. Préserver les preuves (drone, enregistrements)
  5. Contacter l'assurance dans les 24h
  6. Déclarer l'accident à la DGAC (AlphaTango) dans les 72h

7.4 — Violation d'espace aérien involontaire
  1. Retour immédiat hors de la zone
  2. Atterrissage dès que possible
  3. Contacter le contrôle aérien local si possible
  4. Documenter l'incident et déclarer à la DGAC

═══════════════════════════════════════════════════════════════
SECTION 8 — ÉVALUATION DES RISQUES
═══════════════════════════════════════════════════════════════

Méthodologie : SORA (Specific Operations Risk Assessment) — SAIL II

Risques identifiés :
  1. Collision avec des personnes au sol
     Probabilité : Moyenne | Gravité : Élevée | Atténuation : GRB ${d.grbDistance}m, assurance RC
  2. Conflit avec le trafic aérien
     Probabilité : Faible | Gravité : Critique | Atténuation : vérification espace aérien, signalement
  3. Perte de contrôle de l'UAS
     Probabilité : Faible | Gravité : Élevée | Atténuation : maintenance, procédures d'urgence
  4. Conditions météo défavorables
     Probabilité : Moyenne | Gravité : Moyenne | Atténuation : vérification météo obligatoire pré-vol
  5. Défaillance technique (batterie, moteur)
     Probabilité : Faible | Gravité : Élevée | Atténuation : inspection pré-vol, FTS, parachute

═══════════════════════════════════════════════════════════════
SECTION 9 — FACTEURS HUMAINS
═══════════════════════════════════════════════════════════════

Le RPIC s'engage à :
  - Ne pas opérer en cas de fatigue (moins de 6h de sommeil)
  - Ne pas opérer sous l'influence de médicaments altérant la vigilance
  - Ne pas opérer en cas d'état de stress ou de trouble émotionnel significatif
  - Effectuer un bilan de forme avant chaque mission longue
  - Signaler toute condition médicale pouvant affecter les capacités de pilotage
  - Respecter les pauses (maximum 4h de vol continu)

═══════════════════════════════════════════════════════════════
SECTION 10 — PLAN D'INTERVENTION D'URGENCE (EUP)
═══════════════════════════════════════════════════════════════

En cas d'urgence majeure :
  1. Sécuriser les personnes (évacuation de la zone)
  2. Appeler les secours appropriés
  3. Notifier ${d.contactUrgenceNom || "le contact d'urgence"} au ${d.contactUrgenceTel || "[numéro]"}
  4. Sécuriser et préserver les équipements et enregistrements
  5. Coopérer avec les autorités
  6. Rédiger un rapport complet dans les 24h
  7. Déclaration à la DGAC via AlphaTango si requis

═══════════════════════════════════════════════════════════════
SECTION 11 — DÉCLARATION DE CONFORMITÉ
═══════════════════════════════════════════════════════════════

Je soussigné(e) ${d.operateurNom || "[Opérateur]"}, représentant légal de la société, atteste que :

  ✓ Le présent MANEX est conforme aux exigences du Règlement (UE) 2019/947, Annexe — ${d.scenario}
  ✓ Le système UAS ${d.uasMarque} ${d.uasModele} est conforme à la classe ${d.uasClasse} EASA
  ✓ L'opérateur est enregistré sur AlphaTango avec un numéro valide
  ✓ Le RPIC détient les qualifications requises pour le scénario ${d.scenario}
  ✓ Ce document sera soumis à la DGAC lors de toute déclaration de vol spécifique
  ✓ Ce MANEX sera révisé au minimum une fois par an ou après tout incident significatif

Fait à _________________, le ${today}

Signature de l'opérateur : _______________________
${d.operateurNom || "[Nom de l'opérateur]"}

─────────────────────────────────────────────────────────────
⚠️  AVERTISSEMENT : Ce document est un modèle basé sur AMC1 UAS.STS-01/02.020 (EASA).
Il doit être adapté à votre activité spécifique avant dépôt sur AlphaTango.
Consultez un conseiller réglementaire qualifié si nécessaire.
─────────────────────────────────────────────────────────────
Références réglementaires : Règlement (UE) 2019/947 | AMC & GM Part-UAS | Easy Access Rules UAS (EASA, juillet 2024)
Généré par CertifDrone.fr — contact@certifdrone.fr
`;
}

const STEP_TITLES = ["Opérateur", "Télépilote RPIC", "Système UAS", "Opération", "Contacts urgence"];

export default function ManexPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [generated, setGenerated] = useState(false);
  const [manexText, setManexText] = useState("");

  const set = (id: keyof FormData, v: string | boolean) => setForm(f => ({ ...f, [id]: v }));

  const generate = () => {
    const text = buildManex(form);
    setManexText(text);
    setGenerated(true);
  };

  const download = () => {
    const blob = new Blob([manexText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `MANEX_${form.operateurNom.replace(/\s+/g, "_") || "drone"}_${form.scenario}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (generated) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Nav />
        <main className="pt-16 max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Votre MANEX — {form.scenario}</h1>
            <div className="flex gap-3">
              <button onClick={() => setGenerated(false)} className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">← Modifier</button>
              <button onClick={download} className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm">⬇ Télécharger .txt</button>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-sm text-yellow-800">
            ⚠️ Modèle basé sur AMC1 UAS.STS-01/02.020 (EASA). À adapter à votre activité spécifique avant dépôt sur AlphaTango.
          </div>
          <pre className="bg-gray-900 text-green-300 rounded-xl p-6 text-xs overflow-auto whitespace-pre-wrap font-mono leading-relaxed max-h-[70vh]">{manexText}</pre>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Votre <span className="text-orange-500">Manuel d&apos;exploitation</span> drone rédigé pour <span className="text-orange-500">199€</span>
              </h1>
              <p className="text-gray-600 mb-6">La façon la plus simple et abordable pour obtenir votre MANEX en 72h.</p>
              <button onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md">Générer mon MANEX</button>
            </div>
            <div className="flex-1 max-w-sm w-full bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">EASA</div>
                <div className="ml-2 text-xs text-gray-500">European Union Aviation Safety Agency</div>
              </div>
              <p className="text-xs text-center text-gray-600 mb-3">Manuel d&apos;exploitation / OM pour l&apos;exploitation dans SAIL II de systèmes d&apos;avions sans pilote (UAS)</p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Format du Manex modifiable pour garder la main</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Un Manex conforme aux exigences EASA</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Une équipe joignable et à votre écoute</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Obligatoire pour les exploitants drone</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>10 min pour saisir vos informations</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Scénarios STS01 et STS02</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="text-3xl font-extrabold text-orange-500">199€</span>
                <span className="text-gray-400 text-sm ml-1">TTC</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un MANEX */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre Manuel d&apos;exploitation drone rédigé pour <span className="text-orange-500">199€</span></h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Conforme :", sub: "NORMES EASA", desc: "Nos MANEX respectent toutes les exigences de l'EASA et des scénarios européens STS01 et STS02." },
                { title: "Modifiable :", sub: "GARDEZ LE CONTRÔLE", desc: "Recevez votre MANEX au format PDF et Word, prêt à être utilisé et adapté si nécessaire." },
                { title: "Expertise :", sub: "UN GAGE DE SÉRIEUX ET DE QUALITÉ", desc: "CertifDrone.fr, leader de la préparation et du passage d'examens drone en France, propose des MANEX personnalisés et conformes aux normes initiées par l'EASA." },
              ].map(c => (
                <div key={c.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                  <p className="text-xs font-semibold text-orange-500 mb-2">{c.sub}</p>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment rédiger un MANEX Drone ?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Remplissez le Formulaire", desc: "Remplissez notre formulaire en ligne en quelques minutes et recevez un MANEX complet et adapté à votre exploitation." },
                  { step: "2", title: "Paiement Sécurisé", desc: "Effectuez votre paiement en toute sécurité via Stripe. Plusieurs facilités de paiement disponibles directement sur votre interface sécurisée." },
                  { step: "3", title: "Recevez Votre MANEX", desc: "Sous 72h, recevez votre MANEX personnalisé par email. Formats PDF et Word modifiables inclus." },
                ].map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ce que comprend votre MANEX conforme aux normes EASA</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Informations sur l'Opérateur — Détails complets sur l'identité et les coordonnées de l'opérateur de drone.",
                  "Déclarations Légales et Conformité — Engagement à respecter les réglementations de l'EASA et assurer la sécurité des données.",
                  "Structure Organisationnelle — Description des rôles et responsabilités au sein de l'organisation.",
                  "Qualifications et Exigences du Personnel — Certifications et formations requises.",
                  "Procédures d'Opération — Planification, exécution et gestion des vols.",
                  "Zones de Vol et Limites Opérationnelles — Définition des zones autorisées.",
                  "Gestion de la Sécurité — Surveillance et gestion des risques.",
                  "Maintenance et Entretien des Drones — Procédures d'entretien régulier.",
                  "Plan d'Intervention d'Urgence (EUP) — Gestion des situations d'urgence.",
                ].map(item => (
                  <li key={item} className="flex gap-2 bg-gray-50 rounded-lg p-3">
                    <span className="text-orange-500 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section id="form-section" className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Générer votre MANEX gratuitement</h2>
            <p className="text-gray-500 text-sm mb-8">Remplissez les informations pour obtenir votre MANEX personnalisé conforme EASA.</p>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {STEP_TITLES.map((t, i) => (
                <div key={i} className="flex items-center gap-1 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i <= step ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"}`}>{i + 1}</div>
                  <span className={`text-xs hidden sm:block ${i === step ? "text-orange-500 font-semibold" : "text-gray-400"}`}>{t}</span>
                  {i < 4 && <div className="h-0.5 bg-gray-200 flex-1" />}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              {step === 0 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">1. Informations sur l&apos;opérateur</h3>
                  <F label="Raison sociale / Nom de l'opérateur *" id="operateurNom" value={form.operateurNom} onChange={set} placeholder="Société Dupont Aérien SAS" />
                  <F label="N° SIREN / Enregistrement AlphaTango" id="operateurSiren" value={form.operateurSiren} onChange={set} placeholder="123 456 789" />
                  <F label="Adresse du siège social" id="operateurAdresse" value={form.operateurAdresse} onChange={set} placeholder="15 rue de la Paix, 75001 Paris" />
                  <F label="Email de contact" id="operateurEmail" value={form.operateurEmail} onChange={set} placeholder="contact@societe.fr" type="email" />
                  <F label="Téléphone" id="operateurTel" value={form.operateurTel} onChange={set} placeholder="+33 6 12 34 56 78" />
                </div>
              )}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">2. Télépilote responsable (RPIC)</h3>
                  <F label="Nom et prénom du RPIC *" id="rpicNom" value={form.rpicNom} onChange={set} placeholder="Jean Dupont" />
                  <F label="N° de brevet / certificat CATS" id="rpicBrevet" value={form.rpicBrevet} onChange={set} placeholder="CATS-2024-XXXXX" />
                  <F label="Expérience de vol (heures)" id="rpicExperience" value={form.rpicExperience} onChange={set} placeholder="150" type="number" />
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">3. Système UAS</h3>
                  <F label="Fabricant / Marque *" id="uasMarque" value={form.uasMarque} onChange={set} placeholder="DJI, Delair, etc." />
                  <F label="Modèle *" id="uasModele" value={form.uasModele} onChange={set} placeholder="Matrice 350 RTK" />
                  <F label="Numéro de série" id="uasNumeroSerie" value={form.uasNumeroSerie} onChange={set} placeholder="SN-XXXXXXXXXX" />
                  <F label="Masse au décollage (kg)" id="uasMasse" value={form.uasMasse} onChange={set} placeholder="6.5" type="number" />
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Classe EASA</label>
                    <select value={form.uasClasse} onChange={e => set("uasClasse", e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="C5">C5 — STS-01 (zones peuplées)</option>
                      <option value="C6">C6 — STS-02 (BVLOS, zones peu peuplées)</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={form.uasParachute} onChange={e => set("uasParachute", e.target.checked)} className="w-4 h-4 accent-orange-500" />
                      Parachute homologué
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={form.uasFts} onChange={e => set("uasFts", e.target.checked)} className="w-4 h-4 accent-orange-500" />
                      Système de fin de vol (FTS)
                    </label>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">4. Description de l&apos;opération</h3>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Scénario standard</label>
                    <select value={form.scenario} onChange={e => set("scenario", e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="STS-01">STS-01 — Zones urbaines peuplées (C5, VLOS, &lt;120m)</option>
                      <option value="STS-02">STS-02 — Zones peu peuplées (C6, BVLOS, &lt;120m)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Description de la zone opérationnelle</label>
                    <textarea value={form.zoneDescription} onChange={e => set("zoneDescription", e.target.value)}
                      placeholder="Ex: Zone industrielle, centre-ville Lyon, chantier BTP..."
                      rows={3} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <F label="Hauteur maximale de vol (m AGL)" id="hauteurMax" value={form.hauteurMax} onChange={set} placeholder="120" type="number" />
                  <F label="Distance zone tampon GRB (m)" id="grbDistance" value={form.grbDistance} onChange={set} placeholder="30" type="number" />
                </div>
              )}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">5. Contact d&apos;urgence</h3>
                  <F label="Nom et prénom *" id="contactUrgenceNom" value={form.contactUrgenceNom} onChange={set} placeholder="Marie Dupont" />
                  <F label="Téléphone d'urgence *" id="contactUrgenceTel" value={form.contactUrgenceTel} onChange={set} placeholder="+33 6 98 76 54 32" />
                  <F label="Rôle / Fonction" id="contactUrgenceRole" value={form.contactUrgenceRole} onChange={set} placeholder="Directeur des opérations" />
                  <div className="bg-orange-50 rounded-xl p-4 mt-4">
                    <p className="text-sm text-orange-700 font-medium">✓ Prêt à générer votre MANEX complet</p>
                    <p className="text-xs text-orange-600 mt-1">Vérifiez vos informations avant de générer le document.</p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
                {step > 0
                  ? <button onClick={() => setStep(s => s - 1)} className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">← Précédent</button>
                  : <div />
                }
                {step < 4
                  ? <button onClick={() => setStep(s => s + 1)} className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm">Suivant →</button>
                  : <button onClick={generate} className="px-8 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors text-sm">Générer le MANEX ✓</button>
                }
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi un MANEX personnalisé ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🔒", title: "Sécurité :", desc: "Garantit une exploitation sécurisée de vos drones." },
                { icon: "✅", title: "Conformité :", desc: "Respecte les normes et réglementations drone en vigueur." },
                { icon: "⚡", title: "Efficacité :", desc: "Plus besoin de rechercher pendant des heures un exemple de Manex pour votre exploitation drone. Simplifiez vos opérations quotidiennes et la gestion des risques." },
              ].map(c => (
                <div key={c.title} className="bg-gray-50 rounded-xl p-5">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Le MANEX drone */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Le MANEX drone</h2>
            <p className="text-gray-700 text-sm mb-4">
              Le MANEX est un document incontournable pour les exploitants en catégorie spécifique. Il doit être rédigé avec soin.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              N&apos;hésitez pas à nous joindre, nous sommes là pour vous. Obtenez votre MANEX personnalisé maintenant. Commandez dès aujourd&apos;hui et assurez-vous une exploitation sécurisée et conforme.
            </p>
            <button onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Commencer maintenant
            </button>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["FAQ", "CGV – CGU", "CGV – CGU Partenaire", "Données personnelles", "Handicap", "Actualités", "Plan du site"].map(l => (
                <a key={l} href="#" className="hover:text-orange-500 transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-xs text-gray-400">contact@certifdrone.fr · Mentions légales · copyright 2026</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
