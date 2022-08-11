// import React, { createContext} from 'react'

// export const Reminder = createContext();

// const Context = ({children}) => {

//   return (
//     <Reminder.Provider value={{currentId,setCurrentId}}>
//         {children}
//     </Reminder.Provider>
//   )
// }

// export default Context

//---------------------------------------
// 0: {_id: '62d59a0f9e8c07d005f39a22', title: 'Event 1', message: 'Event 1 details.', sendTime: '2022-07-19T17:36:00.000Z', createdAt: '2022-07-18T17:36:15.174Z', …}
// 1: {_id: '62d59a919e8c07d005f39a27', title: 'Event 2', message: 'Details of Event 2', sendTime: '2022-07-20T17:38:00.000Z', createdAt: '2022-07-18T17:38:25.943Z', …}
// 2: {_id: '62d59be79e8c07d005f39a2b', title: 'New random event', message: 'Random event details. Adding more details for the sake of filling more space in the reminder card.', sendTime: '2022-07-25T06:30:00.000Z', createdAt: '2022-07-18T17:44:07.868Z', …}
// 3: {_id: '62d62d552ddbd20d010e9515', title: 'this event', message: 'This event details.', sendTime: '2022-07-22T04:04:00.000Z', createdAt: '2022-07-19T04:04:37.991Z', …}
// 4: {_id: '62d6b2452ddbd20d010e951a', title: 'Some event', message: 'Some event details.', sendTime: '2022-07-23T13:31:00.000Z', createdAt: '2022-07-19T13:31:49.165Z', …}
// 5: {_id: '62d77b6da11e4400b8857796', title: 'That event', message: 'Details of that event.', sendTime: '2022-07-24T03:49:00.000Z', createdAt: '2022-07-20T03:50:05.409Z', …}
// 6: {_id: '62e3fb494530c635104a9d09', title: 'Event one', message: 'Event one details', sendTime: '2022-07-01T15:22:00.000Z', createdAt: '2022-07-29T15:22:49.750Z', …}
// 7: {_id: '62e614a243aad46f11e20f39', title: 'Some event', message: 'details', sendTime: '2022-07-03T05:34:00.000Z', createdAt: '2022-07-31T05:35:30.316Z', …}
// 8: {_id: '62e6325d43aad46f11e20f3b', title: 'new random event', message: 'details of event', sendTime: '2022-08-02T07:43:00.000Z', createdAt: '2022-07-31T07:42:21.950Z', …}
// 9: {_id: '62e6539543aad46f11e20f40', createdAt: '2022-07-31T10:04:05.211Z', __v: 0}
// 10: {_id: '62e6545743aad46f11e20f42', title: 'That event', message: 'details', sendTime: '2022-08-05T10:07:00.000Z', createdAt: '2022-07-31T10:07:19.734Z', …}
// 11: {_id: '62e6655e27dc6afb88159876', title: 'This day', message: 'This day details.', sendTime: '2022-08-04T11:19:00.000Z', createdAt: '2022-07-31T11:19:58.504Z', …}
// 12: {_id: '62e6661a213b694981908b95', creator: 'name one', createdAt: '2022-07-31T11:23:06.311Z', __v: 0}
// 13: {_id: '62e668c1e8979eb5154a8f4c', title: 'Event', message: 'details', sendTime: '2022-07-04T11:34:00.000Z', createdAt: '2022-07-31T11:34:25.179Z', …}
// 14: {_id: '62e66e2c745451694c76b476', title: 'One Day', message: 'day details', sendTime: '2022-08-02T11:57:00.000Z', creator: 'name one', …}
// 15: {_id: '62e68e27745451694c76b479', title: 'Event for two', message: 'details', sendTime: '2022-08-07T14:13:00.000Z', creator: 'name two', …}
// 16: {_id: '62e691c7745451694c76b47b', title: 'Some event', message: 'some details', sendTime: '2022-07-02T14:29:00.000Z', creator: 'name two', …}
// 17:
// createdAt: "2022-07-31T15:14:37.841Z"
// creator: "name one"
// message: "event details"
// sendTime: "2022-08-07T15:14:00.000Z"
// title: "this event"
// __v: 0
// _id: "62e69c5d745451694c76b486"
// [[Prototype]]: Object
// length: 18
// [[Prototype]]: Array(0)
//Register User Method:
//   const registerUser = () => {
//     axios
//       .post("http://localhost:1337/user/register", { data: regFormData })
//       .then((res) => {
//         console.log(res.data);
//         navigate("/user/login");
//       })
//       .catch((err) => console.log(err));
//   };
//Login User Method
//   const loginUser = async () => {
//     await axios
//       .post("http://localhost:1337/user/login", {loginFormData })
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };

//Misc
// const client_id = "454141794282-masch8jmj3mrqmui6qibl9962e6k36qd.apps.googleusercontent.com"
// const googleUserObject = await jwt_decode(res)
// console.log(token,googleUserObject)

//Post using Fetch
// const response = await fetch('http://localhost:1337/api/reminder',{//couldn't send the data to backend, logs empty object everytime
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json'
//   }
// },
// {
// body:JSON.stringify({title,message})
// })//.then(res=>console.log(res.json())).catch(error=>console.log(error))
// const data = await response.json();
// console.log(data)
// }

//create and update reminders w/o redux

// async function updateReminder(id) {
//   console.log(`Edited Data:${formData}`);
//   await axios
//     .patch(`http://localhost:1337/reminders/${id}`, { data: formData })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
// async function createReminder() {
//   axios
//     .post("http://localhost:1337/reminders", {
//       data: formData,
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// import { Reminder } from "../Context/Context";
// import { Reminder} from '../../Context/Context.js'

//Fetch and Delete w/o redux
//  const handleFetch = ()=>{
//   dispatch(getReminders(navigate))
//  }

//  const fetchReminders = async()=>{
//   await axios.get('http://localhost:1337/reminders')
//   .then(res=>setReminders(res.data))
//   .catch(err=>console.log(err))
// }

//   const deleteReminder = async(id)=>{
//   await axios.delete(`http://localhost:1337/reminders/${id}`)
//   .then((response)=>{
//     console.log(response.data.message)
//     const newReminders = reminders.filter(ele=>ele._id!==id)
//     setReminders(newReminders)
//   })
//   .catch(err=>console.log(err))

// }
