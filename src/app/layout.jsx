'use client';
import { useState, useRef , useEffect, } from "react";
import "../styles/globals.css";
import { motion } from "framer-motion";


export default function RootLayout({children}) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  return (
    <html lang="en">
      <body className="relative text-xs sm:text-sm lg:text-base text-gray-400 " onMouseMove={handleMouseMove}>
          <motion.div
            className="absolute w-50 h-50 rounded-full pointer-events-none lg:flex hidden"
            style={{
              top: position.y - 100 + "px",
              left: position.x - 100 + "px", // Agar cursor berada di tengah
              backgroundColor: "#2a447280", 
              boxShadow: "0 0 50vw rgba(78, 125, 207, 1)",
              filter: "blur(10vw)",
            }}
            animate={{ scale: [1, 1.2, 1] }} // Efek animasi scaling
            transition={{ duration: 0.2 }}
          />
        {children}
      </body>
    </html>
  );
}
