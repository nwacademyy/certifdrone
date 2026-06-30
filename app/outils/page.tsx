import { FileText, CheckSquare, Calculator, BookOpen, Search, Plane } from "lucide-react";

const tools = [
  {
    icon: "🔍",
    title: "License Finder",
    subtitle: "Quel brevet me faut-il ?",
    description: "Répondez à 3 questions sur votre drone et votre usage : obtenez instantanément la liste des certifications requises.",
    href: "/outils/license-finder",
    badge: "Gratuit",
    badgeColor: "bg-green-100 text-green-700",
    available: false,
  },
  {
    icon: "✅",
    title: "Check-list Pré-vol",
    subtitle: "Sécurisez chaque mission",
    description: "Générez une check-list personnalisée selon votre drone et votre scénario (A1/A3, A2, STS-01, STS-02).",
    href: "/outils/checklist",
    badge: "Gratuit",
    badgeColor: "bg-green-100 text-green-700",
    available: false,
  },
  {
    icon: "📄",
    title: "Générateur MANEX",
    subtitle: "Manuel d'Exploitation STS",
    description: "Créez votre Manuel d'Exploitation conforme EASA en 15 min. Formulaire guidé → document professionnel à déposer sur AlphaTango.",
    href: "/outils/manex",
    badge: "CATS exclusif",
    badgeColor: "bg-violet-100 text-violet-700",
    available: true,
  },
  {
    icon: "📓",
    title: "Logbook EASA",
    subtitle: "Carnet de vol numérique",
    description: "Enregistrez vos vols conformément aux normes EASA. Exportez un PDF certifié pour vos contrôles.",
    href: "/outils/logbook",
    badge: "Bientôt",
    badgeColor: "bg-gray-100 text-gray-500",
    available: false,
  },
  {
    icon: "🧮",
    title: "Calculateur de devis",
    subtitle: "Tarification mission pro",
    description: "Simulez le coût d'une mission (surface, durée, équipe) et générez un devis professionnel.",
    href: "/outils/devis",
    badge: "Bientôt",
    badgeColor: "bg-gray-100 text-gray-500",
    available: false,
  },
  {
    icon: "✈️",
    title: "Comparateur drone",
    subtitle: "Choisissez votre équipement",
    description: "Comparez les specs techniques et réglementaires de deux drones côte à côte (classe CE, MTOM, Remote ID…).",
    href: "/outils/comparateur",
    badge: "Bientôt",
    badgeColor: "bg-gray-100 text-gray-500",
    available: false,
  },
];

export default function OutilsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-sky-600">CertifDrone.fr</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="/qcm" className="hover:text-sky-600">QCM</a>
          <a href="/formations/cats" className="hover:text-sky-600">CATS</a>
          <a href="/outils" className="text-sky-600 font-medium">Outils</a>
          <a href="/tarifs" className="hover:text-sky-600">Tarifs</a>
        </nav>
        <a href="/inscription" className="text-sm font-medium bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
          Commencer
        </a>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Outils &amp; Assistants</h1>
          <p className="text-gray-500">Tout ce dont un télépilote professionnel a besoin, en un seul endroit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.href}
              className={`bg-white rounded-2xl border p-6 flex flex-col gap-4 transition-all ${
                tool.available
                  ? "border-sky-200 hover:shadow-md"
                  : "border-gray-100 opacity-70"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`text-2xl p-2 rounded-xl ${tool.available ? "bg-sky-50" : "bg-gray-50"}`}>
                  {tool.icon}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{tool.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{tool.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
              {tool.available ? (
                <a
                  href={tool.href}
                  className="mt-auto inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Accéder à l'outil →
                </a>
              ) : (
                <span className="mt-auto text-xs text-gray-400">Disponible prochainement</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
