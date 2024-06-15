import { StaticImageData } from "next/image";

export type Testimony = {
  id: number;
  firstname: string;
  lastname: string;
  avatar: StaticImageData;
  role: string;
  review: string;
  rate: number;
};
