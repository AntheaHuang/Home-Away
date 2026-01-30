"use client";

import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";
import { Modal } from "antd";

import { formatDate, formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TableInfo } from "@/utils/types";
import { useState } from "react";
import RatingInput from "../form/RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { Button } from "../ui/button";

export default function ReservationTable({
  reservations,
  isPast,
}: {
  reservations: TableInfo[];
  isPast?: boolean;
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
            {isPast && <TableHead>Rate Your Guest</TableHead>}
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
                {isPast && (
                  <TableCell>
                    <p
                      onClick={() => setIsModalVisible(true)}
                      className="underline text-primary tracking-wide cursor-pointer"
                    >
                      Leave a review for {firstName}
                    </p>
                    <Modal
                      title={`Leave your review for ${firstName}`}
                      open={isModalVisible}
                      footer={null}
                      onCancel={() => setIsModalVisible(false)}
                    >
                      <input
                        type="hidden"
                        name="propertyId"
                        value={propertyId}
                      />
                      <RatingInput name="rating" />
                      <TextAreaInput
                        name="comment"
                        labelText="Comment"
                        defaultValue="Nice guests"
                      />
                      <footer className="flex justify-end gap-8">
                        <Button
                          className="px-4 py-2 rounded"
                          onClick={() => setIsModalVisible(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="px-4 py-2 rounded"
                          onClick={() => setIsModalVisible(false)}
                        >
                          Submit
                        </Button>
                      </footer>
                    </Modal>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
