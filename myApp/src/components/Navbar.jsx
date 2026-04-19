import { useAuth } from "../store/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";


import logo from '../assets/logo.png';


const MobileMenu = ({ isLoggedIn, isHamburgerMenuOpen, closeHamburger }) => {
  const { user } = useAuth();

  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-slate-200 shadow-lg transform ${isHamburgerMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="h-full px-4 pb-6 overflow-y-auto text-white">


          <ul className="space-y-2 font-medium">

            {
              user && user.isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2V14H9v6a2 2 0 01-2 2H3V9z"
                        />
                      </svg>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/About"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                        />
                      </svg>
                      <span>About Us</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resources"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6M7 3h6l4 4v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                        />
                      </svg>
                      <span>Resources</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l6.16-3.422A12.083 12.083 0 0118 17.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5c0-2.07.743-4.01 2.01-5.578L12 14z"
                        />
                      </svg>
                      <span>courses</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"
                        />
                      </svg>
                      <span>Contact</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/AdminPanel/User"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Admin Verify</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/AdminPanel/Topers"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Topers</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/AdminPanel/TopersReview"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z"
                        />
                      </svg>
                      <span>TopersReview</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/AdminPanel/DemoLink"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v4.764a1 1 0 01-1.447.894L15 12m0 0l-4.553 2.276A1 1 0 019 13.382V8.618a1 1 0 011.447-.894L15 10z"
                        />
                      </svg>
                      <span>DemoLink</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/AdminPanel/AllContacts"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    > 
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3m-1.664 4A2 2 0 0113.556 18h-1.111a2 2 0 01-1.732-1.001L10 17m4-4h.01M12 16h.01M16 16h.01"
                        />
                      </svg>
                      <span>All Contacts</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2V14H9v6a2 2 0 01-2 2H3V9z"
                        />
                      </svg>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/About"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                        />
                      </svg>
                      <span>About Us</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"
                        />
                      </svg>
                      <span>Contact</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resources"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6M7 3h6l4 4v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                        />
                      </svg>
                      <span>Resources</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      onClick={closeHamburger}
                      className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l6.16-3.422A12.083 12.083 0 0118 17.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5c0-2.07.743-4.01 2.01-5.578L12 14z"
                        />
                      </svg>
                      <span>courses</span>
                    </NavLink>
                  </li>
                </>
              )}

          </ul>
        </div>
      </aside>
    </>
  );
};

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburger = () =>
    setHamburgerMenuOpen((prev) => !prev);

  const closeHamburger = () => setHamburgerMenuOpen(false);

  return (
    <>
      <div className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <header className="flex justify-between items-center px-6">

          <button
            onClick={toggleHamburger}
            type="button"
            className="inline-flex items-center p-2 my-4 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>

          <div className="text-xl font-bold text-slate-900 flex items-center">
            <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
            <span className="hidden sm:block"> Excellence SST Academy</span>
          </div>

        </header>
      </div>

      <MobileMenu
        isLoggedIn={isLoggedIn}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        closeHamburger={closeHamburger}
      />
    </>
  );
};

export default Navbar;
