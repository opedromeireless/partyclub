import { ScrollView, Text, View } from "react-native";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Colors } from "@/constants/Colors";
import { events, posts } from "@/lib/mock-data";

export default function FeedScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 36 }}
    >
      <SectionHeader eyebrow="Social" title="Para você" />

      {posts.map((post) => {
        const event = events.find((item) => item.id === post.eventId);

        return (
          <GlassCard key={post.id} style={{ gap: 14 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  borderRadius: 999,
                  height: 46,
                  justifyContent: "center",
                  width: 46,
                }}
              >
                <Text selectable style={{ color: Colors.ink, fontWeight: "900" }}>
                  {post.avatar}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text selectable style={{ color: Colors.ink, fontWeight: "900" }}>
                  {post.author}
                </Text>
                <Text selectable style={{ color: Colors.muted }}>
                  {event?.title} • {post.createdAt}
                </Text>
              </View>
            </View>

            <Text selectable style={{ color: Colors.ink, fontSize: 17, lineHeight: 24 }}>
              {post.text}
            </Text>

            <Text selectable style={{ color: Colors.primarySoft, fontWeight: "900" }}>
              {post.likes} curtidas
            </Text>
          </GlassCard>
        );
      })}
    </ScrollView>
  );
}
