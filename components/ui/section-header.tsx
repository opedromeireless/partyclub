import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
};

export function SectionHeader({ title, eyebrow }: SectionHeaderProps) {
  return (
    <View style={{ gap: 4 }}>
      {eyebrow ? (
        <Text selectable style={{ color: Colors.primarySoft, fontSize: 12, fontWeight: "800" }}>
          {eyebrow.toUpperCase()}
        </Text>
      ) : null}
      <Text selectable style={{ color: Colors.ink, fontSize: 24, fontWeight: "900" }}>
        {title}
      </Text>
    </View>
  );
}
