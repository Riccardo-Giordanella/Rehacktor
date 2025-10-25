import { useLoaderData } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function Homepage() {
  const games = useLoaderData();
  console.log(games);

  return (
    <>
      <h1 className="font-electro text-3xl text-center font-bold my-10">Reactor</h1>
      <GameList>
        {games &&
          games.map((game) => <GameList.Card key={game.id} game={game} />)}
      </GameList>
    </>
  );
}
