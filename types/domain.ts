export type EventGenre = "Eletrônica" | "Funk" | "Sertanejo" | "Rock" | "Open Format";

export type PartyEvent = {
  id: string;
  title: string;
  organizer: string;
  genre: EventGenre;
  startsAt: string;
  venue: string;
  city: string;
  distanceKm: number;
  price: number;
  coverUrl: string;
  latitude: number;
  longitude: number;
  hypesReward: number;
  capacity: number;
  confirmed: number;
  rules: string[];
  artists: string[];
  description: string;
  boosted?: boolean;
};

export type SocialPost = {
  id: string;
  author: string;
  avatar: string;
  eventId: string;
  text: string;
  likes: number;
  createdAt: string;
};

export type Ticket = {
  id: string;
  eventId: string;
  status: "active" | "used" | "refunded";
  qrCode: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
};
