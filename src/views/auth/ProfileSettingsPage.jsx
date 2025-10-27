import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import routes from "../../router/routes.js";
import supabase from "../../database/supabase.js";

export default function ProfileSettingsPage() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const { updateProfie, profile, getUser } = useContext(UserContext);

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
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateProfie(data);
    navigate(routes.profile);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <form className="p-10 bg-black w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          className="input input-lg mb-5 w-full"
          {...register("first_name", { required: "This field is required" })}
        />
        {errors.first_name && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.first_name.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Last Name"
          className="input input-lg mb-5 w-full"
          {...register("last_name", { required: "This field is required" })}
        />
        {errors.last_name && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.last_name.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Username"
          className="input input-lg mb-5 w-full"
          {...register("username", { required: "This field is required" })}
        />
        {errors.username && (
          <p role="alert" className="text-red-500 mb-6">
            {errors.username.message}
          </p>
        )}

        <button className="btn p-5">Edit</button>
      </form>

      <form className="p-10 bg-black w-1/2" onSubmit={handleAvatarSubmit}>
        <input
          type="file"
          className="file-input file-input-lg w-full mb-5"
          onChange={handleChange}
        />
        <button className="btn btn-neutral p-5">Change Avatar</button>
      </form>
      {preview && <img src={preview} alt="Avatar preview" className="w-50" />}
    </main>
  );
}
