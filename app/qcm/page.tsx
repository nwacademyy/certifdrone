"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { questions, type Question } from "@/lib/questions";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Filter } from "lucide-react";

type Category = "all" | "bapd" | "a2" | "cats";

const CATEGORY_LABELS: Record<Category, string> = {
  all: "Toutes catégories",
  bapd: "BAPD — Open A1/A3",
  a2: "CATT — Open A2",
  cats: "CATS — Spécifique STS",
};

const CATEGORY_COLORS: Record<string, string> = {
  bapd: "bg-green-100 text-green-700",
  a2: "bg-blue-100 text-blue-700",
  cats: "bg-orange-100 text-orange-700",
};

export default function QCMPage() {
  const [category, setCategory] = useState<Category>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffled, setShuffled] = useState<Question[]>(() =>
    [...questions].sort(() => Math.random() - 0.5)
  );

  const filtered = category === "all" ? shuffled : shuffled.filter((q) => q.category === category);

  const current = filtered[currentIndex];

  const restart = useCallback((cat: Category) => {
    setCategory(cat);
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(0);
    setFinished(false);
    setShuffled([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    setAnswered((a) => a + 1);
    if (idx === current.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= filtered.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  if (finished) {
    const pct = Math.round((score / answered) * 100);
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center">
          <Trophy size={56} className="text-yellow-400 mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Résultat</h1>
          <div className={`text-6xl font-extrabold mb-2 ${pct >= 75 ? "text-green-500" : "text-red-500"}`}>
            {pct}%
          </div>
          <p className="text-slate-500 mb-2">{score} / {answered} bonnes réponses</p>
          {pct >= 75 ? (
            <p className="text-green-600 font-semibold mb-8">🎉 Excellent ! Vous êtes prêt(e) pour l&apos;examen.</p>
          ) : (
            <p className="text-orange-600 font-semibold mb-8">📚 Continuez à vous entraîner, vous progressez !</p>
          )}
          <div className="space-y-3">
            <button
              onClick={() => restart(category)}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} /> Recommencer
            </button>
            <Link
              href="/formations/cats"
              className="w-full border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Voir les formations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Aucune question pour cette catégorie.</p>
          <button onClick={() => restart("all")} className="text-sky-600 font-semibold">Voir toutes les catégories</button>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / filtered.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🚁</span>
            <span className="font-bold text-sky-600">CertifDrone.fr</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-500">Score : <strong className="text-slate-900">{score}/{answered}</strong></span>
            <span className="text-slate-500">{currentIndex + 1}/{filtered.length}</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-slate-100">
          <div className="h-1 bg-sky-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Filter size={16} className="text-slate-400 self-center" />
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => restart(cat)}
              className={`text-sm px-4 py-1.5 rounded-full font-medium transition-colors ${
                category === cat
                  ? "bg-sky-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-sky-400"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[current.category]}`}>
              {CATEGORY_LABELS[current.category]}
            </span>
            <span className="text-xs text-slate-400 font-medium">{current.theme}</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-8 leading-relaxed">{current.question}</h2>

          <div className="space-y-3">
            {current.options.map((opt, idx) => {
              let cls = "border-2 border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-400 hover:bg-sky-50";
              if (selected !== null) {
                if (idx === current.answer) cls = "border-2 border-green-500 bg-green-50 text-green-800";
                else if (idx === selected && selected !== current.answer)
                  cls = "border-2 border-red-400 bg-red-50 text-red-800";
                else cls = "border-2 border-slate-200 bg-slate-50 text-slate-400";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm font-medium transition-all ${cls} flex items-center gap-3`}
                >
                  <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                  {selected !== null && idx === current.answer && (
                    <CheckCircle size={18} className="ml-auto text-green-500 flex-shrink-0" />
                  )}
                  {selected !== null && idx === selected && selected !== current.answer && (
                    <XCircle size={18} className="ml-auto text-red-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`rounded-2xl p-6 mb-6 border-2 ${selected === current.answer ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}>
            <div className="flex items-center gap-2 mb-3">
              {selected === current.answer
                ? <CheckCircle size={20} className="text-green-600" />
                : <XCircle size={20} className="text-orange-600" />}
              <span className={`font-bold text-sm ${selected === current.answer ? "text-green-700" : "text-orange-700"}`}>
                {selected === current.answer ? "Bonne réponse !" : "Mauvaise réponse"}
              </span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">{current.explanation}</p>
          </div>
        )}

        {/* Next button */}
        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
          >
            {currentIndex + 1 >= filtered.length ? "Voir mes résultats" : "Question suivante"}
            <ArrowRight size={20} />
          </button>
        )}

        {/* Upsell */}
        {currentIndex >= 5 && selected === null && (
          <div className="mt-8 bg-sky-50 border border-sky-200 rounded-2xl p-6 text-center">
            <p className="text-sky-800 font-semibold mb-2">🎓 Envie d&apos;accéder aux 3 500+ questions ?</p>
            <p className="text-sky-600 text-sm mb-4">Avec un compte, accédez à toutes les questions, vos statistiques et l&apos;examen officiel.</p>
            <Link href="/inscription" className="bg-sky-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-700 transition-colors">
              Créer un compte gratuit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
