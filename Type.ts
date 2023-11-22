import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type maxWidthType = {
  className?: string;
  children: ReactNode;
};
export type leaderType = {
  leaderAvatar: StaticImageData | string;
  name: string;
  Id: Number;
  game: Number;
  point: string;
};
export type UpcomingType = {
  tourImg: StaticImageData | string;

  date: string;
  time: string;
  title: string;
  prize: Number;
  Participant: Number;
};
export type eventType = {
  tourImg: StaticImageData | string;

  date: string;
  time: string;
  title: string;

  Participant: Number;
};
export type MostPopularType = {
  tourImg: StaticImageData | string;

  title: string;
};
