import React, { useState } from 'react';
import Image from "next/image";

export default function ProfileImage() {
  const [image, setImage] = useState(false);

  // Fungsi untuk toggle status image
  function scaleImage() {
    setImage(!image);
  }

  return (
    <div className='image-area cursor-pointer z-50'>
      <Image src="/profile.png" alt="Madeline Profile" width={100} height={100} className="rounded-sm" onClick={scaleImage} />

      {image && (
        <div className="fixed top-0 left-0 w-full h-full bg-stone-950/70 flex justify-center items-center" onClick={scaleImage}>
          <Image src="/profile.png" alt="Madeline Profile" width={300} height={300} className="rounded-sm "/>
        </div>
      )}
    </div>

  );
}
