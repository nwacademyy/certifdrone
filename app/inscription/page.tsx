"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center">
          <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Compte créé !</h1>
          <p className="text-slate-500 mb-8">Bienvenue {form.name}. Vérifiez votre email pour confirmer votre compte.</p>
          <Link href="/qcm" className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-3 rounded-xl inline-block">
            Commencer les QCM
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center gap-2 justify-center mb-4">
            <span className="text-3xl">🚁</span>
            <span className="font-bold text-2xl text-sky-600">CertifDrone.fr</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900">Créer un compte gratuit</h1>
          <p className="text-slate-500 mt-2 text-sm">50 QCM offerts, sans carte bancaire</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom et nom</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                placeholder="jean@exemple.fr"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mot de passe</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-sky-400 focus:outline-none transition-colors"
                placeholder="8 caractères minimum"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              Créer mon compte gratuit
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            En créant un compte, vous acceptez nos{" "}
            <Link href="/cgv" className="text-sky-600 hover:underline">CGV</Link>{" "}
            et notre{" "}
            <Link href="/confidentialite" className="text-sky-600 hover:underline">politique de confidentialité</Link>.
          </p>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Déjà un compte ?{" "}
          <Link href="/connexion" className="text-sky-600 font-semibold hover:underline">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
