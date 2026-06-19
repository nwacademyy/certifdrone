import Link from "next/link";
import {
  CheckCircle,
  Star,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚁</span>
            <span className="font-bold text-xl text-sky-600">CertifDrone.fr</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/formations" className="hover:text-sky-600 transition-colors">Formations</Link>
            <Link href="/examens" className="hover:text-sky-600 transition-colors">Examens</Link>
            <Link href="/tarifs" className="hover:text-sky-600 transition-colors">Tarifs</Link>
            <Link href="/qcm" className="hover:text-sky-600 transition-colors">QCM Gratuit</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/connexion" className="text-sm font-medium text-slate-600 hover:text-sky-600">
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap size={14} />
              Examen officiel européen 100% en ligne
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Obtenez votre{" "}
              <span className="text-sky-600">certification drone</span>{" "}
              en ligne
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              BAPD · A2 · CATS (STS) — Préparez-vous avec nos QCM et cours, puis passez l&apos;examen officiel européen depuis chez vous.
              Certifié valable dans toute l&apos;UE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
              >
                Commencer gratuitement
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/qcm"
                className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Tester les QCM
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              ✓ Sans carte bancaire &nbsp;·&nbsp; ✓ 50 questions gratuites &nbsp;·&nbsp; ✓ Résultats immédiats
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "3 500+", label: "Questions officielles" },
              { value: "95%", label: "Taux de réussite" },
              { value: "4.9/5", label: "Note moyenne" },
              { value: "100%", label: "En ligne" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
                <div className="text-3xl font-extrabold text-sky-600 mb-1">{s.value}</div>
                <div className="text-sm text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Toutes les certifications en un seul endroit</h2>
            <p className="text-slate-500 text-lg">Choisissez votre parcours, nous vous guidons jusqu&apos;au certificat officiel.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "Open A1/A3",
                color: "bg-green-50 border-green-200",
                badgeColor: "bg-green-100 text-green-700",
                icon: "🟢",
                title: "BAPD — Catégorie Open",
                desc: "Le certificat de base pour voler en catégorie ouverte. 40 questions, gratuit via DGAC.",
                features: ["40 QCM officiels", "Accès ALPHATANGO", "Valable à vie"],
                price: "Gratuit",
                priceNote: "examen officiel DGAC",
                href: "/formations/bapd",
              },
              {
                badge: "Open A2",
                color: "bg-blue-50 border-blue-200",
                badgeColor: "bg-blue-100 text-blue-700",
                icon: "🔵",
                title: "CATT — Certificat A2",
                desc: "Pour voler près des personnes avec des drones de moins de 4 kg en catégorie A2.",
                features: ["Formation complète", "Examen en ligne", "Certificat européen"],
                price: "À partir de 49€",
                priceNote: "formation + examen",
                href: "/formations/a2",
              },
              {
                badge: "Spécifique STS",
                color: "bg-orange-50 border-orange-200",
                badgeColor: "bg-orange-100 text-orange-700",
                icon: "🟠",
                title: "CATS — Catégorie Spécifique",
                desc: "Le certificat professionnel pour les missions complexes (STS-01, STS-02). Obligatoire pour les pros.",
                features: ["STS-01 & STS-02", "Examen officiel UE", "Valable 5 ans en Europe"],
                price: "À partir de 189€",
                priceNote: "formation + examen officiel",
                href: "/formations/cats",
                highlighted: true,
              },
            ].map((cert) => (
              <div
                key={cert.badge}
                className={`rounded-2xl border-2 p-8 ${cert.color} ${cert.highlighted ? "ring-2 ring-sky-400 shadow-lg" : ""} relative`}
              >
                {cert.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cert.icon}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{cert.desc}</p>
                <ul className="space-y-2 mb-8">
                  {cert.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={16} className="text-sky-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-extrabold text-slate-900">{cert.price}</span>
                  <p className="text-xs text-slate-500 mt-1">{cert.priceNote}</p>
                </div>
                <Link
                  href={cert.href}
                  className="block text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Voir la formation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comment ça marche ?</h2>
            <p className="text-slate-500 text-lg">Du zéro au certificat officiel en 4 étapes simples.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: <BookOpen size={28} />, title: "Suivez les cours", desc: "Modules vidéo et fiches résumées par thème, conformes au programme EASA officiel." },
              { step: "02", icon: <Zap size={28} />, title: "Entraînez-vous", desc: "Plus de 3 500 QCM avec corrections détaillées et statistiques de progression." },
              { step: "03", icon: <Award size={28} />, title: "Passez l'examen", desc: "Examen officiel 100% en ligne depuis chez vous. Résultat immédiat." },
              { step: "04", icon: <Globe size={28} />, title: "Volez partout en UE", desc: "Votre certificat EASA est valable dans tous les pays membres de l'UE pendant 5 ans." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sky-600 text-white rounded-2xl flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Pourquoi choisir CertifDrone.fr ?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="text-sky-600" size={24} />, title: "Examen officiel reconnu", desc: "L'examen CATS est délivré par un organisme agréé par les autorités néerlandaises (ILT), reconnu dans toute l'UE." },
                  { icon: <Zap className="text-sky-600" size={24} />, title: "100% en ligne, 100% flexible", desc: "Étudiez à votre rythme depuis votre téléphone ou ordinateur. Passez l'examen quand vous êtes prêt." },
                  { icon: <Users className="text-sky-600" size={24} />, title: "Tentatives incluses", desc: "Plusieurs tentatives à l'examen incluses. On vous accompagne jusqu'à la réussite." },
                  { icon: <Star className="text-sky-600" size={24} />, title: "Contenu expert", desc: "Questions rédigées par des instructeurs certifiés, alignées sur les dernières normes EASA 2025/2026." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-10 text-white">
              <div className="text-5xl font-extrabold mb-2">95%</div>
              <p className="text-sky-100 mb-8">de taux de réussite à l&apos;examen officiel</p>
              <div className="space-y-4">
                {[
                  "✓ Cours conformes au programme EASA 2019/947",
                  "✓ QCM mis à jour régulièrement",
                  "✓ Corrections détaillées avec références réglementaires",
                  "✓ Simulateur d'examen blanc illimité",
                  "✓ Support par email sous 24h",
                ].map((item) => (
                  <p key={item} className="text-sky-100 text-sm">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ce que disent nos apprenants</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Thomas M.", city: "Lyon", cert: "CATS STS-01", note: "5/5", text: "J'ai obtenu mon CATS du premier coup après 3 semaines de préparation avec CertifDrone. Les QCM sont vraiment représentatifs de l'examen officiel. Je recommande !" },
              { name: "Sophie L.", city: "Bordeaux", cert: "A2 CATT", note: "5/5", text: "Interface super intuitive, cours clairs et synthétiques. J'avais peur de l'examen théorique mais avec leurs simulations c'était beaucoup moins stressant." },
              { name: "Marc R.", city: "Paris", cert: "CATS STS-01 & STS-02", note: "5/5", text: "Parfait pour les pros. J'ai passé STS-01 et STS-02 en même temps. Support réactif et le certificat est arrivé rapidement. Excellent." },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-slate-500 text-sm ml-2">{t.note}</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600 text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.city} · {t.cert}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-sky-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Prêt à décrocher votre certification drone ?
          </h2>
          <p className="text-sky-100 text-lg mb-10">
            Commencez gratuitement avec 50 QCM. Sans carte bancaire.
          </p>
          <Link
            href="/inscription"
            className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-flex items-center gap-2"
          >
            Commencer maintenant
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚁</span>
                <span className="font-bold text-white">CertifDrone.fr</span>
              </div>
              <p className="text-sm leading-relaxed">
                La plateforme française de référence pour la certification des télépilotes de drones.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Formations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/formations/bapd" className="hover:text-white transition-colors">BAPD — Open A1/A3</Link></li>
                <li><Link href="/formations/a2" className="hover:text-white transition-colors">CATT — Open A2</Link></li>
                <li><Link href="/formations/cats" className="hover:text-white transition-colors">CATS — Spécifique STS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/qcm" className="hover:text-white transition-colors">QCM Gratuits</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
                <li><Link href="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
                <li><Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2026 CertifDrone.fr — Tous droits réservés</p>
            <p className="text-sm">
              Examen officiel délivré par un organisme agréé ILT (Pays-Bas) · Valable dans toute l&apos;UE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
