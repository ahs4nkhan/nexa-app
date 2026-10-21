import FeatureCard from "./FeatureCard";

function FeaturesSection({ eyebrow, heading, subtext, features }) {
  return (
    <section id="features" className="px-6 md:px-12 py-16 text-center">
      <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-2">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">{heading}</h2>
      <p className="text-gray-500 mb-10">{subtext}</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-left max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            number={`0${index + 1}`}
            title={feature.title}
            description={feature.description}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
