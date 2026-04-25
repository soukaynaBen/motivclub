import { Colors } from "@/constants/colors.enum";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, ScrollView, ViewProps } from "react-native";
export default function ThemedScrollView({
  children,
  style,
  className,
}: ViewProps) {
  return (
    <>
      <LinearGradient
        colors={[Colors.secondary2, Colors.white, Colors.secondary2]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          className="flex-1 px-4 py-8"
          style={Platform.OS === "web" && { padding: 16, paddingTop: 32 }}
        >
          {children}
        </ScrollView>
        <StatusBar style="dark" />
      </LinearGradient>
    </>
  );
}
