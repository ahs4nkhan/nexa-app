import { Link } from "react-router-dom";
import ProgressCard from "./ProgressCard";

function Hero({ badge, line1, line2, subtext, progress }) {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 pt-10 pb-20">
      <div className="flex-1 animate-fade-up">
        <span className="inline-block bg-accent-light text-forest text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5">
          {badge}
        </span>

        <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-5">
          {line1}
          <br />
          <em className="text-forest">{line2}</em>
        </h1>

        <p className="text-gray-600 max-w-md leading-relaxed mb-7">{subtext}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/dashboard"
            className="bg-ink text-white px-6 py-3 rounded-full text-sm font-medium no-underline transition duration-200 hover:bg-forest hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="border border-ink text-ink px-6 py-3 rounded-full text-sm font-medium no-underline transition duration-200 hover:bg-ink hover:text-white hover:-translate-y-0.5 active:scale-95"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="flex-1 w-full animate-fade-up" style={{ animationDelay: "150ms" }}>
        <ProgressCard progress={progress} />
      </div>
    </section>
  );
}

export default Hero;
