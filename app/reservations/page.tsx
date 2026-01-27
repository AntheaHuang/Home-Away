import { fetchReservations } from "@/utils/actions";
import Stats from "@/components/reservation/Stats";
import ReservationTable from "@/components/reservation/ReservationTable";
import { TableInfo } from "@/utils/types";

export default async function ReservationsPage() {
  const reservations: TableInfo[] = await fetchReservations();

  const activeReservations = reservations.filter(
    (reservation) => new Date(reservation.checkOut) >= new Date()
  );

  const pastReservations = reservations.filter(
    (reservation) => new Date(reservation.checkOut) < new Date()
  );

  return (
    <>
      <Stats />
      <div className="mt-16">
        <h4 className="mb-4 capitalize">
          active reservations : {activeReservations.length}
        </h4>
        <ReservationTable reservations={activeReservations} />
        <h4 className="mb-4 capitalize">
          past reservations : {pastReservations.length}
        </h4>
        <ReservationTable reservations={pastReservations} isPast={true} />
      </div>
    </>
  );
}
