import React from "react";
import Image, { StaticImageData } from "next/image";
import "./team-member-component.scss";

type Props = {
  firstname: string;
  role: string;
  lastname: string;
  avatar: StaticImageData;
};

function TeamMemberComponent({ lastname, firstname, role, avatar }: Props) {
  return (
    <div className={"team-member"}>
      <Image
        src={avatar}
        alt={`photo de ${firstname} ${lastname}`}
        className={"image avatar"}
      />
      <div className="name">
        <div className="firstname">{firstname}</div>
        <div className="lastname">{lastname}</div>
      </div>
      <p className="role">{role}</p>
    </div>
  );
}

export default TeamMemberComponent;
