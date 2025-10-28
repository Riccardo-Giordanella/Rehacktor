import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const onSubmit = async (user_data) => {
    await login({
      email: user_data.email,
      password: user_data.password,
    });
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-primary mt-10 mb-6 tracking-wide">
        Login
      </h1>

      <main className="flex justify-center items-center min-h-[60vh] px-4">
        <form
          className="bg-neutral text-neutral-content w-full max-w-md p-8 rounded-lg shadow-lg border border-base-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-md bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-full"
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
              className="input input-bordered input-md bg-base-200 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-full"
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
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}
