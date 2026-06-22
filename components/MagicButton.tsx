import React from 'react';
import { cn } from '@/lib/utils';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  buttonClasses
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  buttonClasses?: string;
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex h-12 w-fit md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none transition-colors duration-300 ease-in-out hover:bg-white hover:text-black',
        buttonClasses
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black',
          otherClasses
        )}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
