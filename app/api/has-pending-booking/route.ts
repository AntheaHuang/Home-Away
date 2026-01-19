import { NextResponse } from "next/server";
import { hasPendingBooking } from "@/utils/actions";

export async function GET() {
  const bookings = await hasPendingBooking();
  return NextResponse.json(bookings);
}
