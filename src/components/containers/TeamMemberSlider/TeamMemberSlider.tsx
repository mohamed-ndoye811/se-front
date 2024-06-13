"use client";

import React from "react";
import { TeamMember } from "@/types/teamMember.type";
import { TeamMemberComponent } from "@/components/pages/home";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

type Props = {
  teamMembers: TeamMember[];
};

function TeamMemberSlider({ teamMembers }: Props) {
  return (
    <div className={"team-member-slider"}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        navigation
        loop
      >
        {teamMembers.map((teamMember, index) => (
          <SwiperSlide key={`${teamMember}-${index}`}>
            <TeamMemberComponent
              key={teamMember.firstname}
              firstname={teamMember.firstname}
              lastname={teamMember.lastname}
              role={teamMember.role}
              avatar={teamMember.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeamMemberSlider;
