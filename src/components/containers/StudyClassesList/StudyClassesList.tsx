import { StudyClass } from "@/types/studyClass.type";
import React from "react";

import senespoirs from "@/images/home/senespoirs.jpg";
import senelite from "@/images/home/senelite.jpg";
import senexperts from "@/images/home/senexperts.jpg";

import StudyClassComponent from "@/components/pages/home/StudyClassComponent/StudyClassComponent";

const studyClasses: StudyClass[] = [
	{
		age: "2-5",
		name: "sen'espoirs",
		image: senespoirs,
	},
	{
		age: "12-15",
		name: "sen'élite",
		image: senelite,
	},
	{
		age: "16-18",
		name: "sen'experts",
		image: senexperts,
	},
];

export default function StudyClassesList() {
	return (
		<>
			{studyClasses.map((studyClass) => (
				<StudyClassComponent studyClass={studyClass} key={studyClass.age}/>
			))}
		</>
	);
}
