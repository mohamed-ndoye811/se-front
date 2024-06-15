import React from "react";

import { TestimonyComponent } from "@/components/pages/home";
import { Testimony } from "@/types/testimony.type";

type Props = {
  testimonies: Testimony[];
};

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
    </>
  );
}
