export interface BookedRange {
  start: string;
  end: string;
  guestName?: string;
  bookingId?: string;
}

export interface BookingDetails {
  guestName: string;
  dates: string;
  nights: number;
  totalPrice: number;
}

export interface NotificationState {
  message: string;
  type: "error" | "warning" | "success";
}

export interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  profileLink: string;
}
