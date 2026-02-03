"use client";

import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";

import { formatDate, formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { deleteBookingAction } from "@/utils/actions";
import BookingStatusCell from "@/components/booking/BookingStatusCell";
import { TableInfo } from "@/utils/types";

export default function BookingTable({ bookings }: { bookings: TableInfo[] }) {
  if (bookings.length === 0) {
    return;
  }

  return (
    <div className="mb-16">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Contact Property Owner</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const {
              id,
              orderTotal,
              totalNights,
              checkIn,
              checkOut,
              paymentStatus,
              expiresAt,
            } = booking;
            const { id: propertyId, name, country } = booking.property;
            const { email, firstName } =
              booking.profile ?? booking.property.profile;

            const startDate = formatDate(checkIn);
            const endDate = formatDate(checkOut);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>
                  <CountryFlagAndName countryCode={country} />
                </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <BookingStatusCell
                  id={id}
                  paymentStatus={paymentStatus}
                  expiresAt={expiresAt}
                />
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>
                  <Link
                    href={`mailto:${email}?subject=Inquiry about ${name}`}
                    className="underline text-primary tracking-wide"
                  >
                    Email {firstName}
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteBooking bookingId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking} refreshPath="/bookings">
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
