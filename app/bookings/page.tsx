import { fetchBookings, deleteBookingAction } from "@/utils/actions";
import BookingTable from "@/components/booking/BookingTable";
import { TableInfo } from "@/utils/types";

async function BookingsPage() {
  const bookings: TableInfo[] = await fetchBookings();

  const activeBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) >= new Date()
  );

  const pastBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) < new Date()
  );

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">
        active bookings : {activeBookings.length}
      </h4>
      <BookingTable bookings={activeBookings} />
      <h4 className="mb-4 capitalize">past bookings : {pastBookings.length}</h4>
      <BookingTable bookings={pastBookings} />
    </div>
  );
}

export default BookingsPage;
