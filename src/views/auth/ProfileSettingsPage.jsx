import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import routes from "../../router/routes.js";
import supabase from "../../database/supabase.js";

export default function ProfileSettingsPage() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const { updateProfile, profile, getUser } = useContext(UserContext);

  const handleChange = (event) => {
    setFile(() => event.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(() => imageUrl);
    }
  }, [file]);

  const handleAvatarSubmit = async (event) => {
    event.preventDefault();
    const fileExt = file.name.split(".").pop();
    const fileName = `${profile.id}${Math.random()}.${fileExt}`;
    await supabase.storage.from("avatars").upload(fileName, file);
    await supabase
      .from("profiles")
      .upsert({ id: profile.id, avatar_url: fileName })
      .select();
    await getUser();
    navigate(routes.profile)
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateProfile(data);
    navigate(routes.profile);
  };

  return (
    <main className="min-h-screen bg-base-100 text-neutral-content flex flex-col md:flex-row justify-center items-start gap-6 px-4 py-10">
      <form
        className="bg-neutral w-full max-w-md p-8 rounded-lg shadow-lg border border-base-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-6 text-primary tracking-wide">
          Edit Profile
        </h2>

        <div className="form-control mb-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("first_name", { required: "This field is required" })}
          />
          {errors.first_name && (
            <p role="alert" className="text-red-500 text-sm mt-2">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div className="form-control mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("last_name", { required: "This field is required" })}
          />
          {errors.last_name && (
            <p role="alert" className="text-red-500 text-sm mt-2">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div className="form-control mb-6">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("username", { required: "This field is required" })}
          />
          {errors.username && (
            <p role="alert" className="text-red-500 text-sm mt-2">
              {errors.username.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full hover:scale-[1.02] transition-transform duration-200"
        >
          Edit
        </button>
      </form>

      <form
        className="bg-neutral w-full max-w-md p-8 rounded-lg shadow-lg border border-base-300"
        onSubmit={handleAvatarSubmit}
      >
        <h2 className="text-xl font-bold mb-6 text-primary tracking-wide">
          Change Avatar
        </h2>

        <input
          type="file"
          className="file-input file-input-bordered file-input-md w-full mb-6 bg-base-200 text-white"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary w-full hover:scale-[1.02] transition-transform duration-200"
        >
          Upload
        </button>

        {preview && (
          <div className="mt-6 flex justify-center">
            <img
              src={preview}
              alt="Avatar preview"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
          </div>
        )}
      </form>
    </main>
  );
}
