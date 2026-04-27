import CustomTabBar from "@/components/customTabBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
              <FontAwesome name={"home"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="workouts"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="dumbbell" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="galery"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name={"bolt"} size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
