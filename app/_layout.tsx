import "@expo/metro-runtime";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { Platform } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerBlurEffect: "light",
            headerTransparent: Platform.OS === "ios" ? true : false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
      <PortalHost />
    </>
  );
}
