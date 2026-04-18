import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth';

const Topers = () => {
  const { AuthorizationToken } = useAuth();

  // fetch data
  const [Topers, setTopers] = useState([]);

  // Fetch data from API
  const fetchTopers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetTopers', {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTopers(data.fetchTopers);
      } else {
        console.error("Error fetching team data");
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/Topers/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log("user after delete ", data);

      if (response.ok) {
        fetchTopers();
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchTopers();
  }, [AuthorizationToken]); // Add AuthorizationToken as a dependency to re-run when it changes

  // upload data
  const [formData, setFormData] = useState({
    file: null,
    name: '',
    Marks: '',
    Year: '',
    Class: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { file, name, Marks, Year, Class } = formData;

    if (!file || !name) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('name', name);
    uploadData.append('Marks', Marks);
    uploadData.append('Year', Year);
    uploadData.append('Class', Class);


    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/Topers',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: AuthorizationToken, // Include Authorization header here
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'File upload failed.');
    }
  };

  return (
    <>
      <div className="bg-slate-50 py-16">
        <div className="max-w-xl mx-auto bg-white border border-slate-200 shadow-lg rounded-2xl p-8">

          <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Upload Topper Data
          </h1>

          <form onSubmit={handleUpload} className="space-y-4">

            {['name', 'Marks', 'Year', 'Class'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={formData[field] || ''}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ))}

            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full text-sm text-slate-600 border border-slate-200 rounded-xl p-2"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Upload
            </button>
          </form>

          {message && (
            <div className="mt-4 text-center text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">
              {message}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-12">
          Our Top Performers
        </h1>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {Topers.length > 0 ? (
            Topers.map((data) => (
              <div
                key={data._id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                {/* Image */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={`http://localhost:3000/${data.path}`}
                    alt={data.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    {data.name}
                  </h2>

                  <p className="text-blue-600 font-semibold mt-1">
                    {data.Marks}
                  </p>

                  <div className="h-[1px] bg-slate-200 my-4"></div>

                  <p className="text-slate-500 text-sm">
                    Year: {data.Year}
                  </p>
                  <p className="text-slate-500 text-sm">
                    Class: {data.Class}
                  </p>

                  <button
                    onClick={() => deleteUser(data._id)}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-medium transition"
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-500 text-lg">
              No data available.
            </div>
          )}

        </div>
      </div>
    </>
  );
};


export default Topers;





