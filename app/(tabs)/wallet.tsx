import { ScrollView, Text, View } from "react-native";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { events } from "@/lib/mock-data";
import { usePartyStore } from "@/stores/use-party-store";

export default function WalletScreen() {
  const hypes = usePartyStore((state) => state.hypes);
  const tickets = usePartyStore((state) => state.tickets);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <SectionHeader eyebrow="Carteira" title="Tickets e recompensas" />

      <GlassCard style={{ gap: 8, backgroundColor: Colors.surfaceStrong }}>
        <Text selectable style={{ color: Colors.muted, fontWeight: "800" }}>
          Saldo HYPES
        </Text>
        <Text selectable style={{ color: Colors.ink, fontSize: 42, fontWeight: "900", fontVariant: ["tabular-nums"] }}>
          {hypes}
        </Text>
        <Text selectable style={{ color: Colors.success }}>
          +80 HYPES a cada compra simulada de ingresso.
        </Text>
      </GlassCard>

      {tickets.map((ticket) => {
        const event = events.find((item) => item.id === ticket.eventId);

        return (
          <GlassCard key={ticket.id} style={{ gap: 12 }}>
            <Text selectable style={{ color: Colors.ink, fontSize: 20, fontWeight: "900" }}>
              {event?.title ?? "Evento"}
            </Text>
            <View
              style={{
                alignItems: "center",
                backgroundColor: Colors.ink,
                borderRadius: 18,
                borderCurve: "continuous",
                padding: 20,
              }}
            >
              <Text selectable style={{ color: Colors.background, fontSize: 18, fontWeight: "900", letterSpacing: 2 }}>
                {ticket.qrCode}
              </Text>
            </View>
            <Text selectable style={{ color: Colors.muted }}>
              Status: {ticket.status === "active" ? "ativo" : ticket.status}
            </Text>
          </GlassCard>
        );
      })}
    </ScrollView>
  );
}
