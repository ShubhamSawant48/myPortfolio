import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;
      setProgress(percent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="hidden md:block fixed right-3 top-1/2 -translate-y-1/2 h-30 w-1 z-9999">
      {/* Track */}
      <div className="absolute inset-0 bg-black/40 rounded-full" />

      {/* Progress (TOP → DOWN) */}
      <div
        className="absolute top-0 w-full rounded-full
                   bg-linear-to-b from-purple-400 to-purple-700
                   shadow-[0_0_12px_rgba(168,85,247,0.9)]
                   transition-[height] duration-150 ease-out"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
