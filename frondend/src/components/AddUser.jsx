import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userNAme:", username);
    console.log("email:", email);
    console.log("password:", password);

    try {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };

      const users = await axios.post("http://localhost:8000/api/user", newUser);
      console.log("User Created Successfully :", users.data);
       // Clear input fields after successful submission
       setUsername("");
       setEmail("");
       setPassword("");
       navigate("/")
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      {/* Form Data */}
      <div className="p-40 flex bg-white shadow-lg shadow-gray-500 text-sky-500 font-bold">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-center mb-2">
              <h1 className="text-3xl uppercase font-extrabold underline ">
                Add User
              </h1>
            </div>
            <label className="">
              Enter Name :
              <input
                className="ml-10 border-2 border-cyan-500 p-2 text-center"
                type="text"
                placeholder="Enter name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Enter Email :
              <input
                className="ml-10 border-2 text-center border-cyan-500 p-2"
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Enter Password :
              <input
                className="ml-3 border-2 text-center border-cyan-500 p-2"
                type="text"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className=" flex justify-center ml-5">
              <button
                className="border-4 text-white bg-sky-500  border-sky-500 shadow-xl shadow-sky-500 rounded-md px-8 py-1"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
