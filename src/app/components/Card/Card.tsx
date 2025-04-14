import { IGame } from "@/app/types/types";
import { getPlatformIcon } from "@/app/util/getPlatformIcon";
import Image from "next/image";

interface ICard {
  game: IGame;
}

const Card: React.FC<ICard> = ({ game }) => {
  return (
    <div className="border-2 border-blue rounded-lg">
      <Image
        src={game.image}
        width={264}
        height={352}
        alt={"cover art for the game"}
        className="w-full rounded-t-md"
      />
      <div className="p-3">
        <p className="text-base sm:text-lg lg:text-base xl:text-lg font-bold">
          {game.title}
        </p>
        <p className="mb-1">Release date: {game.releaseDate}</p>
        <div className="flex gap-2 flex-wrap">
          {game.platforms.map((p) => (
            <span key={p} title={p}>
              <svg viewBox="0 0 16 16" className="w-5 h-5">
                <title>{p}</title>
                {getPlatformIcon(p)}
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
