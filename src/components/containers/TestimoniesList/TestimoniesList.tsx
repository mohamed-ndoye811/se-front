import React from "react";

import { TestimonyComponent } from "@/components/pages/home";
import { Testimony } from "@/types/testimony.type";

import avatarExampleImg from "@/images/home/avatar.png";

type Props = {
	testimonies?: Testimony[];
};

const placeholderTestimonies: Testimony[] = [
	{
		id: 1,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 2,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 3,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 4,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
];

export default function TestimoniesList({ testimonies }: Props) {
	return (
		<>
			{testimonies &&
				testimonies.map((testimony, index) => {
					return (
						<TestimonyComponent
							key={"testimony-" + index}
							testimony={testimony}
						/>
					);
				})}

			{!testimonies &&
				placeholderTestimonies.map((testimony, index) => {
					return (
						<TestimonyComponent
							key={"testimony-" + index}
							testimony={testimony}
						/>
					);
				})}
		</>
	);
}
