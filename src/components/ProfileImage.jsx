import React, { useState } from 'react';
import Image from "next/image";

export default function ProfileImage() {
  const [image, setImage] = useState(false);

  // Fungsi untuk toggle status image
  function scaleImage() {
    setImage(!image);
  }

  return (
    <div className='image-area cursor-pointer z-10 max-w-40'>
      <Image src="/profile.png" alt="Madeline Profile" width={200} height={200} className="rounded-full" onClick={scaleImage} />

      {image && (
        <div className="fixed top-0 left-0 w-full h-full bg-stone-950/70 flex justify-center items-center z-50" onClick={scaleImage}>
          <Image src="/profile.png" alt="Madeline Profile" width={300} height={300} className="rounded-full "/>
        </div>
      )}
    </div>

  );
}
