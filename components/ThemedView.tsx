import { Colors } from "@/constants/colors.enum";
import { cn } from "@/lib/utils";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ThemedView({ children, style, className }: ViewProps) {
  return (
    <>
      <LinearGradient
        colors={[Colors.secondary2, Colors.white, Colors.secondary2]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView
          style={Platform.OS === "web" && { padding: 16, paddingTop: 32 }}
          className={cn("flex-1 px-4 pt-8")}
        >
          {children}
        </SafeAreaView>
        <StatusBar style="dark" />
      </LinearGradient>
    </>
  );
}
