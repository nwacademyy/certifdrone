"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [examOpen, setExamOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">CD</div>
          <span className="font-bold text-gray-800 text-sm hidden sm:block">CertifDrone.fr</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700">
          <div className="relative" onMouseEnter={() => setExamOpen(true)} onMouseLeave={() => setExamOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 hover:text-violet-600 transition-colors">
              Les examens <span className="text-xs">▾</span>
            </button>
            {examOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl shadow-lg py-2 w-64 z-50">
                <Link href="/formations/bapd" className="flex flex-col px-4 py-3 hover:bg-violet-50 transition-colors">
                  <span className="font-semibold text-gray-800">Catégorie Open Europe</span>
                  <span className="text-xs text-gray-500">BAPD A1-A3 • à partir de 29,90€</span>
                </Link>
                <Link href="/formations/a2" className="flex flex-col px-4 py-3 hover:bg-violet-50 transition-colors">
                  <span className="font-semibold text-gray-800">BAPD A2 — Examen officiel</span>
                  <span className="text-xs text-gray-500">Diplôme européen RDW • 79€</span>
                </Link>
                <Link href="/formations/cats" className="flex flex-col px-4 py-3 hover:bg-violet-50 transition-colors">
                  <span className="font-semibold text-gray-800">Catégorie Spécifique Europe</span>
                  <span className="text-xs text-gray-500">STS CATS • à partir de 49,90€</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/outils/manex" className="px-3 py-2 hover:text-violet-600 transition-colors">Manex</Link>
          <Link href="/tarifs" className="px-3 py-2 hover:text-violet-600 transition-colors">Tarifs</Link>
          <Link href="/connexion" className="ml-2 px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors">Connexion</Link>
          <Link href="/inscription" className="px-4 py-2 border border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 transition-colors">Inscription</Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 text-sm font-medium text-gray-700 shadow-lg">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider px-2 mb-1">Examens</p>
          <Link href="/formations/bapd" onClick={close} className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-violet-50">
            <span className="font-semibold text-gray-800">Catégorie Open — BAPD</span>
            <span className="text-xs text-gray-500">A1/A3 et A2 • 29,90€</span>
          </Link>
          <Link href="/formations/a2" onClick={close} className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-violet-50">
            <span className="font-semibold text-gray-800">BAPD A2 — Examen officiel</span>
            <span className="text-xs text-gray-500">Diplôme européen RDW • 79€</span>
          </Link>
          <Link href="/formations/cats" onClick={close} className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-violet-50">
            <span className="font-semibold text-gray-800">Catégorie Spécifique — CATS</span>
            <span className="text-xs text-gray-500">STS-01 / STS-02 • 49,90€</span>
          </Link>
          <div className="border-t border-gray-100 my-2" />
          <Link href="/outils/manex" onClick={close} className="px-3 py-2.5 rounded-lg hover:bg-violet-50">Manex</Link>
          <Link href="/tarifs" onClick={close} className="px-3 py-2.5 rounded-lg hover:bg-violet-50">Tarifs</Link>
          <div className="flex gap-2 mt-3">
            <Link href="/connexion" onClick={close} className="flex-1 text-center py-2.5 bg-violet-600 text-white rounded-full font-semibold text-sm hover:bg-violet-700 transition-colors">Connexion</Link>
            <Link href="/inscription" onClick={close} className="flex-1 text-center py-2.5 border border-violet-600 text-violet-600 rounded-full font-semibold text-sm hover:bg-violet-50 transition-colors">Inscription</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
