// components/About.js

import Services from "./Services";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-black-500 to-indigo-600 py-16" id="about">
      <div className="container mx-auto px-6 md:px-12 text-center text-white">
        {/* Title */}
        <h2 className="text-4xl font-semibold mb-8">About FitXtreme</h2>

        {/* Content: Gym Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-4">
              FitXtreme is not just a gym; It&apos;s a fitness community that empowers you to reach your full potential. We offer top-of-the-line equipment, personalized training programs, and expert guidance every step of the way.
            </p>
            <p className="text-lg">
              From weight training to group fitness classes, FitXtreme is the perfect place for anyone looking to achieve their health and fitness goals, no matter their starting point.
            </p>
          </div>

          <div>
            <video
              src="/gym.mp4"
              className="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Services */}
        <Services />
      </div>
    </section>
  );
}
