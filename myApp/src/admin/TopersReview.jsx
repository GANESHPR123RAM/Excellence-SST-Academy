import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth';


function TopersReview() {
    const { AuthorizationToken } = useAuth();
    // fetch data
    const [TopersReview, setTopersReview] = useState([]);
    const [Name, setName] = useState('');
    const [Marks, setMarks] = useState('');
    const [Year, setYear] = useState('');
    const [Class, setClass] = useState('');
    const [message, setMessage] = useState('');

    const fetchToperReviewData = async () => {
        try {
            const response = await fetch("https://excellence-sst-academy.onrender.com/api/admin/GetTopersReview", {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setTopersReview(data.fetchTopersReview);
            } else {
                console.error("Error fetching TopersReview data");
            }
        } catch (error) {
            console.error('Error fetching TopersReview:', error);
        }
    };


    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://excellence-sst-academy.onrender.com/api/admin/TopersReview/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: AuthorizationToken,
                },
            });

            const data = await response.json();
            console.log("user after delete ", data);

            if (response.ok) {
                fetchToperReviewData();
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchToperReviewData();
    }, [AuthorizationToken]); // Add AuthorizationToken as a dependency


    // Handle form inputs
    const handleChange = (setter) => (e) => setter(e.target.value);

    // Handle form submission
    const handleUpload = async (e) => {
        e.preventDefault();

        if (!Name || !Marks || !Year || !Class) {
            setMessage('Please enter all fields.');
            return;
        }

        try {
            const response = await axios.post(
                'https://excellence-sst-academy.onrender.com/api/admin/TopersReview',
                { Name, Marks, Year, Class, message },
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
                    Add Toper's Review
                </h1>

                <form onSubmit={handleUpload} className="space-y-4">

                    <input
                        type="text"
                        value={Name}
                        onChange={handleChange(setName)}
                        placeholder="Student Name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        value={Marks}
                        onChange={handleChange(setMarks)}
                        placeholder="Marks / Heading"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        value={Year}
                        onChange={handleChange(setYear)}
                        placeholder="Year"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        value={Class}
                        onChange={handleChange(setClass)}
                        placeholder="Class"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        value={message}
                        onChange={handleChange(setMessage)}
                        placeholder="Message / Description"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
                    >
                        Submit
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-center text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">
                        {message}
                    </div>
                )}
            </div>

            <div className="bg-slate-50 mt-16 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-12">
                    Topers Reviews
                </h1>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {TopersReview.length ? (
                        TopersReview.map((review) => (
                            <div
                                key={review._id}
                                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                            >
                                <h2 className="text-lg font-bold text-slate-900">
                                    {review.Name || "Unknown Name"}
                                </h2>

                                <div className="h-[1px] bg-slate-200 my-3"></div>

                                <p className="text-slate-600 text-sm">{review.Marks}</p>
                                <p className="text-slate-500 text-sm">{review.Year}</p>
                                <p className="text-slate-500 text-sm">{review.Class}</p>

                                <button
                                    onClick={() => deleteUser(review._id)}
                                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-medium transition"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-slate-500 text-lg">
                            No reviews available.
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default TopersReview

