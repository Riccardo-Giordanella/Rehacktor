import { useLoaderData, useParams } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function GenrePage() {
  const games = useLoaderData();
  const { slug } = useParams();

  return (
    <>
      <h1 className="text-center text-3xl my-10">Filtered by genre: {slug}</h1>
      <GameList>
        {games.map((game) => {
          return <GameList.Card key={game.id} game={game} />;
        })}
      </GameList>
    </>
  );
}
