import { cn } from "@/lib/utils";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemedView({ children, style, className }: ViewProps) {
  return (
    <SafeAreaView
      style={[style]}
      className={cn("flex-1 bg-secondary-3", className)}
    >
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
