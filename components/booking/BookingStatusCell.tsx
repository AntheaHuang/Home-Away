"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TableCell } from "../ui/table";

function BookingStatusCell({
  id,
  paymentStatus,
  expiresAt,
}: {
  id: string;
  paymentStatus: boolean;
  expiresAt: Date;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!paymentStatus) {
      const now = new Date();
      if (new Date(expiresAt) <= now) {
        e.preventDefault();
        toast.error(
          "This pending booking has expired. Please start a new booking."
        );
        // refresh the page
        router.refresh();
      }
    }
  };

  return (
    <TableCell>
      {paymentStatus ? (
        "Paid"
      ) : (
        <Link
          href={`/checkout?bookingId=${id}`}
          className="underline tracking-wide"
          onClick={handleClick}
        >
          Pending
        </Link>
      )}
    </TableCell>
  );
}

export default BookingStatusCell;
