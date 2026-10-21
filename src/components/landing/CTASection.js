import { Link } from "react-router-dom";

function CTASection({ heading, subtext }) {
  return (
    <section className="mx-6 md:mx-12 mb-16 rounded-2xl bg-gradient-to-r from-forest to-accent text-white px-8 md:px-12 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="font-serif text-3xl font-semibold mb-2">{heading}</h2>
        <p className="text-green-100 max-w-sm m-0">{subtext}</p>
      </div>
      <Link
        to="/dashboard"
        className="bg-white text-forest px-6 py-3 rounded-full text-sm font-medium no-underline self-start md:self-auto transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
      >
        Go To Dashboard
      </Link>
    </section>
  );
}

export default CTASection;
