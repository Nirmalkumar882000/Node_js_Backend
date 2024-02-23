import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params=useParams()
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Received Id ",params.id);
    fetchUser();
  }, []);

  const fetchUser = async() => {
    try {
      const response = await axios.get(`http://localhost:8000/api/user/${params.id}`);
      const userData = response.data;
      setUsername(userData.username);
      setEmail(userData.email);
      setPassword(userData.password);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userNAme:", username);
    console.log("email:", email);
    console.log("password:", password);

    try {
      const updateUser = {
        username: username,
        email: email,
        password: password,
      };

      const response = await axios.put(`http://localhost:8000/api/user/${params.id}`, updateUser);
      console.log("User Updated Successfully :", response.data);
      // Clear input fields after successful submission
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/")
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      {/* Form Data */}
      <div className="p-40 flex bg-white shadow-lg shadow-gray-500 text-sky-500 font-bold">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-center mb-2">
              <h1 className="text-3xl uppercase font-extrabold underline ">Update User</h1>
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
            <div className="flex justify-center ml-8">
              <button
                className="border-4 text-white bg-sky-500  border-sky-500 shadow-xl shadow-sky-500 rounded-md px-8 py-1"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
