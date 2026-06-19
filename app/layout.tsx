import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CertifDrone.fr — Préparez et passez votre examen drone en ligne",
  description: "Préparez votre BAPD, CATT, A2 et CATS (STS) en ligne. QCM illimités, cours vidéo, examen officiel européen. Certifié conforme EASA.",
  keywords: "examen drone, CATS, BAPD, CATT, A2, STS, télépilote, drone, formation drone en ligne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
