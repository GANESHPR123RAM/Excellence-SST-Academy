import { useEffect, useState, Fragment } from "react";
import { useAuth } from "../store/auth";

const AllContacts = () => {
  const { AuthorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "https://excellence-sst-academy.onrender.com/api/form/Allcontact",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contact messages:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
            Contact Messages
          </h1>
          <p className="text-slate-600">
            {contacts.length} messages found
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-50 p-6 md:p-10 rounded-3xl shadow-inner border border-slate-200 overflow-x-auto">

          {contacts.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              No messages found
            </div>
          ) : (
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="text-slate-500 text-left border-b">
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">More</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <Fragment key={c._id}>
                    <tr className="border-b hover:bg-white transition">
                      <td className="p-3 font-medium text-slate-800">
                        {c.name}
                      </td>
                      <td className="p-3">{c.phone}</td>
                      <td className="p-3">{c.class}</td>

                      <td className="p-3 text-slate-600">
                        {c.message.length > 30
                          ? c.message.substring(0, 30) + "..."
                          : c.message}
                      </td>

                      <td className="p-3">
                        <button
                          onClick={() =>
                            setContacts((prev) =>
                              prev.map((x) =>
                                x._id === c._id
                                  ? { ...x, show: !x.show }
                                  : x
                              )
                            )
                          }
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          {c.show ? "Hide" : "View"}
                        </button>
                      </td>
                    </tr>

                    {c.show && (
                      <tr>
                        <td colSpan="5" className="p-4">
                          <div className="bg-white border border-slate-200 rounded-xl p-4 text-slate-700">
                            {c.message}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllContacts;