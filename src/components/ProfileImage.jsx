import React, { useState } from 'react';
import Image from "next/image";

export default function ProfileImage() {
  const [image, setImage] = useState(false);

  // Fungsi untuk toggle status image
  function scaleImage() {
    setImage(!image);
  }

  return (
    <div className='image-area cursor-pointer z-10'>
      {/* Gambar kecil yang dapat diklik */}
      <Image
        src="/profile.png"
        alt="Madeline Profile"
        width={100}
        height={100}
        className="rounded-full z-10"
        onClick={scaleImage} // Membuka gambar besar saat gambar kecil di-klik
      />

      {/* Modal gambar besar jika `image` true */}
      {image && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={scaleImage}>
          
          
          {/* Gambar besar yang ditampilkan */}
          <Image
            src="/profile.png"
            alt="Madeline Profile"
            width={400}
            height={400}
            className="rounded-full z-50"
          />
        </div>
      )}
    </div>
  );
}
