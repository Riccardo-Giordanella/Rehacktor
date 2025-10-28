import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (user_data) => {
    await signUp({
      email: user_data.email,
      password: user_data.password,
      options: {
        data: {
          first_name: user_data.first_name,
          last_name: user_data.last_name,
          username: user_data.username,
        },
      },
    });

    navigate("/");
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-primary mt-10 mb-6 tracking-wide">
        Register
      </h1>

      <main className="flex justify-center items-center min-h-[70vh] px-4">
        <form
          className="bg-neutral text-neutral-content w-full max-w-lg p-8 rounded-lg shadow-lg border border-base-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control mb-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("first_name", {
                required: "This field is required",
              })}
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

          <div className="form-control mb-4">
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

          <div className="form-control mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-control mb-6">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-md w-full bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("password", {
                required: "This field is required",
                minLength: 8,
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-[1.02] transition-transform duration-200"
          >
            Sign Up
          </button>
        </form>
      </main>
    </>
  );
}
