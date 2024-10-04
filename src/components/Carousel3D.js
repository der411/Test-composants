import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel3D = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(cards) || cards.length === 0) {
    return <div className="text-center">No cards to display</div>;
  }

  const cardVariants = {
    center: {
      rotateY: 0,
      scale: 1.2,
      zIndex: 5,
      opacity: 1,
      x: '0%',
      transition: { duration: 0.5 },
    },
    left: {
      rotateY: 45,
      scale: 0.8,
      zIndex: 3,
      opacity: 0.7,
      x: '-50%',
      transition: { duration: 0.5 },
    },
    right: {
      rotateY: -45,
      scale: 0.8,
      zIndex: 3,
      opacity: 0.7,
      x: '50%',
      transition: { duration: 0.5 },
    },
    hidden: {
      rotateY: 90,
      scale: 0.6,
      zIndex: 1,
      opacity: 0,
      x: '100%',
      transition: { duration: 0.5 },
    },
  };

  const getCardStyle = (index) => {
    const offset = (index - currentIndex + cards.length) % cards.length;
    if (offset === 0) return 'center';
    if (offset === 1) return 'right';
    if (offset === cards.length - 1) return 'left';
    return 'hidden';
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div
      className="relative w-full h-96 overflow-hidden bg-gray-100"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id || index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={getCardStyle(index)}
              className="absolute w-64 h-80 bg-white rounded-lg shadow-xl cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-full h-full p-4 flex flex-col justify-between">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {cards.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={handlePrev}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={handleNext}
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel3D;
