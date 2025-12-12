import GradientBackground from "./components/GradientBackground";
import './App.css';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <GradientBackground />

      <div className="relative z-20 px-20 pt-40">
        {/* your hero content */}
      </div>
    </div>
  );
}
