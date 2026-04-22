import CustomTabBar from "@/components/customTabBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarShowLabel: false,

            tabBarIcon: ({ color }) => (
              <FontAwesome name={"home"} size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="session"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name={"apple"} size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="workout"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name={"bolt"} size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
