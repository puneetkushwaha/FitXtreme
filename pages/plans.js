import Link from "next/link";

export default function Plans() {
  return (
    <div className="py-16 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our Membership Plans</h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Plan */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-3xl font-semibold text-white mb-4">Basic Plan</h3>
          <p className="text-lg text-gray-200 mb-4">For beginners looking to get started.</p>
          <p className="text-4xl font-bold text-white mb-6">₹2,200 / month</p>
          <ul className="text-left text-gray-200 mb-6">
            <li>Access to Gym Facilities</li>
            <li>1 Gym Session per week</li>
            <li>Basic Workouts</li>
          </ul>
          <Link href="/signup" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-3xl font-semibold text-white mb-4">Premium Plan</h3>
          <p className="text-lg text-gray-200 mb-4">For those who want extra benefits.</p>
          <p className="text-4xl font-bold text-white mb-6">₹4,500 / month</p>
          <ul className="text-left text-gray-200 mb-6">
            <li>Access to Gym + Pool</li>
            <li>3 Gym Sessions per week</li>
            <li>Advanced Workouts</li>
            <li>Personalized Plans</li>
          </ul>
          <Link href="/signup" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        {/* VIP Plan */}
        <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-3xl font-semibold text-white mb-4">VIP Plan</h3>
          <p className="text-lg text-gray-200 mb-4">For dedicated fitness enthusiasts.</p>
          <p className="text-4xl font-bold text-white mb-6">₹7,500 / month</p>
          <ul className="text-left text-gray-200 mb-6">
            <li>Unlimited Gym & Pool Access</li>
            <li>Unlimited Gym Sessions</li>
            <li>Custom Workout & Diet Plan</li>
            <li>1-on-1 Trainer Sessions</li>
          </ul>
          <Link href="/signup" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
