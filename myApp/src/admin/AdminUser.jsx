import { useEffect, useState } from "react"
import { useAuth } from '../store/auth'  
import { Link } from 'react-router-dom'

export const AdminUsers = () => {
  const [users, setUser] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAlluserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: { Authorization: AuthorizationToken },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: AuthorizationToken },
        }
      );
      if (response.ok) getAlluserData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlluserData();
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
            Manage Users
          </h1>
          <p className="text-slate-600">{users.length} users found</p>
        </div>

        {/* Card */}
        <div className="bg-slate-50 p-6 md:p-10 rounded-3xl shadow-inner border border-slate-200 overflow-x-auto">

          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="text-slate-500 text-left border-b">
                <th className="p-3">Username</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Admin</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-white transition">
                  <td className="p-3 font-medium text-slate-800">
                    {user.username}
                  </td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>

                  <td className="p-3">
                    {user.isAdmin ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>

                  <td className="p-3 flex gap-2">
                    {/* <Link to={`/AdminPanel/users/${user._id}/edit`}>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Edit
                      </button>
                    </Link> */}

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
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
    </div>
  );
};

export default AdminUsers;