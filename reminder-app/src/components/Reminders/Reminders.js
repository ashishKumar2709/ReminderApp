import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getReminders, removeReminder } from "../../Store/reminderSlice.js";
import { useNavigate } from "react-router-dom";

const Reminders = ({ setCurrentId }) => {
  const currentUser = JSON.parse(localStorage.getItem("profile"));
  const reminders = useSelector((state) => state.reminders.reminders);
  const userState = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getReminders(navigate));
  }, [dispatch, navigate, userState]);

  const handleDelete = (id) => {
    dispatch(removeReminder(id));
  };

  const handleClick = (id) => {
    setCurrentId(id);
  };
  console.log(currentUser?.result?.sub, currentUser);

  const currentUserReminders = reminders.filter(
    (rem) =>
      rem.creator === currentUser?.result?.sub ||
      rem.creator === currentUser?.result?._id
  );
  console.log("All", reminders);
  console.log(
    "cuurentUsers",
    currentUserReminders,
    typeof currentUserReminders
  );

  const remElement = currentUserReminders.map((ele) => {
    console.log(ele);
    return (
      <div className="reminder-container card shadow-lg" key={ele._id}>
        <div className="reminder card-body">
          <h3 className="card-title">{ele.title}</h3>
          <p className="timeDisp">
            <span className="material-icons">history</span>&nbsp;&nbsp;
            <span>{moment(ele.createdAt).fromNow()}</span>
          </p>
          <h5>
            <p>{ele.message}</p>
          </h5>
          <p className="timeDisp">
            <span className="material-icons">schedule</span>&nbsp;&nbsp;
            <span>
              {moment(ele.sendTime).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          </p>
        </div>
        <div className="reminder-actions">
          <button className="btn" onClick={() => handleDelete(ele._id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button className="btn" onClick={() => handleClick(ele._id)}>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
      </div>
    );
  });
  return (
    <div id="rem">
      <p id="remCount">
        <em>{`You have ${currentUserReminders.length} ${
          currentUserReminders.length === 0 || currentUserReminders.length === 1
            ? "reminder"
            : "reminders"
        }`}</em>
      </p>
      {currentUserReminders && <div className="reminders">{remElement}</div>}
    </div>
  );
};

export default Reminders;
