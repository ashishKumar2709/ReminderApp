import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReminder, editReminder } from "../Store/reminderSlice";
const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminders.reminders);
  const currentUser = JSON.parse(localStorage.getItem("profile"))?.result;
  const [formData, setFormData] = React.useState({
    title: "",
    message: "",
    sendTime: "",
  });
  console.log(reminders);

  const clearForm = () => {
    setFormData({
      title: "",
      message: "",
      sendTime: "",
    });
    setCurrentId("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  console.log(formData);

  React.useEffect(() => {
    console.log(currentId);
    const prevData = currentId
      ? reminders.filter((ele) => ele._id === currentId)
      : "";
    if (currentId) {
      console.log(`prevData: ${prevData[0].title}`);
      setFormData({
        title: prevData[0].title,
        message: prevData[0].message,
        sendTime: prevData[0].sendTime,
      });
    }
  }, [currentId, reminders]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      console.log(currentId);
      const reminderUpdate = { ...formData, userName: currentUser?.name };
      dispatch(editReminder({ currentId, reminderUpdate }));
    } else {
      dispatch(setReminder({ ...formData, userName: currentUser?.name }));
    }
    clearForm();
  };

  console.log(currentUser);

  return (
    <>
      <form className="reminderForm Form" onSubmit={handleSubmit} method="POST">
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Remind me for"
            required
          />
          <label htmlFor="title">Remind me for</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter details"
            required
          ></textarea>
          <label htmlFor="message">Enter details</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            type="datetime-local"
            id="sendTime"
            name="sendTime"
            value={formData.sendTime}
            onChange={handleChange}
            placeholder="Enter date and time to send"
            required
          />
          <label htmlFor="sendTime">Reminder date and time</label>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
