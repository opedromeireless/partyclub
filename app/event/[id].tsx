import { useLocalSearchParams } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";
import { ActionButton } from "@/components/ui/action-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { useEvent } from "@/hooks/use-events";
import { usePartyStore } from "@/stores/use-party-store";

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: event } = useEvent(id);
  const buyTicket = usePartyStore((state) => state.buyTicket);

  if (!event) {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: Colors.background, justifyContent: "center", padding: 24 }}>
        <Text selectable style={{ color: Colors.ink }}>Evento não encontrado.</Text>
      </View>
    );
  }

  function handleBuyTicket() {
    const ticket = buyTicket(event!.id);
    Alert.alert("Ingresso gerado", `QR code: ${ticket.qrCode}`);
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <GlassCard style={{ minHeight: 220, justifyContent: "flex-end", backgroundColor: Colors.surfaceStrong }}>
        <Text selectable style={{ color: Colors.secondary, fontWeight: "900" }}>
          {event.genre} • {event.organizer}
        </Text>
        <Text selectable style={{ color: Colors.ink, fontSize: 38, fontWeight: "900", lineHeight: 42 }}>
          {event.title}
        </Text>
        <Text selectable style={{ color: Colors.muted, marginTop: 8 }}>
          {event.venue} • {event.city}
        </Text>
      </GlassCard>

      <GlassCard style={{ gap: 12 }}>
        <Text selectable style={{ color: Colors.ink, fontSize: 18, lineHeight: 26 }}>
          {event.description}
        </Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ flex: 1 }}>
            <ActionButton label={`R$ ${event.price}`} onPress={handleBuyTicket} />
          </View>
          <View style={{ flex: 1 }}>
            <ActionButton label={`+${event.hypesReward} HYPES`} tone="secondary" />
          </View>
        </View>
      </GlassCard>

      <SectionHeader title="Line-up" />
      <GlassCard style={{ gap: 10 }}>
        {event.artists.map((artist) => (
          <Text selectable key={artist} style={{ color: Colors.ink, fontSize: 17, fontWeight: "800" }}>
            {artist}
          </Text>
        ))}
      </GlassCard>

      <SectionHeader title="Regras" />
      <GlassCard style={{ gap: 10 }}>
        {event.rules.map((rule) => (
          <Text selectable key={rule} style={{ color: Colors.muted, lineHeight: 21 }}>
            • {rule}
          </Text>
        ))}
      </GlassCard>
    </ScrollView>
  );
}
