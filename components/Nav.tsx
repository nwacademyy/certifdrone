"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [examOpen, setExamOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">CD</div>
          <span className="font-bold text-gray-800 text-sm hidden sm:block">CertifDrone.fr</span>
        </Link>
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <div className="relative" onMouseEnter={() => setExamOpen(true)} onMouseLeave={() => setExamOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 hover:text-orange-500 transition-colors">
              Les examens <span className="text-xs">▾</span>
            </button>
            {examOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl shadow-lg py-2 w-64 z-50">
                <Link href="/formations/bapd" className="flex flex-col px-4 py-3 hover:bg-orange-50 transition-colors">
                  <span className="font-semibold text-gray-800">Catégorie Open Europe</span>
                  <span className="text-xs text-gray-500">BAPD A1-A3 • à partir de 29,90€</span>
                </Link>
                <Link href="/formations/a2" className="flex flex-col px-4 py-3 hover:bg-orange-50 transition-colors">
                  <span className="font-semibold text-gray-800">BAPD A2 — Examen officiel</span>
                  <span className="text-xs text-gray-500">Diplôme européen RDW • 79€</span>
                </Link>
                <Link href="/formations/cats" className="flex flex-col px-4 py-3 hover:bg-orange-50 transition-colors">
                  <span className="font-semibold text-gray-800">Catégorie Spécifique Europe</span>
                  <span className="text-xs text-gray-500">STS CATS • à partir de 49,90€</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/outils/manex" className="px-3 py-2 hover:text-orange-500 transition-colors">Manex</Link>
          <Link href="/tarifs" className="px-3 py-2 hover:text-orange-500 transition-colors">Tarifs</Link>
          <Link href="/partenaires" className="px-3 py-2 hover:text-orange-500 transition-colors">Partenaires</Link>
          <Link href="/connexion" className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm">Connexion</Link>
          <Link href="/inscription" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-colors text-sm">Inscription</Link>
        </div>
      </div>
    </nav>
  );
}
