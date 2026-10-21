import { Link } from "react-router-dom";

function LandingNavbar({ brand, links }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5">
      <span className="font-serif text-2xl font-semibold">{brand}</span>

      <nav className="hidden md:flex gap-8 text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-ink no-underline transition-colors duration-200 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Link
        to="/dashboard"
        className="bg-ink text-white px-5 py-2.5 rounded-full text-sm font-medium no-underline transition duration-200 hover:bg-forest hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
      >
        Go To Dashboard
      </Link>
    </header>
  );
}

export default LandingNavbar;
