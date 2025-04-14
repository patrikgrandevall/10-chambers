export interface IGame {
  title: string;
  releaseDate: string;
  platforms: Platform[];
  image: string;
}

export type Platform =
  | "PC"
  | "Playstation 5"
  | "Playstation 4"
  | "Playstation 3"
  | "Xbox Series X|S"
  | "Xbox One"
  | "Xbox 360"
  | "Game Boy Color"
  | "Nintendo 3DS"
  | "Nintendo Switch"
  | "Xbox"
  | "Playstation 2"
  | "iOS";
