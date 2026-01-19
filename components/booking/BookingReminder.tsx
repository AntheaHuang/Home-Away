"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PendingBooking = {
  id: string;
  expiresAt: string;
};

function BookingReminder() {
  const [pendingBooking, setPendingBooking] = useState<PendingBooking | null>(
    null
  );
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  async function fetchPendingBooking() {
    const res = await fetch("/api/has-pending-booking");
    const booking: PendingBooking = await res.json();

    setPendingBooking(booking);

    if (booking) {
      // Calculate remaining seconds
      const expiryTime = new Date(booking.expiresAt).getTime();
      setRemainingSeconds(Math.floor((expiryTime - Date.now()) / 1000));
    }
  }
  useEffect(() => {
    fetchPendingBooking();

    // Refetch every 5 seconds
    const interval = setInterval(() => {
      fetchPendingBooking();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!pendingBooking || remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Clear the pending booking when time runs out
          setPendingBooking(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds, pendingBooking]);

  if (!pendingBooking) return null;

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
