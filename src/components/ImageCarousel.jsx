import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useRef , useEffect, } from "react";

export default function ImageCarousel({images}) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    // Periksa apakah gambar terakhir sudah ditampilkan
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
   const handlePrev = () => {
    // Periksa apakah gambar terakhir sudah ditampilkan
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full lg:w-1/2">
        <img
          src={images[currentImageIndex]}
          alt={`Project Screenshot ${currentImageIndex + 1}`}
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={handleNext}
          className="absolute text-2xl text-gray-500 hover:text-gray-300 right-[-2] top-1/2 transform -translate-y-1/2  "
        ><FaArrowAltCircleRight /></button>
        <button
          onClick={handlePrev}
          className="absolute text-2xl text-gray-500 hover:text-gray-300 left-[-2] top-1/2 transform -translate-y-1/2  "
        ><FaArrowAltCircleLeft /></button>
    </div>
  )
}
