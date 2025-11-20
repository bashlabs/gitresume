"use client";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect, useRef, useState } from "react";

export default function DemoSection() {
  return (
    <section className="w-2/3 mx-auto py-16 bg-gray-50 dark:bg-gray-900">
      <YouTubePlayer />
    </section>
  );
}

function YouTubePlayer() {
  const playerRef = useRef<any>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("plyr").then((Plyr) => {
        playerRef.current = new Plyr.default("#player");
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id={`player`}
      data-plyr-provider="youtube"
      data-plyr-embed-id={"ewrZfDbZCVE"}
    ></div>
  );
}
