import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion

export default function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // State untuk mencatat arah pergeseran
  const [isAnimating, setIsAnimating] = useState(false); // State untuk mengontrol animasi

  const handleNext = () => {
    if (isAnimating) return; // Jika animasi sedang berlangsung, tidak lakukan apa-apa
    setDirection('right'); // Set arah pergeseran ke kanan
    setIsAnimating(true); // Mulai animasi
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (isAnimating) return; // Jika animasi sedang berlangsung, tidak lakukan apa-apa
    setDirection('left'); // Set arah pergeseran ke kiri
    setIsAnimating(true); // Mulai animasi
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false); // Set isAnimating ke false setelah animasi selesai
  };

  return (
    <motion.div className="relative w-full object-cover h-full">
      {/* Background Laptop Image */}

      
      <div className='w-full h-full relative'>
        <img 
          src="/laptop.png" 
          alt="Laptop Background" 
          className="top-0 left-0 w-full h-full object-cover z-0 "
        />
        {/* Gunakan motion.img untuk gambar dengan animasi */}
        <motion.img
          src={images[currentImageIndex]}
          alt={`Project Screenshot ${currentImageIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full rounded-lg "
          key={currentImageIndex} // Menggunakan key untuk memicu animasi saat berganti gambar
          initial={{ opacity: 1, x: direction === 'right' ? 20 : -20 }} // Menyesuaikan arah geseran awal
          animate={{ opacity: 1, x: 0 }} // Animasi masuk ke posisi normal
          exit={{ opacity: 0, x: direction === 'right' ? -20 : 20 }} // Menyesuaikan arah geseran keluar
          transition={{ duration: 0.3 }} // Durasi animasi
          onAnimationComplete={handleAnimationComplete} // Mengatur animasi selesai
          style={{ zIndex: 1 }} // Menempatkan gambar animasi di atas laptop.png
        />
      </div>

      {/* Tombol Next dengan animasi opacity */}
      <motion.button
        onClick={handleNext}
        className="absolute text-xl sm:text-2xl transition-all duration-300 text-gray-300 hover:text-gray-300 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }} // Tombol dimulai dengan opacity 0
        animate={{ opacity: isAnimating ? 0 : 1 }} // Tombol hanya muncul setelah animasi selesai
        transition={{ duration: 0.3 }}
      >
        <FaArrowAltCircleRight />
      </motion.button>

      {/* Tombol Prev dengan animasi opacity */}
      <motion.button
        onClick={handlePrev}
        className="absolute text-lg sm:text-2xl transition-all duration-300 text-gray-300 hover:text-gray-300 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }} // Tombol dimulai dengan opacity 0
        animate={{ opacity: isAnimating ? 0 : 1 }} // Tombol hanya muncul setelah animasi selesai
        transition={{ duration: 0.5 }}
      >
        <FaArrowAltCircleLeft />
      </motion.button>
    </motion.div>
  );
}
