import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type maxWidthType = {
  className?: string;
  children: ReactNode;
};
export type leaderType = {
  leaderAvatar: StaticImageData | string;
  name: string;
  Id: number;
  game: string;
  point: number;
};
export type UpcomingType = {
  tourImg: StaticImageData | string;
  date: string;
  time: string;
  title: string;
  prize: number;
  Participant: number;
};
export type eventType = {
  tourImg: StaticImageData | string;
  date: string;
  time: string;
  title: string;
  Participant: number;
};
export type MostPopularType = {
  tourImg: StaticImageData | string;
  title: string;
};
export type SliderType = {
  bigLeague: StaticImageData | string;
};
export type AchievementType = {
  prize: number;
  time: string;
  banner: StaticImageData | string;
  title: string;
  left: number;
};
