import type { PropsWithChildren } from "react";
import { View, type ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

type GlassCardProps = PropsWithChildren<{
  style?: ViewStyle;
}>;

export function GlassCard({ children, style }: GlassCardProps) {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.surface,
          borderColor: Colors.border,
          borderCurve: "continuous",
          borderRadius: 24,
          borderWidth: 1,
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.28)",
          padding: 18,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
