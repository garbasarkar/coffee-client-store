import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const userLoaded = useLoaderData();
  const [deleteUser, setDeleteUser] = useState(userLoaded);

  const handleUserDelete = (id) => {
    fetch(`https://coffee-server-module-56.vercel.app/createUsers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Are You Sure? User Delete!");
        }
      });
    const remainder = deleteUser.filter((itemUser) => itemUser._id !== id);
    setDeleteUser(remainder);
  };
  return (
    <div>
      <h1>User Loaded User: {userLoaded.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>EMAIL</th>
              <th>TIME AND DATE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {deleteUser.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.createAtTime}</td>
                <td>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="px-5 py-2 bg-purple-600 rounded text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
