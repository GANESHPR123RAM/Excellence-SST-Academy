import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {

  const [contactData, setContactData] = React.useState({
    name: '',
    phone: '',
    class: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://excellence-sst-academy.onrender.com/api/form/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setContactData({
          name: '',
          phone: '',
          class: '',
          message: '',
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };


  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Text Content Area */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Let's Talk SST</h2>
          <p className="text-slate-600 mb-8 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Have questions about our batches or need a free demo? Drop us a message and we'll get back to you within 24 hours.
          </p>

          <div className="inline-flex flex-col space-y-6 text-left w-full sm:w-auto">
            <div className="flex items-center gap-4 p-2">
              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Call Us</p>
                <p className="text-slate-600 text-sm md:text-base">+91 9928653794</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Visit Center</p>
                <p className="text-slate-600 text-sm md:text-base">Ward No. 5, Khan Satal Kheri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <form 
        onSubmit={handleSubmit}
        className="bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-inner border border-slate-200">
          <div className="grid gap-4 md:gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Student's Name</label>
              <input
                type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                placeholder="Enter name"
                className="w-full p-3 md:p-4 rounded-xl border border-slate-300 outline-blue-600 bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Parent's Phone</label>
              <input
                type="tel"
                  name="phone"
                  value={contactData.phone}
                  onChange={handleChange}
                placeholder="Enter 10-digit number"
                className="w-full p-3 md:p-4 rounded-xl border border-slate-300 outline-blue-600 bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Select Class</label>
              <select 
                name="class"
                value={contactData.class}
                onChange={handleChange}
                className="w-full p-3 md:p-4 rounded-xl border border-slate-300 outline-blue-600 bg-white focus:ring-2 focus:ring-blue-100 transition-all">
                <option >Select Class</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11/12</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Message</label>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Any specific topics you want to learn?"
                rows="4"
                className="w-full p-3 md:p-4 rounded-xl border border-slate-300 outline-blue-600 bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200 active:scale-[0.98]">
              Submit Request <Send size={18} />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;