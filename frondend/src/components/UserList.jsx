import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserList = () => {
  const [user, setuser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user");
      setuser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const updateData =(id) => {
    console.log("Send Id", id);
    navigate(`/update/${id}`);
  };


  const deleteData=async(id)=>{
    console.log("Send Id", id);
    const deletes =await axios.delete(`http://localhost:8000/api/user/${id}`)
    console.log("Delete Data ",deletes)
    fetchData()
  }

  const createUser=async()=>{
    navigate('/add')
  }

  return (
    <>
      <div className="flex h-[500px] mt-10 justify-center">
        {/* user Table */}

        <div className="w-[70%]">
          <div className="mb-5" >
            <button onClick={createUser} className="border-4 bg-sky-500  border-sky-500 shadow-xl shadow-sky-500 rounded-md ">
              Add Data
            </button>
          </div>
          <table>
            <thead>
            <tr className="font-extrabold uppercase text-sky-500">
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            </thead>
            {user.map((item) => {
              return (
                <tbody key={item.id}>

                <tr className="font-semibold text-gray-600">
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td className="flex justify-evenly p-2">
                    <button className="border-4 bg-green-500  border-green-500 shadow-xl shadow-green-500 rounded-md  text-white" onClick={()=>updateData(item.id)}>
                      Edit
                    </button>
                    <button className="border-4 bg-red-500 shadow-lg shadow-red-500 border-red-500 rounded-md text-white" onClick={()=>deleteData(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        {/* Button */}
      </div>
    </>
  );
};

export default UserList;
