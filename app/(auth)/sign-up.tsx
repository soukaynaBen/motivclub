import { Link } from "expo-router";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SignUpScreen() {
  return (
    <View className="flex-1" style={stylesAuth.container}>
      <Text className="" style={stylesAuth.title}>
        Create Account 🚀
      </Text>
      <Text className="" style={stylesAuth.subtitle}>
        Start your fitness journey today
      </Text>

      <TextInput
        placeholder="Full Name"
        className=""
        style={stylesAuth.input}
      />
      <TextInput placeholder="Email" className="" style={stylesAuth.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className=""
        style={stylesAuth.input}
      />

      <TouchableOpacity className="" style={stylesAuth.button}>
        <Text className="" style={stylesAuth.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text className="" style={stylesAuth.footer}>
        Already have an account?{" "}
        <Link className="underline" href={"/(auth)/sign-in"}>
          Sign In
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
