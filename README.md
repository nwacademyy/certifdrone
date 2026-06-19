# CertifDrone.fr

Plateforme de certification drone en ligne — BAPD, A2, CATS (STS).

## Stack
- Next.js 15 + TypeScript
- Tailwind CSS
- Déployé sur Vercel

## Pages
- `/` — Landing page
- `/qcm` — QCM interactif (BAPD / A2 / CATS)
- `/formations/cats` — Formation CATS détaillée
- `/tarifs` — Grille tarifaire
- `/inscription` — Création de compte

## Déploiement
\`\`\`bash
npm install
npm run dev        # local
npm run build      # vérifier le build
\`\`\`
Puis connecter le repo GitHub à Vercel.

## Prochaines étapes
- [ ] Auth (Supabase ou Clerk)
- [ ] Paiement (Stripe)
- [ ] Intégration examen officiel (partenaire ILT)
- [ ] Dashboard apprenant
- [ ] 3500+ questions en base de données
