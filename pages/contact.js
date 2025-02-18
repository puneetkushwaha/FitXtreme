import { useState } from "react";
import { supabase } from "../lib/supabase"; // Ensure this is correctly imported

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      if (!name || !email || !message) {
        setStatus("All fields are required.");
        setLoading(false);
        return;
      }

      // Insert data WITHOUT 'id'
      const { error } = await supabase.from("contact_messages").insert([
        { name, email, message },
      ]);

      if (error) {
        console.error("Supabase Error:", error);
        if (error.code === "23505") {
          setStatus("Duplicate entry detected. Please try again.");
        } else {
          setStatus("Error sending message. Please try again.");
        }
      } else {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2 text-white">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-700 text-white"
            rows="6"
            required
          ></textarea>
        </div>

        {status && (
          <p className={`text-center text-xl ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>
            {status}
          </p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-500"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
