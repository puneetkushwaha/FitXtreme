import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/plans");
  };

  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/gym bg.jpg')" }}
    >
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Unleash Your Potential
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Join FitXtreme and transform your body & mind.
      </motion.p>
      <motion.button
        className="mt-6 px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:scale-110 hover:rotate-3 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all duration-500 ease-in-out transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        onClick={handleClick}
      >
        Get Started
      </motion.button>
    </section>
  );
}
