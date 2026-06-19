"use client";

import { useState, useEffect } from "react";
import { questions, Question } from "@/lib/questions";
import { Trophy, RotateCcw, ChevronRight, BookOpen, AlertCircle, Target } from "lucide-react";

type Category = "all" | "bapd" | "a2" | "cats";

const CATEGORY_LABELS: Record<Category, string> = {
  all: "Toutes",
  bapd: "BAPD A1/A3",
  a2: "CATT A2",
  cats: "CATS STS",
};

const DIFFICULTY_COLORS: Record<string, string> = {
  facile: "bg-green-100 text-green-700",
  moyen: "bg-yellow-100 text-yellow-700",
  difficile: "bg-red-100 text-red-700",
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QCMPage() {
  const [category, setCategory] = useState<Category>("all");
  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    const filtered = category === "all" ? questions : questions.filter((q) => q.category === category);
    setPool(shuffle(filtered));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setShowUpsell(false);
  }, [category]);

  const current = pool[index];

  const handleAnswer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.answer) setScore((s) => s + 1);
    if (index === 4 && category === "bapd") setShowUpsell(true);
  };

  const next = () => {
    if (index + 1 >= pool.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setPool(shuffle(pool));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setShowUpsell(false);
  };

  if (!current && !done) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Chargement des questions…</div>
      </div>
    );
  }

  const pct = Math.round((score / pool.length) * 100);
  const passed = pct >= 75;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-sky-600">CertifDrone.fr</a>
        <a href="/formations/cats" className="hidden sm:block text-sm font-medium text-sky-600 hover:text-sky-700">
          → Certification officielle CATS
        </a>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Entraînement QCM</h1>
          <p className="text-gray-500 text-sm">
            {pool.length} question{pool.length > 1 ? "s" : ""} · Seuil de réussite : 75 %
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === c
                  ? "bg-sky-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-sky-300"
              }`}
            >
              {CATEGORY_LABELS[c]}
            </button>
          ))}
        </div>

        {done ? (
          /* Results screen */
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? "bg-green-100" : "bg-red-100"}`}>
              <Trophy className={`w-10 h-10 ${passed ? "text-green-600" : "text-red-400"}`} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {passed ? "Félicitations !" : "À retravailler"}
            </h2>
            <p className="text-gray-500 mb-6">
              Score : {score}/{pool.length} ({pct} %)
              {passed ? " — Vous atteignez le seuil de 75 %" : " — Seuil de 75 % non atteint"}
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-medium hover:bg-sky-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Recommencer
              </button>
              <a
                href="/formations/cats"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-sky-600 text-sky-600 rounded-xl text-sm font-medium hover:bg-sky-50 transition-colors"
              >
                Passer la certification officielle →
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500">{index + 1}/{pool.length}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-sky-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((index + 1) / pool.length) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                <Target className="w-4 h-4 text-sky-500" />
                {score}/{index + (selected !== null ? 1 : 0)}
              </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
              {/* Meta row */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {CATEGORY_LABELS[current.category as Category]}
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-500">{current.theme}</span>
                {current.difficulty && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[current.difficulty]}`}>
                      {current.difficulty}
                    </span>
                  </>
                )}
              </div>

              {/* Question */}
              <div className="px-6 py-5">
                <p className="text-gray-900 font-medium text-base leading-relaxed">{current.question}</p>
              </div>

              {/* Options */}
              <div className="px-6 pb-5 flex flex-col gap-2">
                {current.options.map((opt, i) => {
                  let cls =
                    "w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ";
                  if (selected === null) {
                    cls += "border-gray-200 hover:border-sky-400 hover:bg-sky-50 text-gray-700 cursor-pointer";
                  } else if (i === current.answer) {
                    cls += "border-green-400 bg-green-50 text-green-800 font-medium";
                  } else if (i === selected && i !== current.answer) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-gray-100 text-gray-400";
                  }

                  return (
                    <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                      <span className="font-medium mr-2">{["A", "B", "C", "D"][i]}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {selected !== null && (
                <div className="px-6 pb-5">
                  <div className={`rounded-xl p-4 ${selected === current.answer ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"}`}>
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${selected === current.answer ? "text-green-600" : "text-red-500"}`} />
                      <p className={`text-sm leading-relaxed ${selected === current.answer ? "text-green-800" : "text-red-800"}`}>
                        {current.explanation}
                      </p>
                    </div>
                    {current.source && (
                      <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-gray-200/60">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400">{current.source}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Next button */}
            {selected !== null && (
              <button
                onClick={next}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors"
              >
                {index + 1 >= pool.length ? "Voir les résultats" : "Question suivante"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* Upsell */}
            {showUpsell && (
              <div className="mt-6 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl p-5">
                <p className="font-semibold text-gray-900 mb-1">🎯 Prêt pour le vrai examen ?</p>
                <p className="text-sm text-gray-600 mb-3">
                  Passez la certification officielle CATS reconnue EASA en ligne, avec corrigé instantané et certificat PDF.
                </p>
                <a
                  href="/formations/cats"
                  className="inline-block px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors"
                >
                  Voir la formation CATS →
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
