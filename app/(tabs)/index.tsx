import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { EventCard } from "@/components/event-card";
import { ActionButton } from "@/components/ui/action-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { useEvents } from "@/hooks/use-events";
import { usePartyStore } from "@/stores/use-party-store";

export default function HomeScreen() {
  const { data: eventList = [] } = useEvents();
  const favoriteEventIds = usePartyStore((state) => state.favoriteEventIds);
  const toggleFavorite = usePartyStore((state) => state.toggleFavorite);
  const hypes = usePartyStore((state) => state.hypes);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 22, padding: 20, paddingBottom: 36 }}
    >
      <GlassCard style={{ backgroundColor: Colors.surfaceStrong, gap: 16 }}>
        <Text selectable style={{ color: Colors.primarySoft, fontWeight: "900", letterSpacing: 1 }}>
          PARTYCLUB PORTFÓLIO
        </Text>
        <Text selectable style={{ color: Colors.ink, fontSize: 34, fontWeight: "900", lineHeight: 38 }}>
          Descubra festas, compre ingressos e ganhe HYPES.
        </Text>
        <Text selectable style={{ color: Colors.muted, lineHeight: 21 }}>
          MVP funcional com navegação, dados mockados, carteira, área do organizador e Supabase pronto para produção.
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Link href="/organizer" asChild>
              <ActionButton label="Organizador" tone="ghost" />
            </Link>
          </View>
          <View style={{ flex: 1 }}>
            <ActionButton label={`${hypes} HYPES`} tone="secondary" />
          </View>
        </View>
      </GlassCard>

      <SectionHeader eyebrow="Próximas festas" title="Eventos em destaque" />

      {eventList.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          favorite={favoriteEventIds.includes(event.id)}
          onToggleFavorite={() => toggleFavorite(event.id)}
        />
      ))}
    </ScrollView>
  );
}
