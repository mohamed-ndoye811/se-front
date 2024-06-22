import { StudyClass } from "@/types/studyClass.type";
import Image from "next/image";
import "./study-class-component.scss";

type Props = {
  studyClass: StudyClass;
};

export default function StudyClassComponent({ studyClass }: Props) {
  return (
    <div
      className={`study-class ${studyClass.open ? "" : "closed"}`}
      key={studyClass.age}
    >
      <div className="text">
        <p>cursus</p>
        <p className="label">{studyClass.name}</p>
        <p className="age">{studyClass.age} ans</p>
        {!studyClass.open && <p className="closed">À venir</p>}
      </div>

      <Image
        src={studyClass.image}
        alt={`${studyClass.name} background`}
        className="background"
      />
    </div>
  );
}
