import { useEffect, useState } from "react";
import supabase from "../../database/supabase.js";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function BodySection({ game, profile_id }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [description, setDescription] = useState();
  const [gameReviews, setGameReviews] = useState();
  const [checkReview, setCheckReview] = useState(false);

  const handle_description = (event) => {
    setDescription(event.target.value);
  };

  const get_reviews = async () => {
    const { data: reviews } = await supabase
      .from("reviews")
      .select("id, description, profile_id, profiles(first_name, last_name)")
      .eq("game_id", game.id);

    setGameReviews(reviews);
  };

  const add_review = async () => {
    await supabase
      .from("reviews")
      .insert([
        { profile_id, game_id: game.id, game_name: game.name, description },
      ])
      .select();

    setDescription("");
    setCheckReview(!checkReview);
  };

  const get_favourite = async () => {
    let { data: favourites } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);

    if (favourites.length > 0) setIsFavourite(true);
  };

  useEffect(() => {
    get_favourite();
    get_reviews();
  }, [checkReview]);

  const add_game = async () => {
    await supabase
      .from("favourites")
      .insert([{ profile_id, game_id: game.id, game_name: game.name }])
      .select();
    setIsFavourite(true);
  };

  const remove_game = async () => {
    await supabase
      .from("favourites")
      .delete()
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);
    setIsFavourite(false);
  };

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-6 gap-6 mt-10 px-6">
      {/* Recensioni */}
      <div className="col-span-6 md:col-span-5 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-5">Reviews</h3>

        <textarea
          className="textarea textarea-bordered w-full md:w-4/5 mb-4 resize-none"
          placeholder="Type your review..."
          onChange={handle_description}
          value={description}
        ></textarea>

        <button
          className="btn btn-primary w-full md:w-4/5 mb-6"
          onClick={add_review}
        >
          Send
        </button>

        <div className="w-full md:w-4/5 h-52 overflow-y-auto bg-base-200 rounded-lg shadow-inner p-4 space-y-3 scrollbar-thin scrollbar-thumb-base-content scrollbar-track-base-100">
          {gameReviews?.length > 0 ? (
            gameReviews.map((review) => (
              <div
                key={review.id}
                className="bg-base-100 p-3 rounded shadow border border-base-300"
              >
                <p className="text-sm text-base-content mb-1">
                  <span className="font-semibold text-primary">
                    {review.profiles?.first_name} {review.profiles?.last_name}
                  </span>{" "}
                  :{" "}
                  <span className="text-sm text-right text-base-content italic">
                    {review.description}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-base-content italic">No reviews yet.</p>
          )}
        </div>
      </div>

      {/* Preferito */}
      <div className="flex items-start justify-center pt-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-base-200 shadow-md hover:bg-base-300 transition-colors">
          {isFavourite ? (
            <FaHeart
              className="text-red-500 cursor-pointer text-2xl hover:scale-110 transition-transform"
              onClick={remove_game}
            />
          ) : (
            <FaRegHeart
              className="text-red-500 cursor-pointer text-2xl hover:scale-110 transition-transform"
              onClick={add_game}
            />
          )}
        </div>
      </div>
    </section>
  );
}
