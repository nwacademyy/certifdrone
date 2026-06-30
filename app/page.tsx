import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500 text-sm">★★★★★</span>
                <span className="text-sm text-gray-500">4,9/5 · 430+ avis vérifiés Trustpilot</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Préparation et <span className="text-orange-500">Examens</span><br />
                <span className="text-orange-500">Drone</span> en ligne –<br />
                Formation, Cours &amp; QCM 2026
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Première plateforme avec <strong className="text-orange-500">cours complet et conformes</strong>, QCM, <strong className="text-orange-500">examens blancs</strong> &amp; <strong className="text-orange-500">fiches de révisions</strong> pour les Examens Français et européens.
              </p>
              <Link href="/inscription" className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition-colors shadow-md">
                Inscription
              </Link>
            </div>
            {/* Mock QCM card */}
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

        {/* Stats */}
        <section className="py-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "3 500+", label: "QCM" },
              { value: "15 000+", label: "Télépilotes" },
              { value: "150+", label: "Centres" },
              { value: "98%", label: "Taux de réussite" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-orange-500">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Offres principales */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Nos formations</h2>
            <p className="text-center text-gray-500 mb-10">Que vous soyez futur télépilote loisir ou professionnel, nos cours et QCM drone s&apos;adaptent à vos besoins</p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* BAPD Open */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Catégorie Open Europe</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">BAPD A1-A3 &amp; A2</h3>
                <div className="text-3xl font-extrabold text-orange-500 mb-1">29,90€</div>
                <p className="text-sm text-gray-500 mb-4">TVA incluse · Accès immédiat</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                  {["À jour 2026", "Cours et audio", "+700 QCM", "Fiches de révision", "Examens blancs"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/bapd" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors">Démarrer l&apos;entraînement</Link>
              </div>
              {/* CATS */}
              <div className="bg-orange-500 rounded-2xl p-6 flex flex-col relative shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">⭐ LE PLUS CHOISI</div>
                <div className="text-xs font-semibold text-orange-100 uppercase tracking-wider mb-1">Catégorie Spécifique Europe</div>
                <h3 className="text-xl font-bold text-white mb-1">STS CATS</h3>
                <div className="text-3xl font-extrabold text-white mb-1">49,90€</div>
                <p className="text-sm text-orange-100 mb-4">TVA incluse · Accès immédiat</p>
                <ul className="space-y-2 text-sm text-white mb-6 flex-1">
                  {["À jour 2026", "Cours et audio", "+800 QCM", "Fiches de révision", "Examens blancs"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-yellow-300">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/cats" className="block text-center bg-white text-orange-500 font-semibold py-3 rounded-full hover:bg-orange-50 transition-colors">Démarrer l&apos;entraînement</Link>
              </div>
              {/* Pack Full */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">✦ PACK COMPLET</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Open + Spécifique</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pack FULL</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-orange-500">69,80€</span>
                  <span className="text-gray-400 line-through text-sm">79,80€</span>
                </div>
                <p className="text-sm text-green-600 font-medium mb-4">Profitez de 47% de remise</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                  {["BAPD A1-A3 & A2 inclus", "STS CATS inclus", "+1500 QCM", "Toutes les fiches", "Tous les examens blancs"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/tarifs" className="block text-center border-2 border-orange-500 text-orange-500 font-semibold py-3 rounded-full hover:bg-orange-50 transition-colors">Voir le pack</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Examens officiels */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Passez votre examen officiel</h2>
            <p className="text-center text-gray-500 mb-10">Diplôme européen officiel émis par les autorités néerlandaises (RDW) • 5 passages inclus • Valable 5 ans</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* BAPD A2 exam */}
              <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                <div className="text-sm text-gray-500 mb-1">Présentez votre diplôme</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">BAPD A2 en ligne</h3>
                <div className="text-sm font-semibold text-orange-500 mb-2">FORMATION + EXAMEN OFFICIEL RDW</div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">98,90€ <span className="text-base font-normal text-gray-400">TTC</span></div>
                <p className="text-xs text-gray-400 mb-4">ou 4× 24,72€ sans frais · Bénéficiez de 5 passages inclus !</p>
                <p className="text-xs text-gray-500 mb-4">Diplôme européen officiel émis par les autorités néerlandaises.</p>
                <Link href="/formations/a2" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">Passer l&apos;examen →</Link>
              </div>
              {/* CATS exam */}
              <div className="border-2 border-orange-200 rounded-2xl p-6 bg-orange-50">
                <div className="text-sm text-gray-500 mb-1">Présentez votre diplôme</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">STS (CATS) en ligne</h3>
                <div className="text-sm font-semibold text-orange-500 mb-2">FORMATION + EXAMEN OFFICIEL RDW</div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">239,90€ <span className="text-base font-normal text-gray-400">TTC</span></div>
                <p className="text-xs text-gray-400 mb-4">ou 4× 59,97€ sans frais · Bénéficiez de 5 passages inclus !</p>
                <p className="text-xs text-gray-500 mb-4">Certificat européen officiel émis par les autorités néerlandaises.</p>
                <Link href="/formations/cats" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">Passer l&apos;examen →</Link>
              </div>
            </div>
            {/* Pack 299 */}
            <div className="border-2 border-green-400 rounded-2xl p-6 bg-green-50 max-w-xl mx-auto text-center">
              <div className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">✦ PACK COMPLET · LE PLUS AVANTAGEUX</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Les 2 certifications réunies : STS (CATS) + BAPD A2</h3>
              <p className="text-sm text-gray-600 mb-4">TOUT INCLUS · LE COMBO MALIN</p>
              <ul className="text-left text-sm text-gray-700 mb-4 space-y-1 inline-block">
                {["Examen officiel STS (CATS) + QCM d'entraînement", "Examen officiel BAPD A2 + QCM d'entraînement", "5 passages inclus sur chaque examen"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-gray-400 line-through text-lg">345,80€</span>
                <span className="text-4xl font-extrabold text-orange-500">299€</span>
                <span className="text-gray-500">TTC</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">ou 4× 74,79€ sans frais · 15 passages dont 48,80€ offerts automatiquement</p>
              <Link href="/tarifs" className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">Ajouter le pack au panier →</Link>
              <p className="text-xs text-gray-400 mt-2">Paiement 100% sécurisé · Accès immédiat</p>
            </div>
          </div>
        </section>

        {/* MANEX teaser */}
        <section className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">POUR ALLER PLUS LOIN</div>
            <h2 className="text-2xl font-bold mb-2">Obtenez votre MANEX en quelques minutes</h2>
            <p className="text-sm text-gray-300 mb-2 font-semibold">MANUEL D&apos;EXPLOITATION OBLIGATOIRE</p>
            <div className="text-4xl font-extrabold text-orange-400 mb-1">199€ <span className="text-base font-normal text-gray-400">TTC</span></div>
            <p className="text-xs text-gray-400 mb-4">de 98,20€ sans frais</p>
            <p className="text-gray-300 mb-2 text-sm">Document obligatoire pour toute exploitation professionnelle. Personnalisable selon votre activité.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              {["✓ Simple, rapide et modifiable !", "✓ Conforme réglementation EASA", "✓ Livraison 72h", "✓ Personnalisable"].map(f => (
                <span key={f} className="text-green-400">{f}</span>
              ))}
            </div>
            <Link href="/outils/manex" className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">Générer mon MANEX</Link>
          </div>
        </section>

        {/* Paiement */}
        <section className="py-10 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm mb-4">💳 Paiement 100% sécurisé · 3× ou 4× sans frais</p>
            <div className="flex flex-wrap justify-center gap-3 text-gray-400 text-sm">
              {["VISA", "Mastercard", "PayPal", "Stripe", "Google Pay", "Apple Pay"].map(p => (
                <span key={p} className="border border-gray-200 rounded px-3 py-1 text-xs font-medium">{p}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">📞 04 30 96 81 86 · Données certifiées SSL · Conforme RGPD</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-6 text-sm text-gray-500">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["FAQ", "CGV – CGU", "CGV – CGU Partenaire", "Données personnelles", "Handicap", "Actualités", "Plan du site"].map(l => (
                <a key={l} href="#" className="hover:text-orange-500 transition-colors">{l}</a>
              ))}
            </div>
            <div className="text-xs text-gray-400">
              <a href="mailto:contact@certifdrone.fr" className="hover:text-orange-500">contact@certifdrone.fr</a>
              <br />Mentions légales · copyright 2026
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
