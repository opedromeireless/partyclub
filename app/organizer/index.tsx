import { ScrollView, Text, View } from "react-native";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { events } from "@/lib/mock-data";

export default function OrganizerScreen() {
  const revenue = events.reduce((total, event) => total + event.confirmed * event.price, 0);
  const confirmed = events.reduce((total, event) => total + event.confirmed, 0);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <SectionHeader eyebrow="Backoffice" title="Dashboard do organizador" />

      <View style={{ flexDirection: "row", gap: 12 }}>
        <GlassCard style={{ flex: 1, gap: 8 }}>
          <Text selectable style={{ color: Colors.muted, fontWeight: "800" }}>
            Receita mockada
          </Text>
          <Text selectable style={{ color: Colors.success, fontSize: 26, fontWeight: "900" }}>
            R$ {revenue.toLocaleString("pt-BR")}
          </Text>
        </GlassCard>
        <GlassCard style={{ flex: 1, gap: 8 }}>
          <Text selectable style={{ color: Colors.muted, fontWeight: "800" }}>
            Confirmados
          </Text>
          <Text selectable style={{ color: Colors.ink, fontSize: 26, fontWeight: "900" }}>
            {confirmed}
          </Text>
        </GlassCard>
      </View>

      {events.map((event) => (
        <GlassCard key={event.id} style={{ gap: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
            <View style={{ flex: 1, gap: 4 }}>
              <Text selectable style={{ color: Colors.ink, fontSize: 19, fontWeight: "900" }}>
                {event.title}
              </Text>
              <Text selectable style={{ color: Colors.muted }}>
                {event.confirmed}/{event.capacity} confirmados
              </Text>
            </View>
            <Text selectable style={{ color: event.boosted ? Colors.warning : Colors.muted, fontWeight: "900" }}>
              {event.boosted ? "Impulsionado" : "Orgânico"}
            </Text>
          </View>
          <View style={{ height: 10, borderRadius: 999, backgroundColor: Colors.surfaceStrong, overflow: "hidden" }}>
            <View
              style={{
                width: `${Math.round((event.confirmed / event.capacity) * 100)}%`,
                height: "100%",
                backgroundColor: Colors.primarySoft,
              }}
            />
          </View>
        </GlassCard>
      ))}
    </ScrollView>
  );
}
