import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { supabase } from "../../lib/supabase";
import { Colors } from "../../constants/Colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
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
      Alert.alert("Erro na Autenticação", error.message);
    } else {
      Alert.alert(
        "Sucesso! 🚀",
        "Verifique sua caixa de entrada para acessar o app!",
      );
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>PartyClub</Text>
        <Text style={styles.logoSubtitle}>AQUI A FESTA NUNCA TERMINA</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>
          Entre com o seu email para se registrar no app
        </Text>

        <TextInput
          style={styles.input}
          placeholder="partyclub@gmail.com"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Continue</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.dividerText}>ou</Text>

        <TouchableOpacity
          style={styles.buttonSocial}
          onPress={() =>
            Alert.alert("Mock", "Login com Google integrado em breve")
          }
        >
          <Text style={styles.buttonSocialText}>Continue com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSocial}
          onPress={() =>
            Alert.alert("Mock", "Login com Apple integrado em breve")
          }
        >
          <Text style={styles.buttonSocialText}>Continue com a Apple</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Ao clicar em criar conta, você aceita os nossos Termos de Serviço e
          Política de Privacidade
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D13",
    padding: 24,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFF",
  },
  logoSubtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7B2CBF",
    letterSpacing: 2,
    marginTop: 5,
  },
  formContainer: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#AAA",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#1A1A24",
    color: "#FFF",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonPrimary: {
    backgroundColor: "#7B2CBF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerText: {
    color: "#666",
    textAlign: "center",
    marginVertical: 12,
    fontSize: 14,
  },
  buttonSocial: {
    backgroundColor: "#1A1A24",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonSocialText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    color: "#555",
    fontSize: 11,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 16,
  },
});
