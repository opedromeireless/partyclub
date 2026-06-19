import { Link } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, TextInput, View } from "react-native";
import { ActionButton } from "@/components/ui/action-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Colors } from "@/constants/Colors";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!isSupabaseConfigured) {
      Alert.alert("Modo demo ativo", "Configure o Supabase no .env para ativar login real.");
      return;
    }

    if (!email) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: "partyclub://",
      },
    });

    if (error) {
      Alert.alert("Erro na autenticação", error.message);
    } else {
      Alert.alert("Sucesso!", "Verifique sua caixa de entrada para acessar o app.");
    }

    setLoading(false);
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", gap: 28, padding: 24 }}
    >
      <View style={{ gap: 8 }}>
        <Text selectable style={{ color: Colors.ink, fontSize: 48, fontWeight: "900" }}>
          PartyClub
        </Text>
        <Text selectable style={{ color: Colors.primarySoft, fontSize: 13, fontWeight: "900", letterSpacing: 2 }}>
          AQUI A EXPERIÊNCIA É DIGITAL
        </Text>
      </View>

      <GlassCard style={{ gap: 18 }}>
        <View style={{ gap: 6 }}>
          <Text selectable style={{ color: Colors.ink, fontSize: 24, fontWeight: "900" }}>
            Crie sua conta
          </Text>
          <Text selectable style={{ color: Colors.muted, lineHeight: 20 }}>
            Entre por magic link ou explore o modo demo para ver o portfólio completo.
          </Text>
        </View>

        <TextInput
          style={{
            backgroundColor: Colors.surfaceStrong,
            borderColor: Colors.border,
            borderRadius: 16,
            borderWidth: 1,
            color: Colors.ink,
            fontSize: 16,
            padding: 16,
          }}
          placeholder="partyclub@gmail.com"
          placeholderTextColor={Colors.muted}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {loading ? <ActivityIndicator color={Colors.primarySoft} /> : <ActionButton label="Enviar magic link" onPress={handleLogin} />}

        <Link href="/(tabs)" asChild>
          <ActionButton label="Entrar no modo demo" tone="ghost" />
        </Link>

        <Text selectable style={{ color: Colors.muted, fontSize: 12, lineHeight: 18, textAlign: "center" }}>
          Ao criar conta, você aceita os Termos de Serviço e a Política de Privacidade do PartyClub.
        </Text>
      </GlassCard>
    </ScrollView>
  );
}
