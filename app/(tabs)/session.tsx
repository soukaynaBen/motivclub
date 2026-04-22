import ThemedView from "@/components/ThemedView";
import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ThemedView>
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-xl">Tab 2</Text>
      </View>
    </ThemedView>
  );
}
