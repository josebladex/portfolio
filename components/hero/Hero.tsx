'use client';
import React from 'react';
import Preloader from '@/app/preloader';

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <Preloader />
    </div>
  );
};

export default Hero;
