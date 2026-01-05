"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function Comment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const longCommnet = comment.length > 100;
  const displayComment =
    longCommnet && !isExpanded ? `${comment.slice(0, 100)}...` : comment;
  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longCommnet && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
