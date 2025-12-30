"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";

import { Button } from "../ui/button";
import { useState } from "react";

export default function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };
  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />
      <CardHeader className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={decreaseCount}
              className="h-6 w-6 p-0"
            >
              <LuMinus className="text-primary" />
            </Button>
            <span className="text-lg w-4 text-center">{count}</span>
            <Button
              variant="outline"
              type="button"
              onClick={increaseCount}
              className="h-6 w-6 p-0"
            >
              <LuPlus className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
