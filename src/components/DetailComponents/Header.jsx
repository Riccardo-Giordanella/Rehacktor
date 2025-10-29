import {
  FaHeart,
  FaRegHeart,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaAppStoreIos,
  FaGlobe,
  FaGamepad,
} from "react-icons/fa";

export default function Header({ game }) {
  const platformIcons = {
    PC: <FaWindows />,
    "PlayStation 5": <FaPlaystation />,
    "PlayStation 4": <FaPlaystation />,
    "PlayStation 3": <FaPlaystation />,
    "Xbox One": <FaXbox />,
    "Xbox 360": <FaXbox />,
    "Xbox Series S/X": <FaXbox />,
    macOS: <FaApple />,
    Linux: <FaLinux />,
    Android: <FaAndroid />,
    iOS: <FaAppStoreIos />,
    Web: <FaGlobe />,
    "Nintendo Switch": <FaGamepad />,
  };

  return (
    <header className="pt-10 px-6 text-base-content max-w-6xl mx-auto">
      <h1 className="text-center text-5xl font-bold font-electro text-white mb-2">
        {game.name}
      </h1>
      <h2 className="text-center text-xl text-base-content mb-6">
        Released on: <span className="font-semibold">{game.released}</span>
      </h2>

      <section className="grid md:grid-cols-2 gap-6">
        {/* Descrizione */}
        <article className="bg-base-200 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Description
          </h3>
          <p className="text-sm leading-relaxed text-justify indent-4 text-base-content bg-base-200 p-4 rounded-lg shadow-inner">
            {game.description_raw || "No description available."}
          </p>
        </article>

        {/* Info extra */}
        <article className="bg-base-200 p-6 rounded-lg shadow-md text-center space-y-4">
          <div>
            <p className="text-lg font-semibold">Rating</p>
            <p className="text-2xl font-bold text-primary">{game.rating}</p>
          </div>

          <div>
            <p className="text-lg font-semibold">Genres</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {game.genres.map((genre) => (
                <span key={genre.id} className="badge badge-outline">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {game.platforms?.length > 0 && (
            <div>
              <p className="text-lg font-semibold">Platforms</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {game.platforms.map(({ platform }) => (
                  <div
                    key={platform.id}
                    className="flex items-center gap-2 px-3 py-1 rounded-full shadow bg-base-100 hover:bg-base-300 transition-colors"
                  >
                    <span className="text-lg text-primary">
                      {platformIcons[platform.name] || <FaGamepad />}
                    </span>
                    <span className="text-sm">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {game.website && (
            <div className="mt-4">
              <a
                href={game.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline btn-primary"
              >
                Visit Official Site
              </a>
            </div>
          )}
          {game.developers?.length > 0 && (
            <>
              <p className="text-lg font-semibold">Developer</p>
              <div className="flex flex-col items-center gap-2 px-3 py-1 rounded-full shadow bg-base-100 hover:bg-base-300 transition-colors">
                <p className="text-sm">
                  {game.developers.map((dev) => dev.name).join(", ")}
                </p>
              </div>
            </>
          )}

          {game.publishers?.length > 0 && (
            <>
              <p className="text-lg font-semibold">Publisher</p>
              <div className="flex flex-col items-center gap-2 px-3 py-1 rounded-full shadow bg-base-100 hover:bg-base-300 transition-colors">
                <p className="text-sm">
                  {game.publishers.map((pub) => pub.name).join(", ")}
                </p>
              </div>
            </>
          )}
          {game.metacritic && (
            <div>
              <p className="text-lg font-semibold">Metacritic</p>
              <span className="badge badge-success text-lg">
                {game.metacritic}
              </span>
            </div>
          )}
          {game.playtime > 0 && (
            <>
              <p className="text-lg font-semibold">Average Playtime</p>
              <div className="flex flex-col items-center gap-2 px-3 py-1 rounded-full shadow bg-base-100 hover:bg-base-300 transition-colors">
                <span>
                  {game.playtime} hours
                </span>
              </div>
            </>
          )}
        </article>
      </section>
    </header>
  );
}
