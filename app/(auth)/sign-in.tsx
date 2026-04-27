import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignInScreen() {
  return (
    <View style={stylesAuth.container}>
      <Text style={stylesAuth.title}>Welcome Back 👋</Text>
      <Text style={stylesAuth.subtitle}>Sign in to continue your journey</Text>

      <TextInput placeholder="Email" style={stylesAuth.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={stylesAuth.input}
      />

      <Button style={stylesAuth.button}>
        <Text style={stylesAuth.buttonText}>Sign In</Text>
      </Button>

      <Text style={stylesAuth.footer}>
        Don't have an account?{" "}
        <Link className="underline" href={"/(auth)/sign-up"}>
          Sign Up
        </Link>
      </Text>
    </View>
  );
}
const stylesAuth = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#F4B400",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    color: "#777",
  },
});
