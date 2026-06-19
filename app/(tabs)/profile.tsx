import { ScrollView, Text, View } from "react-native";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { achievements } from "@/lib/mock-data";
import { usePartyStore } from "@/stores/use-party-store";

export default function ProfileScreen() {
  const hypes = usePartyStore((state) => state.hypes);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <GlassCard style={{ alignItems: "center", gap: 12 }}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: Colors.primary,
            borderRadius: 999,
            height: 92,
            justifyContent: "center",
            width: 92,
          }}
        >
          <Text selectable style={{ color: Colors.ink, fontSize: 28, fontWeight: "900" }}>
            PC
          </Text>
        </View>
        <Text selectable style={{ color: Colors.ink, fontSize: 26, fontWeight: "900" }}>
          Pedro Creator
        </Text>
        <Text selectable style={{ color: Colors.muted }}>
          {hypes} HYPES • 12 festas • 8 amigos convidados
        </Text>
      </GlassCard>

      <SectionHeader eyebrow="Gamificação" title="Conquistas" />

      {achievements.map((achievement) => (
        <GlassCard key={achievement.id} style={{ opacity: achievement.unlocked ? 1 : 0.55, gap: 6 }}>
          <Text selectable style={{ color: Colors.ink, fontSize: 18, fontWeight: "900" }}>
            {achievement.unlocked ? "✓ " : "○ "}
            {achievement.title}
          </Text>
          <Text selectable style={{ color: Colors.muted }}>
            {achievement.description}
          </Text>
        </GlassCard>
      ))}
    </ScrollView>
  );
}
