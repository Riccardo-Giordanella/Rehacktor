import { useLoaderData } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function Homepage() {
  const games = useLoaderData();

  return (
    <main className="min-h-screen bg-base-100 text-neutral-content px-4 py-10">
      <h1 className="font-electro text-4xl text-center font-bold text-primary mb-10 tracking-wide">
        Rehacktor
      </h1>

      <GameList>
        {games &&
          games.map((game) => <GameList.Card key={game.id} game={game} />)}
      </GameList>
    </main>
  );
}
