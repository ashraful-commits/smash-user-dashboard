import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type maxWidthType = {
  className?: string;
  children: ReactNode;
};
export type leaderType = {
  leaderAvatar: StaticImageData | String;
  name: Number;
  Id: Number;
  game: Number;
  point: String;
};
export type UpcomingType = {
  tourImg: StaticImageData | String;

  date: String;
  time: String;
  title: String;
  prize: Number;
  Participant: Number;
};
export type eventType = {
  tourImg: StaticImageData | String;

  date: String;
  time: String;
  title: String;

  Participant: Number;
};
export type MostPopularType = {
  tourImg: StaticImageData | String;

  title: String;
};
