import React, { useEffect, useState } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate an array of random shooting stars spanning across the screen
    const generateStars = () => {
      const newStars = [];
      const numStars = 35; // Number of active stars in the background
      
      for (let i = 0; i < numStars; i++) {
        // We start them far top right and top left to fall down across the page diagonally
        // (rotate(150deg) makes them fly bottom-leftwards)
        newStars.push({
          id: i,
          left: Math.random() * 150 - 20 + '%', 
          top: Math.random() * -100 + '%', 
          delay: Math.random() * 12 + 's', // Stagger their entry dramatically up to 12s
          duration: Math.random() * 5 + 3 + 's', // Random duration between 3s and 8s
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    // Absolute inset-0 covers only the parent section
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star absolute h-[2px]"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
