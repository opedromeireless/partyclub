import { Pressable, Text } from "react-native";
import { Colors } from "@/constants/Colors";

type ActionButtonProps = {
  label: string;
  onPress?: () => void;
  tone?: "primary" | "secondary" | "ghost";
};

export function ActionButton({ label, onPress, tone = "primary" }: ActionButtonProps) {
  const backgroundColor =
    tone === "primary" ? Colors.primary : tone === "secondary" ? Colors.secondary : "transparent";
  const color = tone === "secondary" ? Colors.background : Colors.ink;

  return (
    <Pressable
      onPress={onPress}
      style={{
        minHeight: 52,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        borderCurve: "continuous",
        borderWidth: tone === "ghost" ? 1 : 0,
        borderColor: Colors.border,
        backgroundColor,
        paddingHorizontal: 18,
      }}
    >
      <Text selectable style={{ color, fontSize: 16, fontWeight: "800" }}>
        {label}
      </Text>
    </Pressable>
  );
}
