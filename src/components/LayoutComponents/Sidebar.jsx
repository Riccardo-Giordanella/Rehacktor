import { Link } from "react-router";

export default function Sidebar({ genres }) {
  return (
    <nav className="h-screen w-64 bg-neutral text-neutral-content p-6 overflow-y-auto border-r border-base-300">
      <h2 className="text-xl font-bold mb-6 tracking-wide">Genres</h2>
      <ul className="space-y-2">
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link
              to={`/genre/${genre.slug}`}
              className="block px-3 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors duration-200"
            >
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
