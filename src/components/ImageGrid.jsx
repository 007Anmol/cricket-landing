import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  const images = [
    { src: require('../assets/image1.jpg'), alt: 'Click here for Schedule' },
    { src: require('../assets/image2.jpg'), alt: 'Get your customized cricket wallpapers' },
    { src: require('../assets/image3.jpg'), alt: ' Team India Insider' },
    { src: require('../assets/image4.jpg'), alt: 'IPL-Cricket Festival' },
    { src: require('../assets/image5.jpg'), alt: 'Buy your Favorite Apparels' },
    { src: require('../assets/image6.jpg'), alt: 'Buy Tickets' },
  ];
  

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3, // Controls how images animate one after the other
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12">Discover Our Website</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group bg-white shadow-lg rounded-lg overflow-hidden p-4"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="overflow-hidden rounded-lg">
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Extra scaling on hover
              />
            </motion.div>
            <p className="text-center mt-4 font-semibold text-lg">{image.alt}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGrid;
