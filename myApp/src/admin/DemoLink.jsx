import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth';

function DemoLink() {
    const { AuthorizationToken } = useAuth();
    // fetch data
    const [DemoLink, setDemoLink] = useState([]);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');

    const fetchDemoLinkData = async () => {
        try {
            const response = await fetch("https://excellence-sst-academy.onrender.com/api/admin/GetDemoLink", {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setDemoLink(data.fetchDemoLink);
            } else {
                console.error("Error fetching DemoLink data");
            }
        } catch (error) {
            console.error('Error fetching DemoLink:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://excellence-sst-academy.onrender.com/api/admin/DemoLink/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: AuthorizationToken,
                },
            });
            const data = await response.json();
            console.log("user after delete ", data);
            if (response.ok) {
                fetchDemoLinkData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchDemoLinkData();
    }, [AuthorizationToken]);


    const handleChange = (setter) => (e) => setter(e.target.value);

    // Handle form submission
    const handleUpload = async (e) => {
        e.preventDefault();

        if (!title || !link) {
            setMessage('Please enter all fields.');
            return;
        }

        try {
            const response = await axios.post(
                'https://excellence-sst-academy.onrender.com/api/admin/DemoLink',
                { title, link, message },
                {
                    headers: {
                        Authorization: AuthorizationToken,
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
            <div className="max-w-xl mx-auto mt-10 bg-white border border-slate-200 shadow-lg rounded-2xl p-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Upload Demo Link
                </h1>
                <form onSubmit={handleUpload} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleChange(setTitle)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-sm font-medium text-slate-700">
                            Link
                        </label>
                        <input
                            type="url"
                            id="link"
                            value={link}
                            onChange={handleChange(setLink)}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
                        >
                            Upload Demo Link
                        </button>
                    </div>

                </form>
                {message && (
                    <div className="mt-4 text-center text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">
                        {message}
                    </div>
                )}
            </div>
            <div className="bg-slate-50 mt-16 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-12">
                    Uploaded Demo Links
                </h1>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {DemoLink.length ? (
                        DemoLink.map((link) => (
                            <div
                                key={link._id}
                                className="bg-white border border-slate-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-bold text-slate-900 mb-2">{link.title}</h2>
                                <a
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Visit Demo
                                </a>
                                <button
                                    onClick={() => deleteUser(link._id)}
                                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-semibold transition"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 text-center">No demo links available.</p>
                    )}
                </div>
            </div>
        </>

    )
}

export default DemoLink
