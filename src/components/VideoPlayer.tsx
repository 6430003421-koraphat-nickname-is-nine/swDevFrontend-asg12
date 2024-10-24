"use client";

import { useEffect } from "react";
import { useRef } from "react";

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // alert("wigth is " + vdoRef.current?.videoWidth);
    if (isPlaying) {
      //   alert("Play VDO");
      vdoRef.current?.play();
    } else {
      //   alert("Pause VDO");
      vdoRef.current?.pause();
    }
  }, [isPlaying]);
  return (
    <video className="w-[40%]" src={vdoSrc} ref={vdoRef} muted loop controls />
  );
}
