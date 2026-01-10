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
