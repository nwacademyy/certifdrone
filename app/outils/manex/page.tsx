"use client";

import { useState } from "react";
import { FileText, ChevronRight, ChevronLeft, CheckCircle, Download, AlertCircle } from "lucide-react";

type FormData = {
  op_nom: string; op_adresse: string; op_siren: string; op_enreg: string; op_email: string; op_tel: string;
  tp_nom: string; tp_prenom: string; tp_email: string; tp_cert: string; tp_date: string; tp_autorite: string;
  uas_fab: string; uas_modele: string; uas_serie: string; uas_classe: "C5" | "C6" | "Autre"; uas_mtom: string;
  uas_rid: string; uas_para: string; uas_fts: string;
  scenario: "STS-01" | "STS-02"; zone: string; pays: string; hmax: string; rmax: string; grb: string;
  urg_nom: string; urg_tel: string; atc: string; samu: string;
};

const STEPS = [
  { id: 1, label: "🏢 Opérateur" },
  { id: 2, label: "👨‍✈️ Télépilote" },
  { id: 3, label: "🚁 Drone" },
  { id: 4, label: "📍 Opération" },
  { id: 5, label: "📞 Urgences" },
  { id: 6, label: "📄 Document" },
];

const INIT: FormData = {
  op_nom: "", op_adresse: "", op_siren: "", op_enreg: "", op_email: "", op_tel: "",
  tp_nom: "", tp_prenom: "", tp_email: "", tp_cert: "", tp_date: "", tp_autorite: "ILT (Pays-Bas)",
  uas_fab: "", uas_modele: "", uas_serie: "", uas_classe: "C5", uas_mtom: "",
  uas_rid: "Remote ID intégré — diffusion Wi-Fi/Bluetooth", uas_para: "", uas_fts: "",
  scenario: "STS-01", zone: "", pays: "France", hmax: "120", rmax: "", grb: "",
  urg_nom: "", urg_tel: "", atc: "", samu: "15",
};

