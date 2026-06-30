import Link from "next/link";
import Nav from "@/components/Nav";

export default function BapdOpen() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-violet-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                L&apos;examen drone 
                Catégorie <span className="text-violet-600">OPEN EUROPE</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">Avec CertifDrone.fr, entraînez-vous pour l&apos;obtention de votre théorique drone BAPD</p>
              <Link href="/inscription" className="inline-block bg-violet-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-violet-700 transition-colors shadow-md">Inscription</Link>
            </div>
            <div className="flex-1 max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-800 mb-4">Les aérodynes sont des aéronefs :</p>
              <div className="flex flex-col gap-2">
                {[
                  { letter: "A", text: "Plus lourds que l'air", correct: true },
                  { letter: "B", text: "Reliés au sol par câble", correct: false },
                  { letter: "C", text: "Incapables de maintenir le vol stationnaire", correct: false },
                  { letter: "D", text: "Plus légers que l'air", correct: false },
                ].map((o) => (
                  <div key={o.letter} className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${o.correct ? "border-green-400 bg-green-50 text-green-800 font-semibold" : "border-gray-200 text-gray-700"}`}>
                    <span className={`w-7 h-7 rounded flex items-center justify-center text-sm font-bold flex-shrink-0 ${o.correct ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}>{o.letter}</span>
                    <span className="text-sm">{o.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licence EASA */}
        <section className="py-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ce que vous apporte la licence EASA</h2>
            <p className="text-violet-600 font-bold text-lg">CATÉGORIE OPEN EUROPE : A1-A2-A3</p>
          </div>
        </section>

        {/* Détails + Pricing */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Préparation au théorique BAPD</h2>

              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Tout pilote de drone qui utilise des drones de 250 grammes à 25 kilos dans la catégorie ouverte.
                  Avec la licence de drone de l&apos;UE, vous pouvez voler dans l&apos;UE, la Suisse, l&apos;Islande et la Norvège.
                </p>
                <p className="text-xs text-gray-500 italic">En France, l&apos;arrêté restreint cette utilisation à un usage dans l&apos;espace privé.</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Certificat OPEN EASA A1-A3 &amp; A2</h3>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-1">Public cible</h3>
                  <p className="text-sm text-gray-600">Tout pilote de drone qui utilise des drones de 250 grammes à 25 kilos dans la catégorie ouverte. Avec la licence de drone de l&apos;UE, vous pouvez voler dans l&apos;UE, la Suisse, l&apos;Islande et la Norvège.</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-1">Durée</h3>
                  <p className="text-sm text-gray-600">Pour obtenir le certificat, vous passerez environ six à dix heures. La durée dépend également de vos connaissances préalables et de la vitesse d&apos;apprentissage.</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-1">Coût</h3>
                  <p className="text-sm text-gray-600">La préparation au certificat (BAPD) A1-A3 et A2 coûte <strong className="text-violet-600">29,90€</strong> (TVA inc.) chez CertifDrone.fr. Accès à l&apos;ensemble des cours, QCM et examens blancs.</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-1">Examen</h3>
                  <p className="text-sm text-gray-600">L&apos;examen A1-A3 est en ligne sur la plateforme officielle de l&apos;autorité de votre pays. En France, il s&apos;agit d&apos;AlphaTango. L&apos;examen A2 se passe en ligne ou en centre d&apos;examen et coûte 30€.</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-1">Conditions d&apos;admission</h3>
                  <p className="text-sm text-gray-600 mb-2">Il n&apos;y a pas d&apos;exigences en termes de connaissances préalables pour s&apos;inscrire à l&apos;examen A1-A3.</p>
                  <p className="text-sm text-gray-600 mb-2">Pour s&apos;inscrire à l&apos;examen A2, l&apos;obtention de l&apos;examen A1-A3 est un prérequis.</p>
                  <p className="text-sm text-gray-600">Pour la sous-catégorie A2, une auto-formation pratique obligatoire est requise. Nous vous proposons notre guide afin de la réaliser en toute autonomie et conformément aux exigences réglementaires de l&apos;EASA.</p>
                </div>
              </div>
            </div>

            {/* Pricing card */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border-2 border-violet-200 p-6 shadow-lg sticky top-24">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-500 mb-1">La catégorie</div>
                  <div className="text-xl font-bold text-gray-900">OPEN EUROPE</div>
                  <div className="text-4xl font-extrabold text-violet-600 mt-2">29,90€</div>
                  <div className="text-xs text-gray-400 mb-4">TVA incluse</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-semibold text-gray-700 mb-2">Sous-cat. A1-A3</div>
                    <ul className="space-y-1 text-gray-600 text-xs">
                      <li>• Drone de classe C0–C4</li>
                      <li>• Zones faiblement peuplées</li>
                      <li>• VLOS (vol en vue)</li>
                      <li>• &lt; 120 m AGL</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-2">Sous-cat. A2</div>
                    <ul className="space-y-1 text-gray-600 text-xs">
                      <li>• Drone de classe C2</li>
                      <li>• Zones urbaines peuplées</li>
                      <li>• VLOS (vol en vue)</li>
                      <li>• &lt; 120 m AGL</li>
                    </ul>
                  </div>
                </div>
                <Link href="/inscription" className="block text-center bg-violet-600 text-white font-semibold py-3 rounded-full hover:bg-violet-700 transition-colors">Démarrer l&apos;entraînement</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Drones compatibles */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Les drones compatibles pour la catégorie OPEN EASA A1-A3 &amp; A2</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                { classe: "CLASSE C0", drones: ["DJI Mini 2 SE", "DJI Mini 3, Mini 3 Pro", "Mini 4 Pro Fly More Combo"] },
                { classe: "CLASSE C1", drones: ["DJI AIR 3", "DJI MAVIC 3 V2.0, Cine V2.0, Classic"] },
                { classe: "CLASSE C2", drones: ["Ag-Eagle SENSFLY eBee", "DJI M30 EU, M30T EU", "DJI MAVIC 3E EU, 3T EU, 3M EU"] },
                { classe: "CLASSE C3", drones: ["DJI Matrice 350 RTK", "Quantum-Systems Trinity F90+", "WingtraOne"] },
              ].map(({ classe, drones }) => (
                <div key={classe} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-violet-600">{classe}</h3>
                  <ul className="space-y-1">
                    {drones.map(d => <li key={d} className="text-sm text-gray-700">• {d}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Le contenu du programme de la catégorie OPEN</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">A1-A3</h3>
                <ol className="space-y-2 text-sm text-gray-700">
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
                  ].map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-violet-500 font-semibold flex-shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">A2 (modules supplémentaires)</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  {[
                    "les conditions météorologiques",
                    "les performances de l'aéronef sans équipage à bord",
                    "l'isolement de la zone survolée",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-violet-500 font-semibold flex-shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="text-xs text-gray-600">Pour préparer l&apos;examen A2, vous devez avoir obtenu préalablement l&apos;examen A1-A3. Une auto-formation pratique est également obligatoire.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["FAQ", "CGV – CGU", "CGV – CGU Partenaire", "Données personnelles", "Handicap", "Actualités", "Plan du site"].map(l => (
                <a key={l} href="#" className="hover:text-violet-600 transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-xs text-gray-400">contact@certifdrone.fr · Mentions légales · copyright 2026</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
