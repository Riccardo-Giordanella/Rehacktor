import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";

import { FaCircleArrowLeft } from "react-icons/fa6";
import Header from "../components/DetailComponents/Header.jsx";
import { UserContext } from "../context/UserContext.jsx";
import BodySection from "../components/DetailComponents/BodySection.jsx";

export default function DetailPage() {
  const game = useLoaderData();
  const navigate = useNavigate();
  const { profile } = useContext(UserContext);

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), url(${game.background_image})`,
      }}
      className="min-h-screen bg-center bg-cover bg-fixed text-neutral-content px-4 pb-20"
    >
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 left-6 text-white text-3xl hover:text-primary transition-colors duration-200"
        aria-label="Go back"
      >
        <FaCircleArrowLeft />
      </button>

      <div className="max-w-6xl mx-auto pt-10">
        <Header game={game} />
        {profile && <BodySection game={game} profile_id={profile.id} />}
      </div>
    </main>
  );
}