function F({ label, k, d, set, type = "text", ph = "", hint = "", req = false }: {
  label: string; k: keyof FormData; d: FormData;
  set: (k: keyof FormData, v: string) => void;
  type?: string; ph?: string; hint?: string; req?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}{req && <span className="text-red-400 ml-1">*</span>}</label>
      <input type={type} value={d[k] as string} onChange={e => set(k, e.target.value)}
        placeholder={ph}
        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

function Sel({ label, k, d, set, opts, hint = "" }: {
  label: string; k: keyof FormData; d: FormData;
  set: (k: keyof FormData, v: string) => void;
  opts: { v: string; l: string }[]; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select value={d[k] as string} onChange={e => set(k, e.target.value)}
        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white">
        {opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

function buildManex(d: FormData): string {
  const today = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  return `MANUEL D'EXPLOITATION (MANEX) — SCÉNARIO STANDARD ${d.scenario}
Règlement (UE) 2019/947, Annexe — UAS.${d.scenario}
AMC1 UAS.${d.scenario}.020 (EASA ED Decision 2019/021/R)

VERSION 1.0 — ${today}
═══════════════════════════════════════════════════════════════

SECTION 1 — OPÉRATEUR UAS
────────────────────────────────────────────
Raison sociale      : ${d.op_nom}
Adresse             : ${d.op_adresse}
SIREN               : ${d.op_siren}
N° enregistrement   : ${d.op_enreg}
Email               : ${d.op_email}
Téléphone           : ${d.op_tel}

SECTION 2 — TÉLÉPILOTE RESPONSABLE (RPIC)
────────────────────────────────────────────
Nom / Prénom        : ${d.tp_nom} ${d.tp_prenom}
Email               : ${d.tp_email}
N° certificat CATS  : ${d.tp_cert}
Date de délivrance  : ${d.tp_date}
Autorité délivrante : ${d.tp_autorite}

SECTION 3 — SYSTÈME UAS (DRONE)
────────────────────────────────────────────
Fabricant           : ${d.uas_fab}
Modèle              : ${d.uas_modele}
N° de série         : ${d.uas_serie}
Classe CE           : ${d.uas_classe}  (Règl. délégué (UE) 2019/945, Art. ${d.uas_classe === "C5" ? "5" : d.uas_classe === "C6" ? "6" : "—"})
MTOM                : ${d.uas_mtom} kg
Remote ID           : ${d.uas_rid}
Parachute balistique: ${d.uas_para}
Terminaison de vol  : ${d.uas_fts}

SECTION 4 — DESCRIPTION DE L'OPÉRATION
────────────────────────────────────────────
Scénario            : ${d.scenario}
Mode de vol         : VLOS (Visual Line of Sight)
Pays                : ${d.pays}
Zone d'opération    : ${d.zone}
Hauteur maximale    : ${d.hmax} m AGL
Rayon maximal       : ${d.rmax} m
Ground risk buffer  : ${d.grb} m

${d.scenario === "STS-01" ? `Conditions STS-01 (UAS.STS-01.020) :
  • Zone contrôlée — personnes non impliquées exclues en permanence
  • Délimitation physique obligatoire (rubalise, cônes, barrières)
  • Vérification d'exclusion avant chaque décollage
  • Drone de classe C5 équipé d'un système de terminaison de vol et
    d'un parachute réduisant l'énergie cinétique à ≤ 80 J à l'impact` :
`Conditions STS-02 (UAS.STS-02.020) :
  • Zone peu peuplée / milieu principalement non habité
  • Survol de personnes non impliquées autorisé sous conditions
  • Drone de classe C6 avec redondances systèmes renforcées
  • Parachute certifié — énergie cinétique contrôlée à l'impact`}

SECTION 5 — PROCÉDURES NORMALES
────────────────────────────────────────────
5.1 Préparation pré-vol
    a) Consultation NOTAM et espace aérien (Géoportail / SIA)
    b) Vérification météo (vent, visibilité ≥ 500 m, plafond)
    c) Inspection mécanique UAS (châssis, hélices, visserie)
    d) Vérification batteries (charge ≥ 90 %, état LiPo visuel)
    e) Test Remote ID (diffusion confirmée avant décollage)
    f) Test parachute balistique (goupille, capteur, déclenchement)
    g) Test terminaison de vol (commande dédiée opérationnelle)
    h) Briefing équipe (RPIC + observateurs) : rôles, signaux, urgences
    i) Délimitation de la zone d'opération + ground risk buffer ${d.grb} m
    j) Confirmation absence personnes non impliquées dans la zone

5.2 Procédures de vol
    a) Décollage progressif — vérification comportement UAS
    b) Maintien VLOS permanent (télépilote ou observateur désigné)
    c) Respect hauteur max ${d.hmax} m AGL en toutes circonstances
    d) Surveillance batterie (atterrissage si seuil d'alerte atteint)
    e) Communication continue RPIC ↔ observateurs

5.3 Atterrissage et post-vol
    a) Annonce de l'atterrissage imminente à l'équipe
    b) Zone d'atterrissage vérifiée et libre
    c) Atterrissage doux — désarmement immédiat
    d) Sécurisation batteries — inspection post-vol de l'UAS
    e) Débriefing équipe — consignation du vol dans le logbook EASA

SECTION 6 — PROCÉDURES DE CONTINGENCE
────────────────────────────────────────────
Déclencheurs :
  • Signal de commande dégradé (indicateur faible sur télécommande)
  • Conditions météo dépassant les seuils opérationnels
  • Intrusion personne non impliquée dans la zone (STS-01)
  • Niveau batterie sous le seuil d'alerte
  • Comportement anormal UAS (dérive, vibrations, oscillations)

Actions :
  1. Annoncer la situation à l'équipe (verbal + signal prédéfini)
  2. Mettre l'UAS en hover immédiatement
  3. Évaluer la situation (≤ 15 secondes)
  4. Si résolution : reprendre procédures normales
  5. Si non résolution : déclencher procédures d'urgence Section 7
  6. Documenter dans le rapport post-vol

SECTION 7 — PROCÉDURES D'URGENCE
────────────────────────────────────────────
7.1 Perte totale liaison de commande
    → Failsafe préprogrammé s'exécute (RTH ou terminaison de vol)
    → Équipe sécurise la zone de retour automatique
    → Contacter ATC si zone contrôlée : ${d.atc || "voir autorisation locale"}

