import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaYoga } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-semibold mb-12 text-gray-300">Our Services</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Personal Training */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaDumbbell className="text-5xl text-blue-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Personal Training</h4>
            <p className="text-lg text-gray-400">
              Experience personalized training sessions tailored to your goals.
            </p>
          </div>

          {/* Group Classes */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaHeartbeat className="text-5xl text-red-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Group Classes</h4>
            <p className="text-lg text-gray-400">
              Join our high-energy group fitness classes designed for all fitness levels.
            </p>
          </div>

          {/* Nutrition Coaching */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaAppleAlt className="text-5xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Nutrition Coaching</h4>
            <p className="text-lg text-gray-400">
              Work with our certified nutritionists to create a customized meal plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; // ✅ Correct default export
