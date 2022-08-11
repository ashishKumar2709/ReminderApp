import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, resetError } from "../Store/authSlice";

const Header = () => {
  const [user, setUser] = React.useState(null);
  const userState = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch(logOutUser());
    navigate("/user/login");
    setUser(null);
  };

  React.useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("profile"));
    console.log(currentUser?.token);
    if (currentUser?.result) {
      setUser(currentUser?.result);
    }
    const token = currentUser?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [userState, location]);

  const handleClick = () => {
    navigate("/");
    dispatch(resetError());
  };

  return (
    <>
      <div className="navbar navbar-expand-lg rounded-2">
        <h1
          onClick={handleClick}
          className="navbar-brand mb-0 h1 bg-primary text-white border border-2 rounded-start border-primary p-2 border-opacity-25 shadow"
        >
          Remind Me!
        </h1>
        {user ? (
          <div className="signed-in">
            <span className="border border-5 rounded-circle w-20 p-2 bg-light">
              {user.name.charAt(0).toUpperCase()}
            </span>
            <h6>{user.name}</h6>
            <button className="btn btn-secondary shadow-lg" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
