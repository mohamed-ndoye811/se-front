import type { StaticImageData } from "next/image";

export type TeamMember = {
	firstname: string;
	role: string;
	lastname: string;
	avatar: StaticImageData;
};
