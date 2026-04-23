import { DeviseWidth } from "@/hooks/get-dimensions";
import { useEffect } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  const pillSize = 45;
  const marginBottom = 50;
  const rounded = 999;
  const translateX = useSharedValue(state.index * pillSize);

  useEffect(() => {
    // update animation when tab changes
    translateX.value = withTiming(state.index * pillSize, {
      duration: 250,
    });
  }, [state.index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <TouchableWithoutFeedback>
      <View
        className="flex-row items-center absolute justify-center bg-white border-white elevation-none"
        style={{
          borderRadius: rounded,
          borderWidth: 2,
          elevation: 0,
          bottom: marginBottom,

          left: (DeviseWidth * 5) / 10,
          transform: [{ translateX: (-15 * pillSize) / 10 }],
        }}
      >
        {/* 🔵 Sliding pill */}
        <Animated.View
          className="items-center absolute justify-center bg-primary-1 bottom-0 left-0"
          style={[
            {
              width: pillSize,
              height: pillSize,
              borderRadius: rounded,
            },
            animatedStyle,
          ]}
        />

        {state.routes.map((route: any, index: any) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: pillSize,
                height: pillSize,
              }}
            >
              {descriptors[route.key].options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? "white" : "black",
                size: pillSize,
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
}
