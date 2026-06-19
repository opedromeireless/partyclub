import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { GlassCard } from "@/components/ui/glass-card";
import type { PartyEvent } from "@/types/domain";

type EventCardProps = {
  event: PartyEvent;
  favorite?: boolean;
  onToggleFavorite?: () => void;
};

export function EventCard({ event, favorite, onToggleFavorite }: EventCardProps) {
  const occupancy = Math.round((event.confirmed / event.capacity) * 100);

  return (
    <Link href={{ pathname: "/event/[id]", params: { id: event.id } }} asChild>
      <Pressable>
        <GlassCard style={{ gap: 14 }}>
          <View
            style={{
              minHeight: 128,
              borderRadius: 22,
              borderCurve: "continuous",
              backgroundColor: Colors.surfaceStrong,
              overflow: "hidden",
              padding: 18,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text selectable style={{ color: Colors.secondary, fontWeight: "900" }}>
                {event.genre}
              </Text>
              {event.boosted ? (
                <Text selectable style={{ color: Colors.warning, fontWeight: "900" }}>
                  BOOST
                </Text>
              ) : null}
            </View>
            <Text selectable style={{ color: Colors.ink, fontSize: 28, fontWeight: "900" }}>
              {event.title}
            </Text>
          </View>

          <View style={{ gap: 8 }}>
            <Text selectable style={{ color: Colors.ink, fontSize: 18, fontWeight: "800" }}>
              {event.venue}
            </Text>
            <Text selectable style={{ color: Colors.muted }}>
              {event.city} • {event.distanceKm.toFixed(1)} km • {occupancy}% confirmado
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text selectable style={{ color: Colors.success, fontSize: 18, fontWeight: "900" }}>
              R$ {event.price}
            </Text>
            <Pressable
              onPress={(pressEvent) => {
                pressEvent.stopPropagation();
                onToggleFavorite?.();
              }}
              style={{
                borderRadius: 999,
                backgroundColor: favorite ? Colors.primary : Colors.surfaceStrong,
                paddingHorizontal: 14,
                paddingVertical: 8,
              }}
            >
              <Text style={{ color: Colors.ink, fontWeight: "900" }}>{favorite ? "Salvo" : "Salvar"}</Text>
            </Pressable>
          </View>
        </GlassCard>
      </Pressable>
    </Link>
  );
}
