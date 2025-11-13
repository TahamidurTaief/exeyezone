'use client';

import Image from 'next/image';
import { useState } from 'react';

const CourseCardImage = ({ src, alt, course_type }) => {
  const [imageSrc, setImageSrc] = useState(src || '/img/no_image.jpg');

  return (
    <>
      <Image 
        src={imageSrc}
        alt={alt || 'Course image'}
        width={400}
        height={225}
        className="w-full h-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
        onError={() => {
          setImageSrc('/img/no_image.jpg');
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Live Badge */}
      {course_type === 'Live' && (
        <div className="absolute top-3 right-3 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          Live
        </div>
      )}
    </>
  );
};

export default CourseCardImage;