7.2 Panne critique en vol (moteur, contrôleur de vol)
    → Déclencher MANUELLEMENT le système de terminaison de vol
    → Crier : "ATTENTION — DRONE EN URGENCE !"
    → Sécuriser les personnes présentes — éloignement immédiat
    → Après impact : baliser zone, NE PAS toucher aux batteries
    → Appeler secours si nécessaire : SAMU ${d.samu} / 112

7.3 Accident avec dommages corporels
    → SAMU ${d.samu} immédiatement
    → Contact urgence opérateur : ${d.urg_nom} — ${d.urg_tel}
    → Sécuriser la zone — ne pas déplacer les blessés
    → Déclarer l'occurrence à l'autorité compétente (DGAC France)
       sous 72 h via portail ECCAIRS/SIGANE (Règl. (UE) 376/2014)
    → Conserver logs de vol et vidéos sans altération

7.4 Incendie batterie LiPo
    → Éloigner toute personne à ≥ 50 m de la batterie
    → NE PAS utiliser d'eau — sable ou extincteur CO2 uniquement
    → Appeler pompiers (18 ou 112)
    → Laisser brûler à distance contrôlée

SECTION 8 — ÉVALUATION DES RISQUES
────────────────────────────────────────────
RISQUE 1 — Collision aéronef habité
  Probabilité : Faible | Gravité : Critique
  Mitigation : NOTAM pré-vol, VLOS permanent, hauteur max ${d.hmax} m

RISQUE 2 — Impact personne au sol
  Probabilité : Faible | Gravité : Majeure
  Mitigation : Zone contrôlée, GRB ${d.grb} m, parachute, FTS

RISQUE 3 — Conditions météo dépassées
  Probabilité : Modérée | Gravité : Majeure
  Mitigation : Vérification météo pré-vol, seuils définis, annulation

RISQUE 4 — Défaillance technique
  Probabilité : Faible | Gravité : Majeure
  Mitigation : Inspection pré-vol, maintenance préventive, FTS

RISQUE 5 — Atteinte vie privée / RGPD
  Probabilité : Modérée | Gravité : Modérée
  Mitigation : Base légale RGPD documentée, information préalable

SECTION 9 — MAINTENANCE
────────────────────────────────────────────
Avant chaque vol  : inspection mécanique complète (voir Section 5.1)
Tous les 50 vols  : contrôle moteurs, ESC, soudures
Tous les 100 h    : révision châssis, roulements, châssis
Annuellement      : recertification parachute balistique
Après incident    : inspection complète avant remise en service

Toute intervention est consignée dans le registre de maintenance
de l'UAS avec date, nature, pièces remplacées et signature.

SECTION 10 — FACTEURS HUMAINS
────────────────────────────────────────────
• Durée max vol continu sans pause : 4 heures
• Rotation télépilote recommandée : toutes les 2 heures
• Vol interdit en cas de : fatigue, médicaments altérant la vigilance,
  troubles visuels, stress excessif
• Briefing obligatoire avant chaque mission

SECTION 11 — DÉCLARATION DE CONFORMITÉ
────────────────────────────────────────────
L'opérateur ${d.op_nom} déclare que ce Manuel d'Exploitation
est conforme aux exigences du scénario standard ${d.scenario}
(Règlement (UE) 2019/947, Annexe — UAS.${d.scenario}) et a été
élaboré selon l'AMC1 UAS.${d.scenario}.020 (EASA).

La déclaration opérationnelle sera déposée auprès de l'autorité
nationale compétente avant toute opération.

Fait le ${today}

Signature :

_________________________
${d.op_nom}
${d.tp_prenom} ${d.tp_nom} (RPIC)

RÉFÉRENCES
────────────────────────────────────────────
• Règlement (UE) 2019/947 — Annexe UAS.${d.scenario}
• Règlement délégué (UE) 2019/945 — Classe ${d.uas_classe}
• AMC & GM to Part-UAS — Issue 1, Amendment 2 (EASA)
• Easy Access Rules for UAS — Révision Juillet 2024 (EASA)
• Règlement (UE) 376/2014 — Compte-rendu d'événements
• RGPD (UE) 2016/679

