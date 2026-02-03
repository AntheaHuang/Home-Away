import { fetchBookings, deleteBookingAction } from "@/utils/actions";
import BookingTable from "@/components/booking/BookingTable";
import { TableInfo } from "@/utils/types";
import EmptyList from "@/components/home/EmptyList";

async function BookingsPage() {
  const bookings: TableInfo[] = await fetchBookings();

  const activeBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) >= new Date()
  );

  const pastBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) < new Date()
  );

  return (
    <div className="mt-4">
      <div className="mb-8">
        {activeBookings.length === 0 ? (
          <EmptyList heading="You have no active booking" />
        ) : (
          <h4 className="mb-4 font-bold text-lg capitalize">
            active bookings: {activeBookings.length}
          </h4>
        )}
        <BookingTable bookings={activeBookings} />
      </div>

      {pastBookings.length > 0 && (
        <div>
          <h4 className="mb-4 font-bold text-lg capitalize">
            past bookings : {pastBookings.length}
          </h4>
          <BookingTable bookings={pastBookings} />
        </div>
      )}
    </div>
  );
}

export default BookingsPage;
