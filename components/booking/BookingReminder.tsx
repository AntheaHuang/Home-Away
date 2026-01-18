"use client";

import { hasPendingBooking } from "@/utils/actions";
import Link from "next/link";
import { useEffect, useState } from "react";

type pendingBooking = {
  id: string;
  expiresAt: Date;
};
function BookingReminder() {
  const [bookings, setBookings] = useState<pendingBooking[]>([]);
  const [visible, setVisible] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  async function fetchPendingBookings() {
    const pendingBookings: pendingBooking[] = await hasPendingBooking();

    if (pendingBookings.length === 0) {
      setVisible(false);
    } else {
      setBookings(pendingBookings);

      // Use the earliest expiry for countdown
      // Will avoid multiple pending bookings in future implementation
      const earliestExpiry = Math.min(
        ...pendingBookings.map((booking) => booking.expiresAt.getTime())
      );
      setRemainingSeconds(Math.floor((earliestExpiry - Date.now()) / 1000));
    }
  }

  useEffect(() => {
    fetchPendingBookings();

    // refetch every 5 seconds
    const interval = setInterval(() => {
      fetchPendingBookings();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!visible || remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds, visible]);

  if (!visible || bookings.length === 0) return null;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-primary text-primary-foreground font-medium flex gap-8 items-center">
      <p>
        You have a pending booking which will expire in {minutes}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <Link href={`/bookings`} className="underline tracking-wide font-light">
        View Details
      </Link>
    </div>
  );
}

export default BookingReminder;
