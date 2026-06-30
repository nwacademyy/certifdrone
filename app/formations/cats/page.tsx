import Link from "next/link";
import Nav from "@/components/Nav";

const steps = [
  { n: "1", title: "Inscription", desc: "Commencez par passer commande et vous inscrire directement depuis votre tableau de bord CertifDrone.fr ou via notre centre de formation. Quel que soit votre statut (nouvel utilisateur ou déjà inscrit), CertifDrone.fr et son partenaire exclusif EuroUSC-Benelux, agréé par la RDW, vous permettra d'acheter et de passer le BAPD (Brevet d'Aptitude de Pilote à Distance) et de voler en sous-catégorie A1-A3 et A2 dans les scénarios STS." },
  { n: "2", title: "Paiement sécurisé", desc: "Effectuez votre paiement en toute sécurité en ligne grâce à notre partenaire Stripe pour votre formation pratique de télépilote. Une fois votre paiement validé, vous trouverez votre facture sur votre espace élève." },
  { n: "3", title: "Choix de la date", desc: "Choisissez la date qui vous convient ! CertifDrone.fr vous offre la flexibilité de sélectionner votre créneau, avec des sessions disponibles tous les jours." },
  { n: "4", title: "Inscription à la plateforme de passage de l'épreuve", desc: "Vous recevrez une invitation pour créer votre compte sur la plateforme de passage de l'examen en ligne pour l'Aptitude de Pilote à Distance. Suivez les instructions pour finaliser votre inscription et effectuez un test préliminaire pour vous assurer que votre environnement est conforme aux exigences de l'examen à distance." },
  { n: "5", title: "Réception de la Convocation", desc: "Une convocation vous sera envoyée par email 48h avant votre épreuve. Vous y trouverez toutes les informations nécessaires pour le jour J." },
  { n: "6", title: "Le jour J", desc: "Connectez-vous en ligne à la plateforme de passage de l'examen avec vos identifiants personnels. Assurez-vous de respecter toutes les conditions requises pour passer l'examen dans un environnement approprié." },
  { n: "7", title: "Passage de l'examen", desc: "Suivez les instructions pour accéder à votre session d'examen. L'examen se compose de plusieurs modules avec une durée totale de 60 minutes. Pour réussir, vous devez obtenir au moins 30 bonnes réponses sur les 40 questions à choix multiples (30 QCM si vous possédez déjà l'examen Open A2), soit un minimum de 75%." },
  { n: "8", title: "Correction et délivrance du certificat", desc: "Après l'examen, votre test sera évalué et un certificat de réussite vous sera délivré sous 5 jours, sous réserve de respecter les conditions de passage et d'atteindre le score de 75% requis." },
];

