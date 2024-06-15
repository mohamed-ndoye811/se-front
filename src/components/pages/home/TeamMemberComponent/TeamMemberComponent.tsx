import Image from "next/image";
import React from "react";
import "./team-member-component.scss";
import { TeamMember } from "@/types/teamMember.type";

type Props = {
  teamMember: TeamMember;
};

function TeamMemberComponent({
  teamMember: { lastname, firstname, role, avatar },
}: Props) {
  return (
    <div className={"team-member"}>
      <Image
        src={avatar}
        alt={`photo de ${firstname} ${lastname}`}
        className={"image avatar"}
      />
      <div className="details">
        <div className="name">
          <div className="firstname">{firstname}</div>
          <div className="lastname">{lastname}</div>
        </div>
        <p className="role">{role}</p>
      </div>
    </div>
  );
}

export default TeamMemberComponent;
