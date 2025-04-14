"use client";

import { motion } from "motion/react";
import { useState } from "react";

const StartUpAnimation: React.FC = () => {
  const [animationIsFinished, setAnimationIsFinished] = useState(false);

  if (!animationIsFinished) {
    return (
      <motion.div
        className="w-full h-full bg-gray-700 fixed z-10 top-0 left-0 flex items-center justify-center"
        animate={{ opacity: 0, visibility: "hidden" }}
        transition={{
          delay: 1,
          duration: 0.45,
          ease: "easeOut",
        }}
        onAnimationComplete={() => {
          setAnimationIsFinished(true);
          document.documentElement.classList.remove("overflow-hidden");
        }}
      >
        <div className="inline-block overflow-hidden">
          <motion.p
            animate={{ y: "100%" }}
            transition={{
              duration: 0.55,
              delay: 0.5,
              ease: "backInOut",
            }}
            className="text-6xl/[1,2] font-bold text-white"
          >
            Loading
          </motion.p>
          <motion.div
            animate={{ scaleX: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.35,
            }}
            className="h-1 w-full bg-white origin-right"
          ></motion.div>
        </div>
      </motion.div>
    );
  }
  return null;
};
export default StartUpAnimation;
