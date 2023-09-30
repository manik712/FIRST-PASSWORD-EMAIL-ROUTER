import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Link } from "react-router-dom";
import auth from "../../firebase/fairbase.confin";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("form paicha");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Accepted = e.target.terms.checked;
    console.log(email, password, Accepted);

    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("password should be in 6 charecters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("your password should be at least one upper case");
      return;
    } else if (!Accepted) {
      setRegisterError("please accept our terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user done successfully");
      })
      .catch((error) => {
        console.log(error.user);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h3 className="text-4xl">Register Here</h3>
        <Form onSubmit={handleRegister} className=" space-y-1">
          <input
            className="w-3/4 py-2 text-2xl px-4"
            placeholder="email Address"
            type="email"
            name="email"
            required
            id=""
          />
          <br />
          <div className="relative">
            <input
              className="w-3/4 py-2 border text-2xl px-4"
              placeholder="password..."
              type={showPassword ? "text" : "password"}
              name="password"
              required
              id=""
            />
            <span
              className="absolute mt-0.5 border"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            Accept <a href="">terms and conditions</a>
          </label>
          <br />
          <input
            className="w-3/4 text-lg btn btn-secondary"
            type="submit"
            value="Register"
          />
        </Form>

        {
          registerError && <h2>{registerError} </h2> //: <h3>wow</h3>
        }

        {success && <h3>{success}</h3>}
        {/* 
        {
        registerError && <h2 className="">{registerError} </h2>
} */}

        <p>
          Already have an account?Please<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
