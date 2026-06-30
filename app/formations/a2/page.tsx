import Link from "next/link";
import Nav from "@/components/Nav";

const steps = [
  { n: "1", title: "Inscription et achat de l'examen du BAPD A2", desc: "Commencez par acheter l'accès à l'examen directement depuis votre tableau de bord CertifDrone.fr ou via notre centre de formation. Quel que soit votre statut (nouvel utilisateur ou déjà inscrit), CertifDrone.fr et son partenaire EuroUSC-Benelux, agréé par les autorités aéronautiques des pays-Bas (RDW), vous permettra d'acheter et le passage de votre examen européen en ligne (À distance) et de voler en sous-catégorie A1-A2 et A3." },
  { n: "2", title: "Paiement sécurisé", desc: "Effectuez votre paiement en toute sécurité en ligne grâce à notre partenaire Stripe pour votre formation pratique de télépilote. Une fois votre paiement validé, vous trouverez votre facture sur votre espace élève." },
  { n: "3", title: "Choix de la date", desc: "Choisissez la date qui vous convient ! CertifDrone.fr vous offre la flexibilité de sélectionner votre créneau, avec des sessions disponibles tous les jours." },
  { n: "4", title: "Inscription à la plateforme de passage de l'épreuve", desc: "Vous recevrez une invitation pour créer votre compte sur la plateforme de passage de l'examen en ligne pour l'Aptitude de Pilote à Distance. Suivez les instructions pour finaliser votre inscription et effectuez un test préliminaire pour vous assurer que votre environnement est conforme aux exigences de l'examen à distance." },
  { n: "5", title: "Réception de la convocation", desc: "Une convocation vous sera envoyée par email 48h avant votre épreuve. Vous y trouverez toutes les informations nécessaires pour le jour J." },
  { n: "6", title: "Le jour J", desc: "Connectez-vous en ligne à la plateforme de passage de l'examen avec vos identifiants personnels. Assurez-vous de respecter toutes les conditions requises pour passer l'examen dans un environnement approprié." },
  { n: "7", title: "Passage de l'examen open A2", desc: "Suivez les instructions pour accéder à votre session d'examen théorique. L'examen se compose de plusieurs modules avec une durée totale de 40 questions, avec une durée totale de 40 minutes. Pour réussir, vous devez obtenir au moins 30 bonnes réponses sur les 40 questions à choix multiples, soit un minimum de 75%." },
  { n: "8", title: "Correction et délivrance du certificat", desc: "Après l'examen, votre test sera évalué et un certificat de réussite vous sera délivré sous 5 jours, sous réserve de respecter les conditions de passage et d'atteindre le score de 75% requis pour la catégorie ouverte." },
];

export default function BapdA2() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Passez votre examen théorique pour obtenir votre certification de pilote de drone <span className="text-orange-500">A2 en ligne</span> maintenant !
              </h1>
              <p className="text-gray-600 text-lg mb-6">Passez votre BAPD A2 pour les télépilotes de drone en ligne dès maintenant grâce à notre partenaire EuroUSC-Benelux, agréé par la RDW.</p>
              <Link href="/inscription" className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md">Inscription</Link>
            </div>
            <div className="flex-1 max-w-xs w-full bg-white rounded-2xl shadow-xl border-2 border-orange-200 p-6 text-center">
              <div className="text-sm text-gray-500 mb-1">Examen BAPD A2</div>
              <div className="text-xl font-bold text-gray-900 mb-3">Passage en ligne</div>
              <div className="text-4xl font-extrabold text-orange-500 mb-4">79,00€</div>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700 mb-5">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900 mb-1">L&apos;examen théorique</div>
                  <ul className="space-y-0.5 text-left">
                    <li>• 5 passages inclus</li>
                    <li>• Entraînement en ligne</li>
                    <li>• Paiement sécurisé</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900 mb-1">Diplôme Européen</div>
                  <ul className="space-y-0.5 text-left">
                    <li>• Délivré par la RDW</li>
                    <li>• Reconnu en Europe</li>
                    <li>• Valable 5 ans</li>
                  </ul>
                </div>
              </div>
              <Link href="/inscription" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">Passer l&apos;examen</Link>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Le BAPD A2 est un certificat théorique indispensable pour piloter un drone en catégorie ouverte, notamment en sous-catégorie A2. Ce certificat vous permet de réaliser des examens et d&apos;opérer dans le cadre des règles établies par l&apos;EASA pour des vols en zone peuplée renforcée. Avec notre partenaire exclusif EuroUSC-Benelux, agréé par la RDW, vous pouvez passer votre examen depuis chez vous.
            </p>
            <p className="text-gray-600 text-sm">
              L&apos;examen BAPD A2 est proposé au tarif de <strong className="text-orange-500">79€ TTC</strong> et comprend jusqu&apos;à cinq passages pour maximiser vos chances de réussite. Inscrivez-vous dès maintenant pour rejoindre la communauté des télépilotes professionnels de drone opérant dans le respect des réglementations européennes.
            </p>
          </div>
        </section>

        {/* Passage de l'examen */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Passage de l&apos;examen A2 avec CertifDrone.fr</h2>
            <p className="text-orange-500 font-semibold mb-8">On vous explique tout</p>
            <div className="space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">{s.n}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Le programme de l&apos;examen A2 de la catégorie BAPD EUROPE</h2>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-4">BAPD</h3>
              <ol className="space-y-2 text-sm text-gray-700 grid md:grid-cols-2 gap-x-8">
                {[
                  "la sécurité aérienne",
                  "les restrictions d'espace aérien",
                  "la réglementation aérienne",
                  "les limites des performances humaines",
                  "les procédures opérationnelles",
                  "les connaissances générales en matière d'UAS",
                  "la protection des données et de la vie privée",
                  "les assurances",
                  "la sûreté",
                  "les conditions météorologiques",
                  "les performances de l'aéronef sans équipage à bord",
                  "l'isolement de la zone survolée",
                ].map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-400 font-semibold flex-shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="py-12 px-4 bg-orange-50 border-t border-orange-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Prêt à passer votre BAPD A2 ?</h2>
            <p className="text-gray-600 mb-6">5 passages inclus · Diplôme européen RDW · Valable 5 ans</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/inscription" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">Passer l&apos;examen — 79€</Link>
              <Link href="/qcm" className="border-2 border-orange-500 text-orange-500 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">S&apos;entraîner gratuitement</Link>
            </div>
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
