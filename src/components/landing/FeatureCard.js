function FeatureCard({ number, title, description, delay }) {
  return (
    <div
      className="bg-cream-card border border-sand rounded-xl p-6 animate-fade-up transition duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="block text-sm font-semibold text-forest mb-6">{number}</span>
      <h3 className="font-serif text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed m-0">{description}</p>
    </div>
  );
}

export default FeatureCard;
