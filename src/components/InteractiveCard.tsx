"use client";

import React, { SyntheticEvent } from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  //   function onCardSelected() {
  //     alert("You select " + contentname + ".");
  //   }

  function onCardMouseAction(event: SyntheticEvent) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.remove(
        "shadow-lg",
        "rounded-lg",
        "bg-white"
      );
      event.currentTarget.classList.add(
        "shadow-2xl",
        "bg-neutral-200",
        "rounded-lg"
      );
    } else {
      // default
      event.currentTarget.classList.remove(
        "shadow-2xl",
        "bg-neutral-200",
        "rounded-lg"
      );
      event.currentTarget.classList.add("shadow-lg", "bg-white", "rounded-lg");
    }
  }

  return (
    <div
      className=" w-full h-[400px] shadow-lg rounded-lg overflow-hidden border-2 border-solid border-lime-600 bg-white"
      //   onClick={() => onCardSelected()}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
