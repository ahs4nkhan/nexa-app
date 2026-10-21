import LandingNavbar from "../components/landing/LandingNavbar";
import Hero from "../components/landing/Hero";
import FeaturesSection from "../components/landing/FeaturesSection";
import LiveWorkspace from "../components/landing/LiveWorkspace";
import CTASection from "../components/landing/CTASection";
import LandingFooter from "../components/landing/LandingFooter";
import { progressData, features } from "../data/landingContent";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Workspace", href: "#workspace" },
];

function LandingPage({ tasks, loading, error, onToggle }) {
  return (
    <div className="bg-cream min-h-screen text-ink">
      <LandingNavbar brand="Nexa." links={navLinks} />

      <Hero
        badge="Now in public beta"
        line1="Build better."
        line2="Work smarter."
        subtext="Nexa helps teams manage projects, organize tasks, and work together from one simple platform."
        progress={progressData}
      />

      <FeaturesSection
        eyebrow="Features"
        heading="Everything your team needs"
        subtext="Simple tools to help you stay organized, productive, and focused."
        features={features}
      />

      <LiveWorkspace tasks={tasks} loading={loading} error={error} onToggle={onToggle} />

      <CTASection
        heading="Ready to work smarter?"
        subtext="Start organizing your projects today. Set up takes about two minutes."
      />

      <LandingFooter brand="Nexa." year={2026} links={["Privacy", "Terms", "Contact"]} />
    </div>
  );
}

export default LandingPage;
