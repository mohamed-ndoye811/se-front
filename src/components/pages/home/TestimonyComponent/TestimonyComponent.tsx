import Image from "next/image";
import React from "react";
import "./testimony-component.scss";
import { Testimony } from "@/types/testimony.type";

type Props = { testimony: Testimony };

function TestimonyComponent({
  testimony: { review, avatar, firstname, lastname, role, rate },
}: Props) {
  return (
    <div className={"testimony"}>
      <div className="reviewer">
        <Image src={avatar} alt="image prenom nom" className="avatar" />
        <div className="infos">
          <div className="name">
            <div className="last">{lastname}</div>
            <div className="first">{firstname}</div>
          </div>
          <div className="class">{role}</div>
        </div>
      </div>
      <div className="review">
        <p className="rate">{rate}/5</p>
        <p className="review">{review}</p>
      </div>
    </div>
  );
}

export default TestimonyComponent;