Généré par CertifDrone.fr — ${today}
Ce modèle doit être adapté à votre situation spécifique.
`;
}

export default function ManexPage() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState<FormData>(INIT);
  const [manex, setManex] = useState("");

  const set = (k: keyof FormData, v: string) => setD(f => ({ ...f, [k]: v }));

  const generate = () => { setManex(buildManex(d)); setStep(6); };

  const download = () => {
    const blob = new Blob([manex], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `MANEX_${d.scenario}_${d.op_nom.replace(/\s+/g, "_") || "operateur"}_v1.0.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-sky-600">CertifDrone.fr</a>
        <a href="/outils" className="text-sm text-gray-500 hover:text-sky-600">← Outils</a>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-100 rounded-xl"><FileText className="w-5 h-5 text-orange-600" /></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Générateur MANEX</h1>
              <p className="text-sm text-gray-500">Manuel d'Exploitation conforme EASA — STS-01 / STS-02</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-700">
              Modèle basé sur l'AMC1 UAS.STS-01/02.020 (EASA). À adapter à votre situation avant dépôt sur AlphaTango.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-1">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => step > s.id && setStep(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  step === s.id ? "bg-sky-600 text-white" :
                  step > s.id ? "bg-green-100 text-green-700 cursor-pointer" :
                  "bg-gray-100 text-gray-400"
                }`}
              >{s.label}</button>
              {i < STEPS.length - 1 && <div className={`w-3 h-px flex-shrink-0 ${step > s.id ? "bg-green-300" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900 mb-2">Informations Opérateur</h2>
              <F label="Raison sociale / Nom" k="op_nom" d={d} set={set} req ph="SkyPro SARL" />
              <F label="Adresse complète" k="op_adresse" d={d} set={set} req ph="12 rue de l'Aviation, 75001 Paris" />
              <div className="grid grid-cols-2 gap-4">
                <F label="SIREN" k="op_siren" d={d} set={set} ph="123 456 789" />
                <F label="N° enregistrement opérateur" k="op_enreg" d={d} set={set} ph="FRA-OP-XXXXX" hint="AlphaTango / portail national" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <F label="Email" k="op_email" d={d} set={set} type="email" ph="contact@skypro.fr" />
                <F label="Téléphone" k="op_tel" d={d} set={set} ph="+33 6 00 00 00 00" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900 mb-2">Télépilote Responsable (RPIC)</h2>
              <div className="grid grid-cols-2 gap-4">
                <F label="Nom" k="tp_nom" d={d} set={set} req ph="Dupont" />
                <F label="Prénom" k="tp_prenom" d={d} set={set} req ph="Jean" />
              </div>
              <F label="Email" k="tp_email" d={d} set={set} type="email" ph="jean.dupont@skypro.fr" />
              <F label="N° certificat CATS" k="tp_cert" d={d} set={set} ph="NL-CATS-XXXXX" hint="Numéro sur votre certificat officiel" />
              <div className="grid grid-cols-2 gap-4">
                <F label="Date de délivrance" k="tp_date" d={d} set={set} type="date" />
                <F label="Autorité délivrante" k="tp_autorite" d={d} set={set} ph="ILT (Pays-Bas)" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900 mb-2">Système UAS (Drone)</h2>
              <div className="grid grid-cols-2 gap-4">
                <F label="Fabricant" k="uas_fab" d={d} set={set} req ph="DJI, Parrot, Autel…" />
                <F label="Modèle" k="uas_modele" d={d} set={set} req ph="Matrice 350 RTK" />
              </div>
              <F label="Numéro de série" k="uas_serie" d={d} set={set} ph="4XL0C-XXXXXXXX" />
              <div className="grid grid-cols-2 gap-4">
                <Sel label="Classe CE" k="uas_classe" d={d} set={set} hint="Voir marquage drone"
                  opts={[{ v: "C5", l: "C5 — STS-01" }, { v: "C6", l: "C6 — STS-02" }, { v: "Autre", l: "Autre / spécifique" }]} />
                <F label="MTOM (kg)" k="uas_mtom" d={d} set={set} ph="4.2" hint="Masse max au décollage" />
              </div>
              <F label="Remote ID" k="uas_rid" d={d} set={set} ph="Remote ID intégré — Wi-Fi/Bluetooth" />
              <F label="Parachute balistique" k="uas_para" d={d} set={set} ph="Opale 32 — certifié, énergie < 80 J" hint="Obligatoire C5 et C6" />
              <F label="Système de terminaison de vol (FTS)" k="uas_fts" d={d} set={set} ph="Coupe-moteur canal 7 télécommande" hint="Obligatoire — arrêt sur commande" />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900 mb-2">Description de l'Opération</h2>
              <Sel label="Scénario Standard" k="scenario" d={d} set={set}
                opts={[{ v: "STS-01", l: "STS-01 — Zone contrôlée, drone C5" }, { v: "STS-02", l: "STS-02 — Zone peu peuplée, drone C6" }]} />
              <F label="Pays d'opération" k="pays" d={d} set={set} ph="France" />
              <F label="Description de la zone d'opération" k="zone" d={d} set={set}
                ph="Inspection lignes HT, commune de Saint-Étienne, hors agglomération, accès restreint."
                hint="Type de terrain, obstacles, environnement, accès" />
              <div className="grid grid-cols-3 gap-4">
                <F label="Hauteur max (m AGL)" k="hmax" d={d} set={set} ph="120" hint="Max réglementaire : 120 m" />
                <F label="Rayon max (m)" k="rmax" d={d} set={set} ph="500" hint="Distance RPIC ↔ drone" />
                <F label="Ground risk buffer (m)" k="grb" d={d} set={set} ph="30" hint="Zone tampon autour de l'opération" />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900 mb-2">Contacts d'Urgence</h2>
              <div className="grid grid-cols-2 gap-4">
                <F label="Contact urgence opérateur (nom)" k="urg_nom" d={d} set={set} ph="Marie Dupont" />
                <F label="Téléphone urgence" k="urg_tel" d={d} set={set} ph="+33 6 00 00 00 00" />
              </div>
              <F label="Fréquence / Contact ATC local" k="atc" d={d} set={set} ph="Paris Info 125.725 MHz"
                hint="Si opération en espace contrôlé ou près d'un aérodrome" />
              <F label="Numéro SAMU" k="samu" d={d} set={set} ph="15" hint="15 en France, 112 en Europe" />
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-xl">
                <p className="text-sm font-medium text-green-800">✅ Toutes les sections sont renseignées</p>
                <p className="text-xs text-green-700 mt-1">Cliquez sur "Générer le MANEX" pour créer votre document.</p>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <h2 className="font-semibold text-gray-900 text-lg">MANEX généré !</h2>
                  <p className="text-sm text-gray-500">Scénario {d.scenario} — {d.op_nom}</p>
                </div>
              </div>
              <button onClick={download}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors">
                <Download className="w-5 h-5" /> Télécharger le MANEX (.txt)
              </button>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Aperçu</p>
                </div>
                <pre className="p-4 text-xs text-gray-600 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto font-mono">{manex}</pre>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                <p className="text-xs font-medium text-orange-700 mb-1">⚠️ Étapes suivantes</p>
                <ol className="text-xs text-orange-700 space-y-1 list-decimal list-inside">
                  <li>Relisez et adaptez à votre situation précise</li>
                  <li>Faites valider par un expert réglementaire si besoin</li>
                  <li>Déposez votre déclaration opérationnelle sur AlphaTango</li>
                  <li>Conservez ce MANEX disponible lors de chaque opération</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {step < 6 && (
          <div className="flex items-center justify-between">
            <button onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 disabled:opacity-30">
              <ChevronLeft className="w-4 h-4" /> Précédent
            </button>
            {step < 5 ? (
              <button onClick={() => setStep(s => s + 1)}
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-medium hover:bg-sky-700">
                Suivant <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={generate}
                className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600">
                <FileText className="w-4 h-4" /> Générer le MANEX
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
