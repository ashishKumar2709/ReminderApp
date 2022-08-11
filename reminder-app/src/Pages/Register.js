import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Store/authSlice";

const Register = () => {
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [regFormData, setRegFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, emailId, password, confirmPassword } =
    regFormData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  console.log(regFormData);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && emailId && password && confirmPassword) {
      dispatch(registerUser({ regFormData, navigate }));
    }
  };

  const handleClick = () => {
    navigate("/user/login");
  };

  return (
    <div className="register-container card shadow-lg rounded-3">
      <span className="material-icons-outlined">account_circle</span>
      <h3>Sign Up</h3>
      {error && <p className="errorMsg">{error}</p>}
      <form onSubmit={handleSubmit} className="Regform" autoComplete="off">
        <div className="regFormInput">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={regFormData.firstName}
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              value={regFormData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            type="email"
            id="emailId"
            name="emailId"
            value={regFormData.emailId}
            placeholder="Email ID"
            onChange={handleChange}
            required
          />
          <label htmlFor="emailId">Email ID</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={regFormData.phoneNumber}
            placeholder="Phone Number"
            maxLength={10}
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            type="password"
            minLength="8"
            id="password"
            name="password"
            value={regFormData.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            type="password"
            minLength="8"
            id="confirmPassword"
            name="confirmPassword"
            value={regFormData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <input type="submit" value="Register" className="btn btn-success" />
      </form>
      <p onClick={handleClick} className="altAction">
        Already have an account. Sign In.
      </p>
    </div>
  );
};

export default Register;
