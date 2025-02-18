// components/Reviews.js
import { useState, useEffect } from "react";
import { db } from "../lib/firebase"; // Import Firestore
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";

export default function Reviews() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState({ message: "", type: "" });
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from Firestore
  const fetchReviews = async () => {
    try {
      const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"), limit(5)); // Get latest 5 reviews
      const querySnapshot = await getDocs(q);
      const reviewsData = querySnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews: ", error);
    }
  };

  // Fetch reviews on component load
  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) {
      setStatus({ message: "Both fields are required!", type: "error" });
      return;
    }

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        review,
        timestamp: new Date(), // Add timestamp for sorting
      });
      setStatus({ message: "Review submitted successfully! Thank You So Much For Your Precious Words", type: "success" });
      setName("");
      setReview("");
      fetchReviews(); // Refresh reviews after submission
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({ message: "Error submitting review, please try again.", type: "error" });
    }
  };

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black p-8 rounded-lg shadow-lg mb-12">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-white mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-900 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-lg font-semibold text-white mb-2">Your Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-900 text-white"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Status Message with Black Text */}
        {status.message && (
          <p className="text-center text-xl text-black">
            {status.message}
          </p>
        )}

        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Submit Review
          </button>
        </div>
      </form>

      {/* Display Reviews */}
      <div className="max-w-2xl mx-auto">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 mb-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-gray-700 mt-2">{review.review}</p>
              <p className="text-gray-500 text-sm mt-2">
                {review.timestamp?.seconds
                  ? new Date(review.timestamp.seconds * 1000).toLocaleString()
                  : "Unknown Date"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
