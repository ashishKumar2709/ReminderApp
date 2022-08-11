import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:1337" });
console.log(JSON.parse(localStorage.getItem("profile")));
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const createReminder = (newReminder) =>
  API.post("/reminders", newReminder);
export const fetchReminders = () => API.get("/reminders");
export const updateReminder = (id, updatedReminder) =>
  API.patch(`/reminders/${id}`, updatedReminder);
export const deleteReminder = (id) => API.delete(`/reminders/${id}`);

export const signIn = (formData) => API.post("user/login", formData);
export const signUp = (formData) => API.post("user/register", formData);
