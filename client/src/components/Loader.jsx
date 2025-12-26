// src/components/Loader.jsx
import React, { useEffect, useState } from "react";

const steps = [
  { label: "Initializing portfolio…", percent: 33 },
  { label: "Loading components…", percent: 68 },
  { label: "Rendering experience…", percent: 99 },
];

const Loader = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1400);
    const t3 = setTimeout(() => setStep(3), 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const percent = step === 0 ? 0 : steps[step - 1].percent;
  const activeLabel = step === 0 ? "Configuring…" : steps[step - 1].label;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-[#2a0f45] via-[#4b1c7c] to-[#1a082e]">
      <div className="w-full max-w-sm px-8 flex flex-col items-center gap-10 text-center">
        {/* NAME */}
        <h1 className="text-4xl font-semibold text-white tracking-wide">
          Shubham {" "}
          <span className="text-purple-300">Sawant</span>
        </h1>

        {/* PROGRESS BAR */}
        <div className="w-full">
          <div className="relative h-1 rounded-full bg-white/15 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-linear-to-r from-purple-400 via-purple-200 to-purple-400 transition-all duration-700 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex justify-between mt-3 text-sm text-white/80">
            <span>{percent}%</span>
            <span>{activeLabel}</span>
          </div>
        </div>

        {/* STEPS */}
        <div className="flex flex-col gap-3 w-full">
          {steps.map((s, i) => {
            const active = step - 1 === i;
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-full border
                transition-all duration-300
                ${
                  active
                    ? "border-purple-400 text-purple-200 bg-purple-500/10"
                    : "border-white/10 text-white/40"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    active ? "bg-purple-400" : "bg-white/30"
                  }`}
                />
                <span className="text-sm">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Loader;
