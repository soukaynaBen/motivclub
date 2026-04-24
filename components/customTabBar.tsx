import { Colors } from "@/constants/colors.enum";
import { useEffect } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  const { width } = useWindowDimensions();
  const pillSize = 45;
  const marginBottom = 20;
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
        style={{
          flexDirection: "row",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.white,
          borderColor: Colors.white,
          borderRadius: rounded,
          borderWidth: 2,
          elevation: 0,
          bottom: marginBottom,
          left: (width * 5) / 10,
          transform: [{ translateX: (-15 * pillSize) / 10 }],
        }}
      >
        {/* 🔵 Sliding pill */}
        <Animated.View
          style={[
            {
              position: "absolute",
              width: pillSize,
              height: pillSize,
              borderRadius: rounded,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary1,
              bottom: 0,
              left: 0,
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
                color: isFocused ? Colors.white : Colors.black,
                size: pillSize,
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
}
