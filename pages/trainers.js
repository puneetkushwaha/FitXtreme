import { useState } from "react";
import Image from "next/image";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      id: 1,
      name: "Ayush Bajpai",
      image: "/trainer (2).jpg",
      bio: "John is a certified personal trainer with over 5 years of experience in strength training and nutrition. His passion is helping clients achieve their fitness goals and maintain a healthy lifestyle.",
      expertise: "Strength Training, Nutrition",
      certifications: "Certified Personal Trainer (CPT), Nutrition Specialist",
    },
    {
      id: 2,
      name: "Akbar Raza",
      image: "/trainer (1).jpg",
      bio: "Jane specializes in yoga and mindfulness coaching. She helps clients to not only improve their fitness but also their mental well-being.",
      expertise: "Yoga, Mindfulness",
      certifications: "Certified Yoga Instructor, Wellness Coach",
    },
    {
      id: 3,
      name: "Sarthak Gupta",
      image: "/trainer (3).jpg",
      bio: "Sam is an expert in HIIT training and group fitness. He focuses on high-energy workouts that boost endurance and strength.",
      expertise: "HIIT, Group Fitness",
      certifications: "Certified HIIT Trainer, Group Fitness Instructor",
    },
  ];

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-black text-white rounded-lg shadow-md p-6 cursor-pointer transition-transform transform hover:scale-105 glass"
            onClick={() => handleTrainerClick(trainer)}
          >
            <div className="w-full h-64 relative mb-4">
              <Image
                src={trainer.image}
                alt={trainer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
            <p className="text-white">{trainer.bio}</p>
          </div>
        ))}
      </div>

      {/* Modal for trainer details */}
      {selectedTrainer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black text-white p-8 rounded-lg max-w-2xl w-full glass"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
          >
            <h3 className="text-2xl font-semibold mb-4">{selectedTrainer.name}</h3>
            <div className="w-full h-48 relative mb-4">
              <Image
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg text-white mb-4">{selectedTrainer.bio}</p>
            <div className="mb-4">
              <h4 className="font-semibold text-blue-500">Expertise:</h4>
              <p className="text-blue-600">{selectedTrainer.expertise}</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-500">Certifications:</h4>
              <p className="text-green-600">{selectedTrainer.certifications}</p>
            </div>
            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
