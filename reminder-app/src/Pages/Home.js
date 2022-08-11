import React from "react";
import Reminders from "../components/Reminders/Reminders.js";
import Form from "../components/Form.js";
import Login from "./Login";

const Home = () => {
  const [currentId, setCurrentId] = React.useState("");
  const [showRemForm, setShowRemForm] = React.useState(false);
  const currentUser = JSON.parse(localStorage.getItem("profile"));

  const handleClick = () => {
    setShowRemForm((pre) => !pre);
  };
  if (!currentUser) {
    return (
      <div id="home">
        <Login />
      </div>
    );
  }
  return (
    <>
      <div className="form-Container">
        <button className="btn border btn-info" onClick={handleClick}>
          {showRemForm ? "" : "Set new reminder"}
          {showRemForm ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">add</span>
          )}
        </button>
        {showRemForm && (
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            setShowRemForm={setShowRemForm}
          />
        )}
      </div>
      <Reminders setCurrentId={setCurrentId} />
    </>
  );
};

export default Home;
