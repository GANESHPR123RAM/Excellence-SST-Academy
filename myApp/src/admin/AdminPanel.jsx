// import React, { useState } from 'react';
// import { Route, Routes, NavLink, Navigate } from 'react-router-dom';

// import { useAuth } from '../store/auth';
// import Loading from '../assets/loading.gif';
// import { AdminUsers } from './AdminUser';
// import { AdminUpdate } from './AdminUptade'
// import Topers from './topers';
// import TopersReview from './TopersReview';





// const Sidebar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   return (
//     <div className="h-full bg-gray-800 text-white flex flex-col">
//       <div className="p-4 font-bold text-xl border-b border-gray-700">Admin Panel</div>
//       <nav className="flex-1 overflow-y-auto">
//         <ul className="space-y-2 p-4">
//           <li>
//             <NavLink
//               to="/AdminPanel/Users"
//               className={({ isActive }) =>
//                 `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
//               }
//             >
//               Users
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/AdminPanel/Topers"
//               className={({ isActive }) =>
//                 `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
//               }
//             >
//               Topers
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/AdminPanel/TopersReview"
//               className={({ isActive }) =>
//                 `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
//               }
//             >
//               Topers Review
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// const AdminPanel = () => {
//   const { user, isLoading } = useAuth();


//   if (isLoading) {
//     return (
//       <div className="w-screen h-screen flex align-middle justify-center items-center bg-white">
//         <img src={Loading} alt="Loading" />
//       </div>
//     );
//   }

//   if (!user.isAdmin) {
//     return <Navigate to="/" />;
//   }

//   console.log("admin layout", user);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-64 fixed h-full">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-64 bg-gray-100 p-6 overflow-y-auto">
//         <Routes>
//           <Route path="users" element={<AdminUsers />} />
//           <Route path="users/:id/edit" element={<AdminUpdate />} />
//           <Route path="topers" element={<Topers />} />
//           <Route path="topersreview" element={<TopersReview />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };


// export default AdminPanel;



import React, { useState } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';

import { useAuth } from '../store/auth';
import Loading from '../assets/loading.gif';
import { AdminUsers } from './AdminUser';
import { AdminUpdate } from './AdminUptade'
import Topers from './topers';
import TopersReview from './TopersReview';





const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex-shrink-0 flex flex-col z-0">
      <div className="p-4 font-bold text-xl border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          <li>

            <NavLink
              to="/AdminPanel/Users"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Topers"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Topers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/TopersReview"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Topers Review
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const AdminPanel = () => {
  const { user, isLoading } = useAuth();


  if (isLoading) {
    return (
      <div className="w-screen h-screen flex align-middle justify-center items-center bg-white">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  console.log("admin layout", user);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6 flex flex-col">
        <Routes>
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="topers" element={<Topers />} />
          <Route path="topersreview" element={<TopersReview />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminPanel;

