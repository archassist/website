import { useRef, useState } from "react";

import front0 from "../assets/rotate/front0.jpeg";
import front45 from "../assets/rotate/front45.jpeg";
import left90 from "../assets/rotate/left90.jpeg";
import rear135 from "../assets/rotate/rear135.jpeg";
import rear180 from "../assets/rotate/rear180.jpeg";
import rear225 from "../assets/rotate/rear225.jpeg";
import right270 from "../assets/rotate/right270.jpeg";
import front315 from "../assets/rotate/front315.jpeg";

const frames = [
  front0,
  front45,
  left90,
  rear135,
  rear180,
  rear225,
  right270,
  front315,
];

// Preload images
frames.forEach((src) => {
  const img = new Image();
  img.src = src;
});

export default function ModelViewer() {
  const [frame, setFrame] = useState(0);

  const dragging = useRef(false);
  const lastX = useRef(0);

  const startDrag = (x) => {
    dragging.current = true;
    lastX.current = x;
  };

  const moveDrag = (x) => {
    if (!dragging.current) return;

    const dx = x - lastX.current;

    if (Math.abs(dx) > 18) {
      if (dx > 0) {
        setFrame((prev) => (prev - 1 + frames.length) % frames.length);
      } else {
        setFrame((prev) => (prev + 1) % frames.length);
      }

      lastX.current = x;
    }
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
        rounded-[28px]
        cursor-grab
        active:cursor-grabbing
        touch-pan-y
        select-none
      "
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={stopDrag}
    >
      <img
        src={frames[frame]}
        alt="Architecture Model"
        draggable={false}
        loading="eager"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-contain
          object-center
          pointer-events-none
          select-none
        "
      />

      {/* Drag Button */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          flex
          items-center
          gap-3
          rounded-full
          bg-[#4A433E]/95
          backdrop-blur-xl
          border
          border-white/10
          px-5
          py-2.5
          shadow-2xl
          whitespace-nowrap
        "
      >
        <span
          className="
            text-[#D4AF6A]
            text-[10px]
            sm:text-[11px]
            md:text-[12px]
            uppercase
            tracking-[0.35em]
            font-medium
          "
        >
          DRAG TO ROTATE
        </span>

        <span className="text-[#D4AF6A] text-base">
          →
        </span>
      </div>
    </div>
  );
}