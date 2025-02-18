import { useState } from "react";
import { supabase } from "../lib/supabase"; // Import Supabase client

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          { name, email, message, timestamp: new Date() }
        ]);

      if (error) throw error;

      setStatus("Message sent successfully! Thank you for reaching out.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("Error sending message, please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="6"
            required
          ></textarea>
        </div>

        {status && (
          <p className={`text-center text-xl ${status.includes("Error") ? 'text-red-600' : 'text-green-600'}`}>
            {status}
          </p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
