import { NextResponse } from "next/server";
import { hasPendingBooking } from "@/utils/actions";

export async function GET() {
  const pendingBooking = await hasPendingBooking();
  return NextResponse.json(pendingBooking);
}
