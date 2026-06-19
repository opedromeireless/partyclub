import { useQuery } from "@tanstack/react-query";
import { events } from "@/lib/mock-data";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => events,
  });
}

export function useEvent(eventId?: string) {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: async () => events.find((event) => event.id === eventId) ?? null,
    enabled: Boolean(eventId),
  });
}
