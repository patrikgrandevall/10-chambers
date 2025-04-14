"use client";

import { ChangeEvent, useState } from "react";
import Card from "../Card/Card";
import { IGame } from "@/app/types/types";
import { motion } from "motion/react";

interface ICardSection {
  games: IGame[];
}

const CardSection: React.FC<ICardSection> = ({ games }) => {
  const [searchValue, setSearchValue] = useState("");
  const [animationHasRun, setAnimationHasRun] = useState(false);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="mt-6">
      <input
        className="border-black dark:border-white border-2 p-2 rounded-md"
        type="text"
        aria-label="Search title..."
        placeholder="Search title..."
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredGames.map((game, i) => (
          <motion.div
            key={game.title}
            initial={
              animationHasRun
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                ease: "easeOut",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
                delay: 1.15 + 0.08 * i,
              },
            }}
            onAnimationComplete={() => setAnimationHasRun(true)}
          >
            <Card game={game} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default CardSection;
