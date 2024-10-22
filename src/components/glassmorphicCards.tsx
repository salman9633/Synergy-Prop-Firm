// components/GlassmorphicCard.js

import Image from 'next/image';

export default function GlassmorphicCard() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="relative glassmorphism p-6 max-w-sm w-full">
       

        {/* Card Content */}
        <div className="text-center mt-4">
          <p className="text-white text-lg font-medium mb-4">
            "Meaningful insights and maximum impact. Karina made us data converts!"
          </p>

          <p className="text-white font-semibold">
            Maya Kumar
          </p>
          <p className="text-purple-300">
            Brooknew Ltd.
          </p>
        </div>

        {/* Floating Add Button */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg cursor-pointer">
            <span className="text-black text-xl font-bold">+</span>
          </div>
        </div>
      </div>
    // </div>
  );
}