export default function CatsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                L&apos;examen drone<br />
                Catégorie <span className="text-orange-500">Spécifique EUROPE</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">Avec CertifDrone.fr, entraînez-vous pour l&apos;obtention de votre théorique drone STS (CATS)</p>
              <Link href="/inscription" className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md">Inscription</Link>
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

        {/* Examen en ligne */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Obtenez l&apos;examen théorique STS (CATS) en ligne dès maintenant !
              </h2>
              <p className="text-gray-600 mb-4">
                Passez votre théorique STS pour devenir un pilote de drone certifié maintenant grâce à notre partenaire agréé par la RDW.
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Ce diplôme théorique, appelé CATS en France, est indispensable pour piloter un drone selon les règles de l&apos;EASA, dans les scénarios standard européens STS-01 et STS-02. Grâce à notre partenaire exclusif EuroUSC-Benelux, agréé par la RDW, vous pouvez accéder à cette épreuve en ligne, depuis le confort de votre domicile. Préparez-vous dès aujourd&apos;hui avec des outils de formation adaptés pour garantir votre réussite et obtenir une certification reconnue dans toute l&apos;Europe.
              </p>
              <p className="text-sm font-semibold text-orange-600">Le STS Théorique (CATS), un impératif pour les scénarios européens.</p>
            </div>

            {/* Pricing card inline */}
            <div className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 max-w-sm">
              <div className="text-sm text-gray-500 mb-1">Examen théorique STS (CATS)</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Passage en ligne</div>
              <div className="text-4xl font-extrabold text-orange-500 mb-4">190,00€</div>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700 mb-5">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-gray-900 mb-1">L&apos;examen théorique</div>
                  <ul className="space-y-0.5">
                    <li>• 5 passages inclus</li>
                    <li>• Entraînement en ligne</li>
                    <li>• Paiement sécurisé</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-semibold text-gray-900 mb-1">Diplôme Européen</div>
                  <ul className="space-y-0.5">
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

        {/* Détails formation */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Préparation au théorique STS (CATS)</h2>
              <p className="text-gray-700 text-sm mb-4">
                L&apos;examen de la catégorie spécifique pour maîtriser les connaissances théoriques, validées par l&apos;obtention d&apos;un Certificat d&apos;Aptitude Théorique pour les Scénarios Standard STS (CATS) décerné par la DGAC.
              </p>
              <p className="text-sm text-gray-600 mb-6">Idéal pour des vols de drones Professionnel partout en Europe en agglomération et des vols hors vue.</p>
              <p className="text-xs text-gray-400 italic mb-4">* Doit être complété par une formation pratique en centre.</p>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-1">Certificat SPECIFIQUE EASA STS-01 et STS-02</h3>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">Public cible</h3>
                <p className="text-sm text-gray-600">Tout pilote de drone qui utilise des drones ne répondant pas aux exigences de la catégorie Ouverte Européenne. Avec la licence de drone de l&apos;UE, vous pouvez voler dans l&apos;UE, la Suisse, l&apos;Islande et la Norvège.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">Durée</h3>
                <p className="text-sm text-gray-600">Pour obtenir le certificat, vous passerez environ trente à quarante heures. La durée dépend également de vos connaissances préalables et de la vitesse d&apos;apprentissage.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">Coût</h3>
                <p className="text-sm text-gray-600">La préparation au certificat théorique STS (CATS) STS-01 et STS-02 coûte <strong className="text-orange-500">49,90€</strong>. L&apos;examen STS théorique se passe en ligne sur CertifDrone.fr, en partenariat avec EuroUSC-Benelux, un centre agréé par la RDW (Pays-Bas), et coûte <strong className="text-orange-500">190€</strong>.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">Examen</h3>
                <p className="text-sm text-gray-600">L&apos;examen du STS théorique se passe en ligne sur CertifDrone.fr, en partenariat avec EuroUSC-Benelux, un centre agréé par la RDW (Pays-Bas), et coûte 190€.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">Conditions d&apos;admission</h3>
                <p className="text-sm text-gray-600">Il n&apos;y a pas d&apos;exigences en termes de connaissances préalables pour l&apos;examen STS (CATS). Néanmoins, si vous possédez déjà l&apos;examen OPEN A2, vous n&apos;aurez que <strong>30 QCM au lieu de 40</strong> et moins de modules à réviser.</p>
              </div>
            </div>

            {/* STS Card */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-lg sticky top-24">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-500 mb-1">La catégorie</div>
                  <div className="text-xl font-bold text-gray-900">SPÉCIFIQUE EUROPE</div>
                  <div className="text-4xl font-extrabold text-orange-500 mt-2">49,90€</div>
                  <div className="text-xs text-gray-400 mb-4">formation · TVA incluse</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-gray-700 border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-semibold text-gray-700 mb-2 text-center">STS-01</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Drone de classe C5</li>
                      <li>• Zones urbaines peuplées</li>
                      <li>• VLOS (vol en vue)</li>
                      <li>• &lt; 120 m AGL</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-2 text-center">STS-02</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Drone de classe C6</li>
                      <li>• Zones faiblement peuplées</li>
                      <li>• BVLOS (à + 2 km du pilote)</li>
                      <li>• &lt; 120 m AGL</li>
                    </ul>
                  </div>
                </div>
                <Link href="/inscription" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors">Démarrer l&apos;entraînement</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Passage de l'examen */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Passage de l&apos;examen théorique STS (CATS) avec CertifDrone.fr</h2>
            <p className="text-orange-500 font-semibold mb-8">On vous explique tout</p>
            <div className="space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex gap-4">
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

        {/* Drones compatibles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Les drones compatibles pour la catégorie SPÉCIFIQUE EUROPE</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-orange-600 mb-3">CLASSE C5</h3>
                <p className="text-sm text-gray-500 italic">Drones certifiés conformes classe C5 EASA</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-orange-600 mb-3">CLASSE C6</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Delair UX 11</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Le programme officiel</h2>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">STS (CATS)</h3>
              <ol className="space-y-2 text-sm text-gray-700 grid md:grid-cols-2 gap-x-8">
                {[
                  "la réglementation aérienne",
                  "les limites des performances humaines",
                  "les procédures opérationnelles",
                  "les mesures d'atténuation technique et opérationnelle des risques au sol",
                  "les connaissances générales en matière d'UAS",
                  "la météorologie",
                  "les performances de vol de l'UAS",
                  "les mesures d'atténuation technique et opérationnelle des risques en vol",
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
