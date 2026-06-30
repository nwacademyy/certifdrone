import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CertifDrone.fr — Préparation et Examens Drone en ligne | Formation, Cours & QCM 2026",
  description: "Préparez et passez votre examen drone BAPD A1-A3, BAPD A2 et STS (CATS) en ligne. 3500+ QCM, cours conformes EASA, examen officiel européen RDW via EuroUSC-Benelux. 98% de taux de réussite.",
  keywords: "examen drone, BAPD, CATS, STS, télépilote, formation drone en ligne, EASA, RDW, QCM drone, catégorie ouverte, catégorie spécifique, STS-01, STS-02, A1, A2, A3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
