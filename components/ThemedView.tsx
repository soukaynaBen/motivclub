import { StatusBar } from "expo-status-bar";
import React from "react";
import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemedView({ children }: ViewProps) {
  return (
    <SafeAreaView className="flex-1 bg-[#ddd9d3] ">
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
