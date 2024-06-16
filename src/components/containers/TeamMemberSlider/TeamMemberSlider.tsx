"use client";

import { TeamMemberComponent } from "@/components/pages/home";
import type { TeamMember } from "@/types/teamMember.type";
import React from "react";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";
import "./team-member-slider.scss";

type Props = {
  teamMembers: TeamMember[];
};

function TeamMemberSlider({ teamMembers }: Props) {
  return (
    <Splide
      className={"team-member-slider"}
      options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "0rem",
        pagination: true,
        mediaQuery: "min",
        breakpoints: {
          769: {
            destroy: true,
          },
        },
      }}
    >
      {teamMembers.map((teamMember, index) => (
        <SplideSlide key={`${teamMember}-${index}`}>
          <TeamMemberComponent
            key={teamMember.firstname}
            teamMember={teamMember}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default TeamMemberSlider;
