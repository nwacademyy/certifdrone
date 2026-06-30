import Link from "next/link";
import Nav from "@/components/Nav";

export default function Tarifs() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Une tarification <span className="text-orange-500">adaptée</span><br />
                pour vos <span className="text-orange-500">examens drone</span>
              </h1>
              <p className="text-gray-600">
                Que vous soyez futur télépilote <strong>loisir</strong> ou <strong>professionnel</strong>,<br />
                nos cours et QCM drone s&apos;adaptent à vos besoins
              </p>
              <Link href="/inscription" className="inline-block mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">Inscription</Link>
            </div>
            <div className="bg-white rounded-2xl border border-orange-200 p-6 shadow-md max-w-sm w-full text-center">
              <h2 className="font-bold text-gray-800 mb-2">Profitez d&apos;un accès <span className="text-orange-500">complet</span> !</h2>
              <p className="text-sm text-gray-600 mb-4">Profitez d&apos;un accès à nos Cours, QCM, Fiches de révision et notre support en ligne à partir de <strong className="text-orange-500">29,90€</strong>.</p>
              <Link href="/formations/bapd" className="block text-center border-2 border-orange-500 text-orange-500 font-semibold py-2 rounded-full hover:bg-orange-50 transition-colors text-sm">Voir nos offres</Link>
            </div>
          </div>
        </section>

        {/* Formations seules */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Formations · Préparation aux examens</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* BAPD */}
              <div className="border-2 border-gray-200 rounded-2xl p-6 flex flex-col">
                <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Catégorie Open Europe</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">BAPD A1-A3 &amp; A2</h3>
                <div className="text-4xl font-extrabold text-orange-500 mb-1">29,90€</div>
                <p className="text-xs text-gray-400 mb-4">TVA incluse</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                  {["À jour 2026", "Cours et audio", "+700 QCM", "Fiches de révision", "Examens blancs"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/bapd" className="block text-center border-2 border-orange-500 text-orange-500 font-semibold py-3 rounded-full hover:bg-orange-50 transition-colors text-sm">Découvrir</Link>
              </div>
              {/* CATS */}
              <div className="bg-orange-500 rounded-2xl p-6 flex flex-col shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">⭐ LE PLUS CHOISI</div>
                <div className="text-xs font-semibold text-orange-100 uppercase mb-1">Catégorie Spécifique Europe</div>
                <h3 className="text-xl font-bold text-white mb-3">STS CATS</h3>
                <div className="text-4xl font-extrabold text-white mb-1">49,90€</div>
                <p className="text-xs text-orange-100 mb-4">TVA incluse</p>
                <ul className="space-y-2 text-sm text-white mb-6 flex-1">
                  {["À jour 2026", "Cours et audio", "+800 QCM", "Fiches de révision", "Examens blancs"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-yellow-300">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/cats" className="block text-center bg-white text-orange-500 font-semibold py-3 rounded-full hover:bg-orange-50 transition-colors text-sm">Découvrir</Link>
              </div>
              {/* Pack formations */}
              <div className="border-2 border-green-300 rounded-2xl p-6 flex flex-col bg-green-50">
                <div className="text-xs font-semibold text-green-600 uppercase mb-1">Pack Open + Spécifique</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pack FULL Formation</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-orange-500">69,80€</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Économisez 10€</span>
                  <span className="text-gray-400 line-through">79,80€</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4 border-t border-green-200 pt-4">
                  <span className="font-semibold">BAPD <span className="text-orange-500">29,90€</span></span>
                  <span>+</span>
                  <span className="font-semibold">CATS <span className="text-orange-500">49,90€</span></span>
                  <span>=</span>
                  <span className="font-bold text-green-700">69,80€</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                  {["Accès BAPD A1-A3 & A2 complet", "Accès CATS STS complet", "+1500 QCM au total"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/inscription" className="block text-center bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition-colors text-sm">Démarrer l&apos;entraînement</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Examens officiels */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Examens officiels</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Diplôme européen officiel émis par les autorités néerlandaises (RDW) via notre partenaire exclusif EuroUSC-Benelux · 5 passages inclus · Valable 5 ans</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* BAPD A2 exam */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <div className="text-xs text-gray-400 mb-1">Présentez votre diplôme</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">BAPD A2 en ligne</h3>
                <div className="text-xs font-semibold text-orange-500 mb-3">FORMATION + EXAMEN OFFICIEL RDW</div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">
                  79€ <span className="text-base font-normal text-gray-400">TTC</span>
                  <span className="block text-sm text-gray-500 font-normal mt-1">Examen seul · ou 98,90€ avec formation</span>
                </div>
                <p className="text-xs text-gray-400 mb-1">98,90€ · ou 4× 24,72€ sans frais</p>
                <p className="text-xs text-orange-500 font-medium mb-4">Bénéficiez de 5 passages inclus !</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  {["5 passages inclus", "Entraînement en ligne", "Paiement sécurisé", "Délivré par la RDW", "Reconnu en Europe", "Valable 5 ans"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/a2" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">Passer l&apos;examen →</Link>
              </div>
              {/* CATS exam */}
              <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                <div className="text-xs text-gray-400 mb-1">Présentez votre diplôme</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">STS (CATS) en ligne</h3>
                <div className="text-xs font-semibold text-orange-500 mb-3">FORMATION + EXAMEN OFFICIEL RDW</div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">
                  190€ <span className="text-base font-normal text-gray-400">TTC</span>
                  <span className="block text-sm text-gray-500 font-normal mt-1">Examen seul · ou 239,90€ avec formation</span>
                </div>
                <p className="text-xs text-gray-400 mb-1">239,90€ · ou 4× 59,97€ sans frais</p>
                <p className="text-xs text-orange-500 font-medium mb-4">Bénéficiez de 5 passages inclus !</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  {["5 passages inclus", "Entraînement en ligne", "Paiement sécurisé", "Délivré par la RDW", "Reconnu en Europe", "Valable 5 ans"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange-400">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/formations/cats" className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">Passer l&apos;examen →</Link>
              </div>
            </div>

            {/* Pack complet 299€ */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">✦ PACK COMPLET · LE PLUS AVANTAGEUX</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Les 2 certifications réunies : STS (CATS) + BAPD A2</h3>
              <p className="text-sm text-gray-600 mb-4">TOUT INCLUS · LE COMBO MALIN</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6 text-sm text-gray-700">
                <div className="bg-white rounded-xl p-4">
                  <div className="font-semibold mb-1">✓ Examen officiel STS (CATS)</div>
                  <div className="text-gray-400 text-xs">+ QCM d&apos;entraînement</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-semibold mb-1">✓ Examen officiel BAPD A2</div>
                  <div className="text-gray-400 text-xs">+ QCM d&apos;entraînement</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-semibold mb-1">✓ 5 passages inclus</div>
                  <div className="text-gray-400 text-xs">sur chaque examen</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-gray-400 line-through text-xl">345,80€</span>
                <span className="text-5xl font-extrabold text-orange-500">299€</span>
                <span className="text-gray-500">TTC</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">ou 4× 74,79€ sans frais · 15 passages dont 48,80€ offerts automatiquement</p>
              <Link href="/inscription" className="inline-block bg-orange-500 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition-colors text-lg">Ajouter le pack au panier →</Link>
              <p className="text-xs text-gray-400 mt-3">Paiement 100% sécurisé · Accès immédiat</p>
            </div>
          </div>
        </section>

        {/* MANEX */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto border-2 border-blue-200 rounded-2xl p-8 text-center bg-blue-50">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">POUR ALLER PLUS LOIN</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Obtenez votre MANEX en quelques minutes</h2>
            <p className="text-xs font-semibold text-gray-500 mb-3">MANUEL D&apos;EXPLOITATION OBLIGATOIRE</p>
            <div className="text-4xl font-extrabold text-orange-500 mb-1">199€ <span className="text-base font-normal text-gray-400">TTC</span></div>
            <p className="text-xs text-gray-400 mb-4">de 98,20€ sans frais</p>
            <p className="text-sm text-gray-600 mb-4">Document obligatoire pour toute exploitation professionnelle. Personnalisable selon votre activité.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 mb-6">
              {["✓ Conforme réglementation EASA", "✓ Livraison 48h", "✓ Personnalisable"].map(f => <span key={f}>{f}</span>)}
            </div>
            <Link href="/outils/manex" className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">Générer mon MANEX →</Link>
          </div>
        </section>

        {/* Paiement */}
        <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 font-medium mb-4">💳 Paiement 100% sécurisé · 3× ou 4× sans frais</p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {["VISA", "Mastercard", "PayPal", "Stripe", "Google Pay", "Apple Pay"].map(p => (
                <span key={p} className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-white">{p}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Un doute sur la qualification drone qu&apos;il vous faut ?</p>
            <a href="tel:0430968186" className="inline-block mt-2 text-orange-500 font-bold text-lg hover:text-orange-600">📞 04 30 96 81 86</a>
            <p className="text-xs text-gray-400 mt-2">Données certifiées SSL · Certifié ISO 005 · Conforme RGPD</p>
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
