import { hasPendingBooking } from "@/utils/actions";
import Link from "next/link";

async function BookingReminder() {
  const bookings = await hasPendingBooking();

  if (bookings.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-primary text-primary-foreground font-medium flex gap-8 items-center">
      <p>You have a pending booking</p>
      <Link href={`/bookings`} className="underline tracking-wide font-light">
        View Details
      </Link>
    </div>
  );
}

export default BookingReminder;
