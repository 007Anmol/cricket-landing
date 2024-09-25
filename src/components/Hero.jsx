import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen bg-[url('/src/assets/cricket-hero.jpg')] bg-cover bg-center flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-7xl mx-auto px-8" // Added consistent padding
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to CricketMania</h1>
        <p className="text-xl md:text-2xl mb-8">The Ultimate Cricket Experience</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 px-6 py-3 rounded-full text-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
