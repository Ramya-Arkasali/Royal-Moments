import { useState } from "react";

const BookingForm = ({ eventTitle, setOpenForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      ...formData,
      eventTitle,
    };

    console.log("Booking Details:", bookingDetails);

    alert("Event booked successfully!");
    setOpenForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={() => setOpenForm(false)}
          className="absolute right-4 top-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Book Event
        </h2>

        <p className="mb-4 text-gray-600">
          Event: <span className="font-semibold">{eventTitle}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="date"
            name="eventDate"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            rows="3"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
