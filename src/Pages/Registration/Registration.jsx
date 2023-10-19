import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

    }
  return (
    <div>
      <div className="w-4/5 md:3/4 lg:w-2/4 mx-auto py-20 border my-10 p-10">
        <h2 className="text-4xl text-center font-bold">Please Register</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              name="displayName"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center my-3 mb-2">
          Already have an account? Please{" "}
          <Link className="text-sm font-bold text-blue-600" to="/login">
            login
          </Link>
        </p>
        <div className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-full mx-auto px-3  py-2">
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Register With google</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
