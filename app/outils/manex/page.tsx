"use client";
import { useState } from "react";
import {
  EMPTY_MANEX, EMPTY_UAS, EMPTY_PILOTE, EMPTY_MAINTENANCE, EMPTY_ESSAI,
  type ManexData, type UAS, type Pilote, type PersonnelMaintenance, type EssaiVol,
} from "@/lib/manex-types";

// ─── helpers ──────────────────────────────────────────────────────────────────
function Field({
  label, sublabel, value, onChange, placeholder, type = "text", required,
}: {
  label: string; sublabel?: string; value: string;
  onChange: (v: string) => void; placeholder?: string;
  type?: string; required?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {sublabel && <p className="text-xs text-gray-500 mb-1">{sublabel}</p>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
      />
    </div>
  );
}

function Select({
  label, sublabel, value, onChange, options,
}: {
  label: string; sublabel?: string; value: string;
  onChange: (v: string) => void; options: { value: string; label: string }[];
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {sublabel && <p className="text-xs text-gray-500 mb-1">{sublabel}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function Textarea({
  label, sublabel, value, onChange, placeholder, rows = 3,
}: {
  label: string; sublabel?: string; value: string;
  onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {sublabel && <p className="text-xs text-gray-500 mb-1">{sublabel}</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-y"
      />
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer mb-4">
      <div
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full transition-colors ${checked ? "bg-violet-600" : "bg-gray-300"}`}
      >
        <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : ""}`} />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
  );
}

function SectionTitle({ icon, title, sub }: { icon: string; title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {sub && <p className="text-sm text-gray-500">{sub}</p>}
        </div>
      </div>
      <div className="border-b border-gray-200 mt-3" />
    </div>
  );
}

// ─── steps ────────────────────────────────────────────────────────────────────
const STEPS = [
  { id: 0, label: "Opérateur", icon: "🏢" },
  { id: 1, label: "Organisation", icon: "👥" },
  { id: 2, label: "Drones (UAS)", icon: "🚁" },
  { id: 3, label: "Zones de vol", icon: "🗺️" },
  { id: 4, label: "Personnel", icon: "🪪" },
  { id: 5, label: "ERP & Urgences", icon: "🚨" },
  { id: 6, label: "Essais & Annexes", icon: "📋" },
  { id: 7, label: "Génération", icon: "📄" },
];

// ─── UAS sub-form ─────────────────────────────────────────────────────────────
function UASForm({ uas, onChange, idx }: { uas: UAS; onChange: (u: UAS) => void; idx: number }) {
  const set = (k: keyof UAS) => (v: unknown) => onChange({ ...uas, [k]: v });
  return (
    <div className="border border-gray-200 rounded-xl p-5 mb-4 bg-gray-50">
      <h4 className="font-bold text-gray-800 mb-4">UAS {idx + 1}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Désignation / Nom du drone" value={uas.nom} onChange={set("nom")} placeholder="Ex: DJI Mini 3 Pro" required />
        <Field label="Fabricant" value={uas.fabricant} onChange={set("fabricant")} placeholder="Ex: DJI" />
        <Select label="Type" value={uas.type} onChange={set("type")} options={[
          { value: "multirotor", label: "Multi-rotor" },
          { value: "voilure_fixe", label: "Voilure fixe" },
        ]} />
        <Select label="Classe EASA" value={uas.classe} onChange={set("classe")} options={[
          "C0","C1","C2","C3","C4","C5","C6",
        ].map(c => ({ value: c, label: c }))} />
        <Field label="MTOM (masse totale au décollage)" value={uas.mtom} onChange={set("mtom")} placeholder="Ex: 0.249" sublabel="En kilogrammes" />
        <Field label="Charge utile" value={uas.chargeutile} onChange={set("chargeutile")} placeholder="Ex: Caméra 4K intégrée" />
      </div>
      <Toggle label="Parachute installé (M2)" checked={uas.parachute} onChange={set("parachute")} />
      {uas.parachute && (
        <Textarea label="Description du parachute" value={uas.parachuteDesc} onChange={set("parachuteDesc")} placeholder="Marque, modèle, déclenchement..." rows={2} />
      )}
      <Toggle label="Système de terminaison de vol (FTS)" checked={uas.fts} onChange={set("fts")} />
      {uas.fts && (
        <Textarea label="Description du FTS" value={uas.ftsDesc} onChange={set("ftsDesc")} placeholder="Fonctionnement, déclenchement..." rows={2} />
      )}
      <Toggle label="TMPR requis" checked={uas.tmpr} onChange={set("tmpr")} />
      <Textarea
        label="Conditions environnementales défavorables"
        sublabel="Limites spécifiques de l'appareil (vent, pluie, température, etc.)"
        value={uas.conditionsEnv} onChange={set("conditionsEnv")}
        placeholder="Ex: Vent max 10 m/s, température -10°C à 40°C, humidité max 90%"
        rows={2}
      />
      <Textarea
        label="Confinement / système de contention"
        sublabel="Décrire comment l'UAS est maintenu dans son volume d'opération"
        value={uas.confinement} onChange={set("confinement")}
        placeholder="Ex: Géofencing actif, altitude limitée à 120m via firmware..."
        rows={2}
      />
    </div>
  );
}

// ─── pilote sub-form ──────────────────────────────────────────────────────────
function PiloteForm({ p, onChange, idx }: { p: Pilote; onChange: (p: Pilote) => void; idx: number }) {
  const set = (k: keyof Pilote) => (v: string) => onChange({ ...p, [k]: v });
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-3 bg-gray-50">
      <h5 className="font-semibold text-gray-700 mb-3">Pilote {idx + 1}</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Nom complet" value={p.nom} onChange={set("nom")} placeholder="Prénom Nom" required />
        <Field label="N° immatriculation" value={p.immatriculation} onChange={set("immatriculation")} placeholder="UAS-FR-XXXXXXXXX" />
        <Field label="Modèles UAS autorisés" value={p.modelesUAS} onChange={set("modelesUAS")} placeholder="DJI Mini 3, Matrice 350..." />
        <Field label="Scénarios autorisés" value={p.scenarios} onChange={set("scenarios")} placeholder="S1, S2, STS-01, STS-02" />
        <Field label="Qualification" value={p.qualification} onChange={set("qualification")} placeholder="BAPD, CATS STS-01..." />
        <Field label="Expérience (heures de vol)" value={p.experience} onChange={set("experience")} placeholder="150" type="number" />
        <Field label="Date début autorisation" value={p.dateDebut} onChange={set("dateDebut")} type="date" />
        <Field label="Date fin autorisation" value={p.dateFin} onChange={set("dateFin")} type="date" />
      </div>
    </div>
  );
}

// ─── maintenance sub-form ────────────────────────────────────────────────────
function MaintenanceForm({ p, onChange, idx, title }: { p: PersonnelMaintenance; onChange: (p: PersonnelMaintenance) => void; idx: number; title: string }) {
  const set = (k: keyof PersonnelMaintenance) => (v: string) => onChange({ ...p, [k]: v });
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-3 bg-gray-50">
      <h5 className="font-semibold text-gray-700 mb-3">{title} {idx + 1}</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Nom complet" value={p.nom} onChange={set("nom")} placeholder="Prénom Nom" />
        <Field label="Modèles UAS" value={p.modelesUAS} onChange={set("modelesUAS")} placeholder="DJI Mini 3, Matrice 350..." />
        <Field label="Type autorisation" value={p.typeAutorisation} onChange={set("typeAutorisation")} placeholder="Permanente / Limitée..." />
        <Field label="Date début" value={p.dateDebut} onChange={set("dateDebut")} type="date" />
        <Field label="Date fin" value={p.dateFin} onChange={set("dateFin")} type="date" />
      </div>
    </div>
  );
}

// ─── essai sub-form ───────────────────────────────────────────────────────────
function EssaiForm({ e, onChange, idx }: { e: EssaiVol; onChange: (e: EssaiVol) => void; idx: number }) {
  const set = (k: keyof EssaiVol) => (v: string) => onChange({ ...e, [k]: v });
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-3 bg-gray-50">
      <h5 className="font-semibold text-gray-700 mb-3">Essai {idx + 1}</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Date" value={e.date} onChange={set("date")} type="date" />
        <Field label="Référence" value={e.reference} onChange={set("reference")} placeholder="S01-01-001" />
        <Select label="Type" value={e.type} onChange={(v) => onChange({ ...e, type: v as "Simulé" | "Réel" })} options={[
          { value: "Simulé", label: "Simulé" },
          { value: "Réel", label: "Réel" },
        ]} />
        <Field label="Nombre de tests" value={e.nombre} onChange={set("nombre")} placeholder="3" type="number" />
        <Field label="Résultat" value={e.resultat} onChange={set("resultat")} placeholder="3/3 réussi" />
      </div>
    </div>
  );
}

// ─── main ──────────────────────────────────────────────────────────────────────
export default function ManexPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ManexData>({ ...EMPTY_MANEX });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof ManexData) => (v: unknown) =>
    setData((prev) => ({ ...prev, [k]: v }));

  // ── add/remove list helpers ────────────────────────────────────────────────
  const addUAS = () => setData(d => ({ ...d, uas: [...d.uas, { ...EMPTY_UAS }] }));
  const removeUAS = (i: number) => setData(d => ({ ...d, uas: d.uas.filter((_, idx) => idx !== i) }));
  const updateUAS = (i: number, u: UAS) => setData(d => ({ ...d, uas: d.uas.map((x, idx) => idx === i ? u : x) }));

  const addPilote = () => setData(d => ({ ...d, pilotes: [...d.pilotes, { ...EMPTY_PILOTE }] }));
  const removePilote = (i: number) => setData(d => ({ ...d, pilotes: d.pilotes.filter((_, idx) => idx !== i) }));
  const updatePilote = (i: number, p: Pilote) => setData(d => ({ ...d, pilotes: d.pilotes.map((x, idx) => idx === i ? p : x) }));

  const addMaintenance = () => setData(d => ({ ...d, personnelMaintenance: [...d.personnelMaintenance, { ...EMPTY_MAINTENANCE }] }));
  const removeMaintenance = (i: number) => setData(d => ({ ...d, personnelMaintenance: d.personnelMaintenance.filter((_, idx) => idx !== i) }));
  const updateMaintenance = (i: number, p: PersonnelMaintenance) => setData(d => ({ ...d, personnelMaintenance: d.personnelMaintenance.map((x, idx) => idx === i ? p : x) }));

  const addInspection = () => setData(d => ({ ...d, personnelInspection: [...d.personnelInspection, { ...EMPTY_MAINTENANCE }] }));
  const removeInspection = (i: number) => setData(d => ({ ...d, personnelInspection: d.personnelInspection.filter((_, idx) => idx !== i) }));
  const updateInspection = (i: number, p: PersonnelMaintenance) => setData(d => ({ ...d, personnelInspection: d.personnelInspection.map((x, idx) => idx === i ? p : x) }));

  const addEssai = () => setData(d => ({ ...d, essaisVol: [...d.essaisVol, { ...EMPTY_ESSAI }] }));
  const removeEssai = (i: number) => setData(d => ({ ...d, essaisVol: d.essaisVol.filter((_, idx) => idx !== i) }));
  const updateEssai = (i: number, e: EssaiVol) => setData(d => ({ ...d, essaisVol: d.essaisVol.map((x, idx) => idx === i ? e : x) }));

  // ── generate PDF ─────────────────────────────────────────────────────────
  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-manex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.error || "Erreur serveur");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `MANEX_${(data.operateurNom || "operateur").replace(/\s+/g, "_")}_Rev0.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            ✦ SAIL II — Conforme EASA EU 2019/947
          </div>
          <h1 className="text-3xl font-black mb-3">Générateur de MANEX</h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Répondez aux questions étape par étape. Votre Manuel d&apos;Exploitation complet sera généré automatiquement en PDF, conforme au modèle EASA (84 pages).
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStep(i)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                i === step ? "bg-violet-600 text-white shadow-md" :
                i < step ? "bg-green-100 text-green-700" :
                "bg-gray-200 text-gray-500"
              }`}
            >
              <span>{s.icon}</span>
              <span className="hidden sm:inline">{s.label}</span>
              {i < step && <span>✓</span>}
            </button>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

          {/* ── STEP 0: Opérateur ── */}
          {step === 0 && (
            <>
              <SectionTitle icon="🏢" title="Informations de l&apos;opérateur" sub="Ces données figureront sur la page de couverture du MANEX" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <div className="col-span-1 sm:col-span-2">
                  <Field label="Nom de l'opérateur / Raison sociale" value={data.operateurNom} onChange={set("operateurNom")} placeholder="ACME Drone SAS" required />
                </div>
                <Field label="SIRET" value={data.operateurSiret} onChange={set("operateurSiret")} placeholder="83987009400027" required />
                <Field label="N° AlphaTango" value={data.operateurNumAlphaTango} onChange={set("operateurNumAlphaTango")} placeholder="FRAxxxxxxxxx" sublabel="Identifiant DGAC (alphaTango.fr)" required />
                <div className="col-span-1 sm:col-span-2">
                  <Field label="Adresse" value={data.operateurAdresse} onChange={set("operateurAdresse")} placeholder="139 impasse de l'Église" required />
                </div>
                <Field label="Code postal" value={data.operateurCodePostal} onChange={set("operateurCodePostal")} placeholder="76970" />
                <Field label="Ville" value={data.operateurVille} onChange={set("operateurVille")} placeholder="Gremonville" />
                <Field label="Pays" value={data.operateurPays} onChange={set("operateurPays")} placeholder="France" />
                <Field label="E-mail" value={data.operateurEmail} onChange={set("operateurEmail")} placeholder="contact@maSociete.fr" type="email" />
                <div className="col-span-1 sm:col-span-2">
                  <Field label="Téléphone" value={data.operateurTel} onChange={set("operateurTel")} placeholder="+33 6 00 00 00 00" />
                </div>
                <Field label="Date de création du MANEX" value={data.dateCreation} onChange={set("dateCreation")} type="date" />
              </div>
            </>
          )}

          {/* ── STEP 1: Organisation ── */}
          {step === 1 && (
            <>
              <SectionTitle icon="👥" title="Organisation de la société" sub="Section 1.4 du MANEX — Description et organigramme" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Field label="Année de fondation" value={data.societeAnneeCreation} onChange={set("societeAnneeCreation")} placeholder="2024" />
                <div className="col-span-1 sm:col-span-2">
                  <Field
                    label="Domaines d'activité"
                    sublabel="Liste les activités séparées par des virgules"
                    value={data.societeDomaineActivite}
                    onChange={set("societeDomaineActivite")}
                    placeholder="Prises de vue aériennes, Inspections techniques, Agriculture..."
                  />
                </div>
              </div>
              <Textarea
                label="Description de la société"
                sublabel="Quelques phrases décrivant l'entreprise et ses missions"
                value={data.societeDescription}
                onChange={set("societeDescription")}
                placeholder="Notre société est spécialisée dans... Nous intervenons principalement dans..."
                rows={4}
              />
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
                <p className="text-xs text-blue-700 font-medium mb-3">📌 Organigramme — les rôles peuvent être cumulés par une même personne</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {[
                    ["Accountable Manager", "accountableManager", "Gestionnaire responsable"],
                    ["Safety Manager", "safetyManager", "Responsable sécurité"],
                    ["Maintenance / Technique", "maintenanceManager", "Responsable technique"],
                    ["Opérations de vol", "flightOpsManager", "Chef des opérations"],
                    ["Formation", "trainingManager", "Responsable formation"],
                  ].map(([label, key, placeholder]) => (
                    <Field
                      key={key}
                      label={label}
                      value={data[key as keyof ManexData] as string}
                      onChange={set(key as keyof ManexData)}
                      placeholder={placeholder}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const name = data.accountableManager || data.operateurNom;
                    setData(d => ({
                      ...d,
                      safetyManager: name, maintenanceManager: name,
                      flightOpsManager: name, trainingManager: name,
                    }));
                  }}
                  className="text-xs text-blue-600 underline mt-1"
                >
                  Remplir tous les rôles avec le nom de l&apos;Accountable Manager
                </button>
              </div>
            </>
          )}

          {/* ── STEP 2: UAS ── */}
          {step === 2 && (
            <>
              <SectionTitle icon="🚁" title="Systèmes UAS (drones)" sub="Partie T du MANEX — jusqu'à 4 drones" />
              {data.uas.map((u, i) => (
                <div key={i} className="relative">
                  <UASForm uas={u} onChange={(v) => updateUAS(i, v)} idx={i} />
                  {data.uas.length > 1 && (
                    <button onClick={() => removeUAS(i)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-xs">
                      ✕ Supprimer
                    </button>
                  )}
                </div>
              ))}
              {data.uas.length < 4 && (
                <button
                  onClick={addUAS}
                  className="w-full border-2 border-dashed border-violet-300 rounded-xl py-3 text-violet-600 font-semibold text-sm hover:bg-violet-50 transition-colors"
                >
                  + Ajouter un drone
                </button>
              )}
            </>
          )}

          {/* ── STEP 3: Zones de vol ── */}
          {step === 3 && (
            <>
              <SectionTitle icon="🗺️" title="Zones de vol" sub="Partie C du MANEX — définir les zones opérationnelles et scénarios" />

              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-5">
                <p className="text-xs font-semibold text-violet-700 mb-1">Limites opérationnelles générales</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                  <Field label="Vent max (m/s)" value={data.zone1VentMax} onChange={set("zone1VentMax")} placeholder="8" />
                  <Field label="Visibilité min (km)" value={data.zone1VisibiliteMin} onChange={set("zone1VisibiliteMin")} placeholder="5" />
                  <Field label="Température min (°C)" value={data.zone1TempMin} onChange={set("zone1TempMin")} placeholder="-10" />
                  <Field label="Température max (°C)" value={data.zone1TempMax} onChange={set("zone1TempMax")} placeholder="40" />
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mb-3">Zone de vol 1 (principale)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Select label="Scénario" value={data.zone1Scenario} onChange={set("zone1Scenario")} options={[
                  { value: "STS-01", label: "STS-01 (C5 · Zones peuplées · VLOS)" },
                  { value: "STS-02", label: "STS-02 (C6 · Zones peu peuplées · BVLOS)" },
                  { value: "OPEN-A1", label: "OPEN A1 (< 250g · au-dessus de personnes)" },
                  { value: "OPEN-A2", label: "OPEN A2 (C2 · maintien distance)" },
                  { value: "OPEN-A3", label: "OPEN A3 (loin de personnes)" },
                ]} />
                <Select label="GRC (Ground Risk Class)" value={data.zone1GRC} onChange={set("zone1GRC")} options={[
                  "GRC1","GRC2","GRC3","GRC4","GRC5","GRC6","GRC7",
                ].map(g => ({ value: g, label: g }))} />
                <Select label="ARC (Air Risk Class)" value={data.zone1ARC} onChange={set("zone1ARC")} options={[
                  { value: "ARC-a", label: "ARC-a (risque minimal)" },
                  { value: "ARC-b", label: "ARC-b" },
                  { value: "ARC-c", label: "ARC-c" },
                  { value: "ARC-d", label: "ARC-d (risque élevé)" },
                ]} />
                <Field label="Hauteur max de vol (m AGL)" value={data.zone1HauteurMax} onChange={set("zone1HauteurMax")} placeholder="120" />
                <Field label="GRB — tampon sol (m)" sublabel="Ex: 25m à 120m AGL pour MTOM > 10 kg" value={data.zone1GRB} onChange={set("zone1GRB")} placeholder="25" />
              </div>
              <Textarea
                label="Description de la zone de vol 1"
                sublabel="Localisation, nature du terrain, obstacles, activités riveraines, restrictions"
                value={data.zone1Description}
                onChange={set("zone1Description")}
                placeholder="Zone rurale entre [ville A] et [ville B], terrain plat agricole. Aucune agglomération dans un rayon de 500m. Altitude du terrain : 120m NGF..."
                rows={4}
              />

              <div className="border-t border-gray-200 pt-5 mt-3">
                <Toggle label="Ajouter une zone de vol 2" checked={data.zone2Active} onChange={set("zone2Active")} />
                {data.zone2Active && (
                  <>
                    <h3 className="font-bold text-gray-800 mb-3">Zone de vol 2</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <Select label="Scénario" value={data.zone2Scenario} onChange={set("zone2Scenario")} options={[
                        { value: "STS-01", label: "STS-01" },
                        { value: "STS-02", label: "STS-02" },
                        { value: "OPEN-A1", label: "OPEN A1" },
                        { value: "OPEN-A2", label: "OPEN A2" },
                        { value: "OPEN-A3", label: "OPEN A3" },
                      ]} />
                      <Field label="Hauteur max (m AGL)" value={data.zone2HauteurMax} onChange={set("zone2HauteurMax")} placeholder="120" />
                      <Field label="GRB (m)" value={data.zone2GRB} onChange={set("zone2GRB")} placeholder="25" />
                    </div>
                    <Textarea label="Description zone 2" value={data.zone2Description} onChange={set("zone2Description")} placeholder="Description..." rows={3} />
                  </>
                )}
              </div>
            </>
          )}

          {/* ── STEP 4: Personnel ── */}
          {step === 4 && (
            <>
              <SectionTitle icon="🪪" title="Personnel autorisé" sub="Annexes 8.2.x — Pilotes, maintenance et inspections" />

              <h3 className="font-bold text-gray-800 mb-3">Télépilotes autorisés (§8.2.4)</h3>
              {data.pilotes.map((p, i) => (
                <div key={i} className="relative">
                  <PiloteForm p={p} onChange={(v) => updatePilote(i, v)} idx={i} />
                  {data.pilotes.length > 1 && (
                    <button onClick={() => removePilote(i)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xs">✕</button>
                  )}
                </div>
              ))}
              <button onClick={addPilote} className="w-full border-2 border-dashed border-blue-300 rounded-xl py-2.5 text-blue-500 font-semibold text-sm hover:bg-blue-50 transition-colors mb-6">
                + Ajouter un pilote
              </button>

              <h3 className="font-bold text-gray-800 mb-3">Personnel de maintenance (§8.2.1)</h3>
              {data.personnelMaintenance.map((p, i) => (
                <div key={i} className="relative">
                  <MaintenanceForm p={p} onChange={(v) => updateMaintenance(i, v)} idx={i} title="Technicien maintenance" />
                  {data.personnelMaintenance.length > 1 && (
                    <button onClick={() => removeMaintenance(i)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xs">✕</button>
                  )}
                </div>
              ))}
              <button onClick={addMaintenance} className="w-full border-2 border-dashed border-blue-300 rounded-xl py-2.5 text-blue-500 font-semibold text-sm hover:bg-blue-50 transition-colors mb-6">
                + Ajouter personnel maintenance
              </button>

              <h3 className="font-bold text-gray-800 mb-3">Personnel inspections pré/post vol (§8.2.2)</h3>
              {data.personnelInspection.map((p, i) => (
                <div key={i} className="relative">
                  <MaintenanceForm p={p} onChange={(v) => updateInspection(i, v)} idx={i} title="Inspecteur" />
                  {data.personnelInspection.length > 1 && (
                    <button onClick={() => removeInspection(i)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xs">✕</button>
                  )}
                </div>
              ))}
              <button onClick={addInspection} className="w-full border-2 border-dashed border-blue-300 rounded-xl py-2.5 text-blue-500 font-semibold text-sm hover:bg-blue-50 transition-colors">
                + Ajouter inspecteur
              </button>
            </>
          )}

          {/* ── STEP 5: ERP & urgences ── */}
          {step === 5 && (
            <>
              <SectionTitle icon="🚨" title="ERP — Plan d'intervention d'urgence" sub="Section 3.2.4 & Partie E du MANEX" />
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5">
                <p className="text-xs text-red-700 font-semibold mb-2">⚠ Contacts d&apos;urgence locaux</p>
                <p className="text-xs text-red-600 mb-3">À remplir pour chaque zone de vol. Ces numéros figureront dans la checklist ERP à emporter sur le terrain.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <Field label="Aérodrome / Aéroport le plus proche" value={data.erpAerodrome} onChange={set("erpAerodrome")} placeholder="Aérodrome de Dieppe-Saint-Aubin" />
                <Field label="Téléphone aérodrome" value={data.erpAerodromeTel} onChange={set("erpAerodromeTel")} placeholder="+33 2 35 46 09 02" />
                <Field label="Contrôleurs ATC concernés" value={data.erpATC} onChange={set("erpATC")} placeholder="Paris Information / Brest Contrôle" />
                <Field label="Pompiers (local)" value={data.erpPompiersTel} onChange={set("erpPompiersTel")} placeholder="112 / 18" />
                <Field label="Police (local)" value={data.erpPoliceTel} onChange={set("erpPoliceTel")} placeholder="110 / 17" />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-2">
                <p className="text-xs font-semibold text-gray-600 mb-2">Contacts fixes (toujours inclus dans le PDF) :</p>
                <p className="text-xs text-gray-500">• SAMU : 15 &nbsp;•&nbsp; Urgences Europe : 112 &nbsp;•&nbsp; Gendarmerie : 17</p>
                <p className="text-xs text-gray-500 mt-1">• DSAC (rapports incidents) : dsac-autorisations-drones-bf@aviation-civile.gouv.fr</p>
              </div>

              <div className="mt-5">
                <h3 className="font-bold text-gray-800 mb-2">Procédure email ERP</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Avant chaque vol, le RPIC envoie un email au siège :{" "}
                  <span className="font-semibold text-violet-600">{data.operateurEmail || "[email siège]"}</span>
                  {" "}avec objet <span className="font-mono text-xs bg-gray-100 px-1 rounded">ERP, [date de vol]</span> et la photo de la checklist ERP signée.
                </p>
              </div>
            </>
          )}

          {/* ── STEP 6: Essais & Annexes ── */}
          {step === 6 && (
            <>
              <SectionTitle icon="📋" title="Essais en vol & Annexes" sub="Section 8.1 — Preuves d'essais requis pour l'autorisation" />
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-5">
                <p className="text-xs font-semibold text-yellow-800 mb-1">📌 Essais obligatoires</p>
                <p className="text-xs text-yellow-700">
                  La DGAC exige des essais en vol documentés avant validation du MANEX.
                  Distinguer les essais simulés (simulation) et réels (terrain).
                  Format référence recommandé : <span className="font-mono">S01-01-001</span> (Scénario-UAS-N°)
                </p>
              </div>
              {data.essaisVol.map((e, i) => (
                <div key={i} className="relative">
                  <EssaiForm e={e} onChange={(v) => updateEssai(i, v)} idx={i} />
                  {data.essaisVol.length > 1 && (
                    <button onClick={() => removeEssai(i)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xs">✕</button>
                  )}
                </div>
              ))}
              <button onClick={addEssai} className="w-full border-2 border-dashed border-gray-300 rounded-xl py-2.5 text-gray-500 font-semibold text-sm hover:bg-gray-50 transition-colors mb-6">
                + Ajouter un essai
              </button>

              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-bold text-gray-800 mb-3">Contenu des annexes générées automatiquement</h3>
                {[
                  ["§8.2.3", "Qualifications et expériences du personnel"],
                  ["§8.3.1", "Modèle de liste de contrôle ERP (à compléter sur site)"],
                  ["§8.3.3", "Liste de contrôle inspection prévol"],
                  ["§8.3.4", "Liste de contrôle inspection après vol"],
                  ["§8.4.1", "Référence manuels fabricant (maintenance)"],
                  ["§8.5", "Déclaration de conformité signée"],
                ].map(([ref, desc]) => (
                  <div key={ref} className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="text-xs font-mono text-violet-600 bg-violet-50 px-2 py-0.5 rounded flex-shrink-0">{ref}</span>
                    <span className="text-sm text-gray-600">{desc}</span>
                    <span className="ml-auto text-green-500 text-xs">✓ Auto</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── STEP 7: Génération ── */}
          {step === 7 && (
            <>
              <SectionTitle icon="📄" title="Générer le MANEX" sub="Récapitulatif et téléchargement PDF" />
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  ["Opérateur", data.operateurNom, "🏢"],
                  ["SIRET", data.operateurSiret, "🔢"],
                  ["AlphaTango", data.operateurNumAlphaTango, "🆔"],
                  ["Scénario(s)", `${data.zone1Scenario}${data.zone2Active ? " + " + data.zone2Scenario : ""}`, "🗺️"],
                  ["Drones", data.uas.map(u => u.nom || u.fabricant).filter(Boolean).join(", ") || `${data.uas.length} drone(s)`, "🚁"],
                  ["Pilotes", `${data.pilotes.filter(p => p.nom).length} pilote(s)`, "🪪"],
                ].map(([label, value, icon]) => (
                  <div key={label as string} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-lg mb-1">{icon}</div>
                    <div className="text-xs text-gray-500 font-medium">{label}</div>
                    <div className="text-sm font-semibold text-gray-800 truncate">{value || "—"}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-sm font-semibold text-blue-800 mb-2">📄 Contenu du PDF généré</p>
                <p className="text-xs text-blue-700">
                  Page de couverture · Contrôle des documents · Partie A (Général, Déclarations, Organisation) ·
                  Partie B (Procédures normales et d&apos;urgence) · Partie C (Zones de vol) ·
                  Parties D & E (Formation, ERP) · Partie T (Fiches UAS) ·
                  Partie M (Maintenance) · Annexes 8.1 à 8.4 (Essais, Personnel, Checklists)
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-sm text-red-700">
                  ❌ Erreur : {error}
                </div>
              )}

              <button
                onClick={generate}
                disabled={loading || !data.operateurNom}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl text-base transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Génération en cours...
                  </>
                ) : (
                  <>
                    📄 Télécharger le MANEX PDF
                  </>
                )}
              </button>
              {!data.operateurNom && (
                <p className="text-xs text-center text-gray-400 mt-2">Renseignez au minimum le nom de l&apos;opérateur (étape 1)</p>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-600 disabled:opacity-30 hover:bg-gray-50 transition-colors"
          >
            ← Précédent
          </button>
          {step < STEPS.length - 1 && (
            <button
              onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
            >
              Suivant →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
