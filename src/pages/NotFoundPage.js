import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-6xl font-semibold mb-3">404</h1>
      <p className="text-gray-600 mb-6">Sorry, that page doesn't exist.</p>
      <Link
        to="/"
        className="bg-ink text-white px-6 py-3 rounded-full text-sm font-medium no-underline transition duration-200 hover:bg-forest hover:-translate-y-0.5 active:scale-95"
      >
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
