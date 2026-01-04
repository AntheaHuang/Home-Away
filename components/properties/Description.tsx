"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";

export default function Description({ description }: { description: string }) {
  const [isFullShown, setIsFullShown] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullShown(!isFullShown);
  };

  const displayedDescription =
    isLongDescription && !isFullShown
      ? words.splice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toggleDescription}>
          {isFullShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}
