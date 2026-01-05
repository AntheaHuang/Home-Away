"use client";

import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";

type RatingInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: number;
};

export default function RatingInput({
  name,
  labelText,
  defaultValue = 0,
}: RatingInputProps) {
  const [rating, setRating] = useState(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mb-2 max-w-xs space-y-1">
      <Label className="capitalize">{labelText || name}</Label>

      {/* Stars */}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const active = hovered !== null ? star <= hovered : star <= rating;

          return (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(null)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 transition ${
                  active ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Hidden form value */}
      <input type="hidden" name={name} value={rating} required />
    </div>
  );
}
