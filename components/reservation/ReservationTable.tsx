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

import { TableInfo } from "@/utils/types";

export default function ReservationTable({
  reservations,
}: {
  reservations: TableInfo[];
}) {
  if (reservations.length === 0) {
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
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Contact Guest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } =
              reservation;
            const { id: propertyId, name, country } = reservation.property;
            const { email, firstName } = reservation.profile;

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
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>
                  <Link
                    href={`mailto:${email}?subject=About your reservation at ${name}`}
                    className="underline text-primary tracking-wide"
                  >
                    Email {firstName}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
