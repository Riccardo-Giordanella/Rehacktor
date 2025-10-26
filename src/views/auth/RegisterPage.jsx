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
      <h1 className="text-center text-4xl my-10">Register</h1>
      <main className="flex justify-center items-center">
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
          <input
            type="email"
            placeholder="Email"
            className="input input-lg mb-5 w-full"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <p role="alert" className="text-red-500 mb-6">
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="input input-lg mb-5 w-full"
            {...register("password", {
              required: "This field is required",
              minLength: 8,
            })}
          />
          {errors.password && (
            <p role="alert" className="text-red-500 mb-6">
              {errors.password.message}
            </p>
          )}
          <button className="btn bg-blue-600 p-5">Sign Up</button>
        </form>
      </main>
    </>
  );
}
