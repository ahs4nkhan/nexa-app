function LandingFooter({ brand, year, links }) {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-12 py-6 border-t border-sand text-sm text-gray-500">
      <span className="font-serif text-xl font-semibold text-ink">{brand}</span>
      <p className="m-0">&copy; {year} {brand} All rights reserved.</p>
      <div className="flex gap-5">
        {links.map((link) => (
          <a key={link} href="#home" className="text-gray-500 no-underline transition-colors duration-200 hover:text-ink">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default LandingFooter;
