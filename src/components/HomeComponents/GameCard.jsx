import { Link } from "react-router";

export default function GameCard({ game }) {
  return (
    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <Link to={`/detail/${game.id}`}>
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70"></div>
        <p className="absolute bottom-3 w-full text-center text-white text-sm font-semibold tracking-wide px-2 group-hover:text-primary transition-colors duration-200">
          {game.name}
        </p>
      </Link>
    </div>
  );
}
