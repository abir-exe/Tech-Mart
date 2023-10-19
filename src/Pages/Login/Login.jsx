import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // sign in
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        
      })
      .catch((error) => {
        console.error(error);
        
      });
      
    
    }

  
  return (
    <div>
      <div className="w-4/5 md:3/4 lg:w-2/4 mx-auto py-20 border my-10 p-10">
        <h2 className="text-4xl text-center font-bold">Please Login</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
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
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control md:mt-3 lg:mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-3 mb-3">
          Do not have an account? Please
          <Link className="text-sm font-bold text-blue-600 ml-1" to="/register">
            Register
          </Link>
        </p>
        <div className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-4/5 mx-auto px-3  py-2">
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Login With google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
