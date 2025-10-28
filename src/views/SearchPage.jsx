import { useLoaderData, useParams } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function SearchPage() {
  const games = useLoaderData();
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-base-100 text-neutral-content px-4 py-10">
      <h1 className="text-center text-3xl font-bold text-primary mb-10 tracking-wide wrap-break-word">
        Search results for: <span className="text-white">{slug}</span>
      </h1>

      <GameList>
        {games &&
          games.map((game) => <GameList.Card key={game.id} game={game} />)}
      </GameList>
    </main>
  );
}
