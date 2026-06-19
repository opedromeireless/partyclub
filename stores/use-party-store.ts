import { create } from "zustand";
import { tickets as initialTickets } from "@/lib/mock-data";
import type { Ticket } from "@/types/domain";

type PartyState = {
  hypes: number;
  favoriteEventIds: string[];
  tickets: Ticket[];
  toggleFavorite: (eventId: string) => void;
  buyTicket: (eventId: string) => Ticket;
  addHypes: (points: number) => void;
};

export const usePartyStore = create<PartyState>((set) => ({
  hypes: 1840,
  favoriteEventIds: ["neon-rooftop"],
  tickets: initialTickets,
  toggleFavorite: (eventId) =>
    set((state) => ({
      favoriteEventIds: state.favoriteEventIds.includes(eventId)
        ? state.favoriteEventIds.filter((id) => id !== eventId)
        : [...state.favoriteEventIds, eventId],
    })),
  buyTicket: (eventId) => {
    const ticket: Ticket = {
      id: `ticket-${Date.now()}`,
      eventId,
      status: "active",
      qrCode: `PC-${eventId.toUpperCase().slice(0, 6)}-${Math.random()
        .toString(36)
        .slice(2, 8)
        .toUpperCase()}`,
    };

    set((state) => ({
      tickets: [ticket, ...state.tickets],
      hypes: state.hypes + 80,
    }));

    return ticket;
  },
  addHypes: (points) => set((state) => ({ hypes: state.hypes + points })),
}));
