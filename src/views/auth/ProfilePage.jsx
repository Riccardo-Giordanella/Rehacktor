import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import Ryu from "../../assets/Ryu.png";
import { Link } from "react-router";
import routes from "../../router/routes";
import supabase from "../../database/supabase";

export default function ProfilePage() {
  const { user, profile } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState();
  const [userFavourites, setUserFavourites] = useState();

  const download_avatar = async () => {
    if (profile) {
      const { data } = await supabase.storage
        .from("avatars")
        .download(profile.avatar_url);
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  };

  const get_favourites = async () => {
    if (profile) {
      let { data: favourites } = await supabase
        .from("favourites")
        .select("*")
        .eq("profile_id", profile.id);
      setUserFavourites(favourites);
    }
  };

  useEffect(() => {
    download_avatar();
    get_favourites();
  }, [profile]);

  return (
    <main className="min-h-screen bg-base-100 text-neutral-content px-4">
      {user && profile && (
        <>
          <article className="mt-10 flex flex-col items-center">
            <img
              src={avatarUrl ?? Ryu}
              alt="Profile Image"
              className="w-[100px] h-[100px] rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold mt-5 text-primary tracking-wide">
              {profile.username}
            </h2>
          </article>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:px-36">
            <article className="bg-neutral rounded-box p-6 shadow-lg border border-base-300">
              <h3 className="text-lg font-bold mb-4 text-primary">Your data</h3>
              <p className="mb-1">
                <span className="font-semibold">Name:</span>{" "}
                {profile.first_name} {profile.last_name}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Username:</span>{" "}
                {profile.username}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <Link
                className="btn btn-outline btn-sm hover:scale-105 transition-transform"
                to={routes.profile_settings}
              >
                Settings
              </Link>
            </article>
          </section>

          <h2 className="text-2xl text-center mt-16 mb-6 font-bold text-primary">
            Favourite games
          </h2>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 mb-20">
            {userFavourites &&
              userFavourites.map((game) => (
                <div
                  className="card bg-base-200 text-white shadow-md hover:shadow-xl transition-shadow duration-300"
                  key={game.id}
                >
                  <div className="card-body">
                    <h3 className="card-title text-lg font-semibold text-primary">
                      {game.game_name}
                    </h3>
                  </div>
                </div>
              ))}
          </section>
        </>
      )}
    </main>
  );
}
