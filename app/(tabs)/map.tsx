import { ScrollView, Text, View } from "react-native";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { events } from "@/lib/mock-data";

export default function MapScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <SectionHeader eyebrow="Geolocalização" title="Mapa de festas" />

      <GlassCard style={{ minHeight: 280, gap: 16 }}>
        <View
          style={{
            flex: 1,
            borderRadius: 22,
            borderCurve: "continuous",
            backgroundColor: Colors.surfaceStrong,
            minHeight: 220,
            overflow: "hidden",
            padding: 18,
          }}
        >
          {events.map((event, index) => (
            <View
              key={event.id}
              style={{
                position: "absolute",
                left: `${18 + index * 24}%`,
                top: `${24 + index * 18}%`,
                borderRadius: 999,
                backgroundColor: Colors.primary,
                paddingHorizontal: 12,
                paddingVertical: 8,
              }}
            >
              <Text selectable style={{ color: Colors.ink, fontWeight: "900" }}>
                R$ {event.price}
              </Text>
            </View>
          ))}
        </View>
        <Text selectable style={{ color: Colors.muted, lineHeight: 20 }}>
          Nesta versão grátis de portfólio, o mapa usa pins simulados. A próxima etapa é ligar expo-location e react-native-maps.
        </Text>
      </GlassCard>

      {events.map((event) => (
        <GlassCard key={event.id} style={{ gap: 6 }}>
          <Text selectable style={{ color: Colors.ink, fontSize: 18, fontWeight: "900" }}>
            {event.title}
          </Text>
          <Text selectable style={{ color: Colors.muted }}>
            {event.venue} • {event.distanceKm.toFixed(1)} km • {event.genre}
          </Text>
        </GlassCard>
      ))}
    </ScrollView>
  );
}
