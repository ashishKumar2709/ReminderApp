import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginGoogleUser } from "../Store/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = React.useState({
    emailId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginFormData.emailId) {
      dispatch(loginUser({ loginFormData, navigate }));
    }
  };

  const handleClick = () => {
    navigate("/user/register");
  };

  const handleCallbackResponse = async (response) => {
    try {
      const res = await response?.credential;
      dispatch(loginGoogleUser({ token: res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "454141794282-masch8jmj3mrqmui6qibl9962e6k36qd.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("gSignIn"), {
      theme: "outline",
    });
  },[]);

  return (
    <div className="login-container card shadow-lg rounded-3">
      <span className="material-icons-outlined">account_circle</span>
      <h3>Sign In</h3>
      {error && <p className="errorMsg">{error}</p>}
      <form onSubmit={handleSubmit} className="Loginform rounded-2">
        <div className="form-floating">
          <input
            className="form-control"
            type="email"
            id="emailId"
            name="emailId"
            value={loginFormData.emailId}
            placeholder="Email ID"
            onChange={handleChange}
            required
          />
          <label htmlFor="emailId">Email ID</label>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={loginFormData.password}
            placeholder="Password"
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="emailId">Password</label>
        </div>
        <input type="submit" value="Login" className="btn btn-success" />
        <div id="gSignIn"></div>
      </form>
      <p onClick={handleClick} className="altAction">
        Don't have an account. Sign Up!
      </p>
    </div>
  );
};

export default Login;
