import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚁</span>
            <span className="font-bold text-xl text-sky-600">CertifDrone.fr</span>
          </Link>
          <Link href="/inscription" className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Commencer gratuitement
          </Link>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Tarifs clairs, sans surprise</h1>
            <p className="text-slate-500 text-lg">Choisissez votre certification. Payez une fois.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "🟢 Open A1/A3",
                name: "BAPD",
                price: "Gratuit",
                sub: "examen DGAC gratuit",
                features: [
                  "50 QCM gratuits",
                  "Cours d'introduction",
                  "Lien vers AlphaLiens DGAC",
                  "Examen officiel gratuit sur Alphatango",
                ],
                cta: "Commencer gratuitement",
                href: "/qcm",
                style: "border-slate-200",
              },
              {
                badge: "🔵 Open A2",
                name: "CATT",
                price: "79€",
                sub: "formation + examen",
                features: [
                  "Cours complets A2",
                  "500+ QCM thématiques",
                  "3 examens blancs",
                  "Examen officiel inclus",
                  "2 tentatives",
                  "Certificat européen",
                ],
                cta: "Obtenir mon A2",
                href: "/inscription?pack=exam-a2",
                style: "border-slate-200",
              },
              {
                badge: "🟠 Spécifique STS",
                name: "CATS",
                price: "189€",
                sub: "formation + examen officiel",
                features: [
                  "Cours complets STS-01 & STS-02",
                  "1 500+ QCM thématiques",
                  "5 examens blancs",
                  "Examen officiel EASA",
                  "3 tentatives incluses",
                  "Certificat PDF valable 5 ans en UE",
                  "Support prioritaire",
                ],
                cta: "Obtenir mon CATS",
                href: "/inscription?pack=exam-cats",
                style: "border-sky-500 shadow-lg",
                highlighted: true,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border-2 p-8 ${plan.style}`}>
                {plan.highlighted && (
                  <div className="bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAIRE</div>
                )}
                <div className="text-sm font-bold mb-3">{plan.badge}</div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">{plan.name}</h2>
                <div className="text-3xl font-extrabold text-sky-600 mb-1">{plan.price}</div>
                <p className="text-slate-400 text-xs mb-6">{plan.sub}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block text-center font-bold py-3 rounded-xl transition-colors ${
                    plan.highlighted
                      ? "bg-sky-600 hover:bg-sky-700 text-white"
                      : "border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {plan.cta} <ArrowRight className="inline ml-1" size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Questions fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "Puis-je payer en plusieurs fois ?", r: "Oui, le paiement en 3x sans frais est disponible pour les formules à partir de 79€." },
                { q: "Le certificat est-il reconnu en France ?", r: "Oui. Le CATS est délivré par un organisme agréé ILT (Pays-Bas) et reconnu dans toute l'UE incluant la France, conformément à EASA." },
                { q: "Que se passe-t-il si j'échoue à l'examen ?", r: "Plusieurs tentatives sont incluses selon la formule. Entre deux tentatives, un délai de 14 jours est requis." },
                { q: "L'accès au cours est valable combien de temps ?", r: "90 jours pour la préparation seule, 6 mois pour la formule complète." },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl p-5 border border-slate-100">
                  <p className="font-semibold text-slate-900 mb-2 text-sm">{item.q}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
