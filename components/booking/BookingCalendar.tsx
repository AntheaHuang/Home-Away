"use client";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useProperty } from "@/utils/store";

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/utils/calendar";
import { DateRange } from "react-day-picker";

export default function BookingCalendar() {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast.info("Please make sure to select date range that is available");
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range]);

  return (
    <>
      <Calendar
        mode="range"
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className="mb-4"
        disabled={blockedPeriods}
      />
    </>
  );
}
