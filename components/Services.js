import { FaDumbbell, FaHeartbeat, FaAppleAlt } from "react-icons/fa";

export default function Services() {
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
              Experience personalized training sessions tailored to your goals. Whether you’re aiming for weight loss, muscle gain, or improved athletic performance, our certified trainers are here to guide you every step of the way.
            </p>
          </div>

          {/* Group Classes */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaHeartbeat className="text-5xl text-red-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Group Classes</h4>
            <p className="text-lg text-gray-400">
              Join our high-energy group fitness classes designed for all fitness levels. From HIIT to Yoga and Zumba, you'll find a class that keeps you motivated while you burn calories and build strength.
            </p>
          </div>

          {/* Nutrition Coaching */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaAppleAlt className="text-5xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Nutrition Coaching</h4>
            <p className="text-lg text-gray-400">
              Work with our certified nutritionists to create a customized meal plan that fits your fitness goals. Learn how to fuel your body for better performance, weight management, and overall health.
            </p>
          </div>

          {/* Yoga Classes */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaAppleAlt className="text-5xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Yoga Classes</h4>
            <p className="text-lg text-gray-400">
              Find inner peace and improve flexibility with our calming and restorative yoga classes. Perfect for beginners and seasoned yogis, these classes promote both physical and mental well-being.
            </p>
          </div>

          {/* Cardio Training */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaAppleAlt className="text-5xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Cardio Training</h4>
            <p className="text-lg text-gray-400">
              Boost your heart health and endurance with our cardio training programs. Whether it's treadmill running, cycling, or rowing, our cardio sessions will help you burn calories and enhance cardiovascular health.
            </p>
          </div>

          {/* Wellness Programs */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaAppleAlt className="text-5xl text-green-500 mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Wellness Programs</h4>
            <p className="text-lg text-gray-400">
              Our wellness programs go beyond physical fitness. We offer stress management workshops, sleep improvement sessions, and mindfulness practices to ensure a holistic approach to your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
