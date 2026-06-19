import Link from "next/link";
import { CheckCircle, Shield, Clock, Globe, Award, ArrowRight, Users } from "lucide-react";

export default function CATSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚁</span>
            <span className="font-bold text-xl text-sky-600">CertifDrone.fr</span>
          </Link>
          <Link href="/inscription" className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Commencer
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
            🟠 Catégorie Spécifique STS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Formation CATS — Certificat d&apos;Aptitude Théorique Spécifique
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Le certificat professionnel obligatoire pour voler en catégorie Spécifique (STS-01 & STS-02). 
            Formation en ligne + examen officiel européen reconnu dans toute l&apos;UE.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <Clock size={16} className="text-sky-500" /> 15-20h de formation
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <Globe size={16} className="text-sky-500" /> Valable 5 ans dans toute l&apos;UE
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <Shield size={16} className="text-sky-500" /> Examen 100% en ligne
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <Users size={16} className="text-sky-500" /> 3 tentatives incluses
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Choisissez votre formule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Préparation seule",
                price: "49€",
                desc: "Accès à tout le contenu de préparation. Passez l'examen officiel séparément.",
                features: [
                  "Cours vidéo complets STS-01 & STS-02",
                  "1 500+ QCM thématiques CATS",
                  "5 examens blancs chronométrés",
                  "Fiches de révision PDF",
                  "Accès 90 jours",
                ],
                cta: "Commencer la préparation",
                href: "/inscription?pack=prep-cats",
                highlighted: false,
              },
              {
                name: "Préparation + Examen officiel",
                price: "189€",
                desc: "La formule complète : formation + examen officiel EASA reconnu dans toute l'UE.",
                features: [
                  "Tout le contenu Préparation",
                  "Examen théorique officiel (30 questions)",
                  "3 tentatives à l'examen incluses",
                  "Certificat CATS PDF officiel",
                  "Valable 5 ans en Europe",
                  "Support prioritaire",
                ],
                cta: "Obtenir mon CATS",
                href: "/inscription?pack=exam-cats",
                highlighted: true,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border-2 p-8 ${plan.highlighted ? "border-sky-500 shadow-lg" : "border-slate-200"}`}>
                {plan.highlighted && (
                  <div className="bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
                    RECOMMANDÉ
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
                <div className="text-4xl font-extrabold text-slate-900 mb-8">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={16} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block text-center font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? "bg-sky-600 hover:bg-sky-700 text-white"
                      : "border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Programme de formation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { module: "Module 1", title: "Réglementation européenne et nationale", desc: "Règlement (EU) 2019/947, catégories, STS-01, STS-02, déclaration opérationnelle, obligations de l'opérateur." },
              { module: "Module 2", title: "Sécurité opérationnelle", desc: "Gestion des risques, procédures normales et d'urgence, contingency, manuel d'opérations." },
              { module: "Module 3", title: "Espace aérien et ATC", desc: "Structure de l'espace aérien, zones géographiques UAS, coordination avec le contrôle aérien." },
              { module: "Module 4", title: "Météorologie appliquée", desc: "METAR, TAF, phénomènes dangereux, effets du vent sur les opérations drone." },
              { module: "Module 5", title: "Performances et limites de l'UAS", desc: "Classes C5/C6, systèmes de terminaison de vol, parachute, endurance, facteurs limitants." },
              { module: "Module 6", title: "Facteurs humains", desc: "Gestion de la charge de travail, biais cognitifs, fatigue, CRM (Crew Resource Management) appliqué aux drones." },
            ].map((m) => (
              <div key={m.module} className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="text-xs font-bold text-sky-600 mb-2">{m.module}</div>
                <h3 className="font-bold text-slate-900 mb-2">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award size={28} className="text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">L&apos;examen officiel CATS</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                { label: "Format", value: "30 questions QCM" },
                { label: "Durée", value: "45 minutes" },
                { label: "Score requis", value: "75% minimum" },
                { label: "Mode", value: "100% en ligne" },
                { label: "Résultat", value: "Immédiat" },
                { label: "Certificat", value: "PDF officiel sous 24h" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 text-center border border-orange-100">
                  <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                  <p className="font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sky-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Prêt à obtenir votre CATS ?</h2>
          <p className="text-sky-100 mb-8">Commencez la formation aujourd&apos;hui, passez l&apos;examen quand vous êtes prêt.</p>
          <Link href="/inscription?pack=exam-cats" className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2">
            Obtenir mon CATS — 189€ <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
