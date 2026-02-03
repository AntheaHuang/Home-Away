export type ToastStatus = "success" | "info" | "error" | "warning";

export type FormStateWithStatus = {
  message: string;
  status: ToastStatus;
};

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<FormStateWithStatus>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};

export type TableInfo = {
  id: string;
  orderTotal: number;
  totalNights: number;
  checkIn: Date;
  checkOut: Date;
  paymentStatus: boolean;
  expiresAt: Date;
  profile?: { firstName: string; email: string };
  property: {
    id: string;
    name: string;
    country: string;
    profile: { firstName: string; email: string };
  };
};
