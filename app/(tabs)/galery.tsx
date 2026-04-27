import { blurhash } from "@/constants/blurhash";
import { Colors } from "@/constants/colors.enum";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";

import {
  ImageSourcePropType,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

export default function CarouselScreen() {
  const { width, height } = useWindowDimensions();
  const ref = useRef<ICarouselInstance>(null);

  const [assets, error] = useAssets([
    require("@/assets/images/motivclub-image-1.png"),
    require("@/assets/images/motivclub-image-2.png"),
    require("@/assets/images/motivclub-image-3.png"),
  ]);
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
  } as const;

  const data = [
    {
      id: "1",
      title: "Track Your Progress",
      subtitle: "Monitor calories, workouts, and goals",
      image: assets?.[0] as ImageSourcePropType,
    },
    {
      id: "2",
      title: "Stay Motivated",
      subtitle: "Daily reminders and insights",
      image: assets?.[1] as ImageSourcePropType,
    },
    {
      id: "3",
      title: "Achieve Your Goals",
      subtitle: "Personalized workout plans",
      image: assets?.[2] as ImageSourcePropType,
    },
  ];

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="flex-1">
      <Carousel
        ref={ref}
        {...baseOptions}
        loop
        width={width}
        height={height}
        data={data}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        scrollAnimationDuration={500}
        renderItem={({ item }) => (
          <View className="flex-1">
            <Image
              source={item.image}
              style={{ width, height }}
              className="absolute inset-0"
              placeholder={{ blurhash }}
              transition={500}
            />

            <View className="bg-black/40 absolute inset-0" />

            <View className="absolute bottom-52 left-5 right-5">
              <Text className="text-3xl font-bold text-white mb-2">
                {item.title}
              </Text>
              <Text className="text-lg text-[#ddd]">{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
      <View className="absolute left-0 bottom-0 right-0 h-32">
        <Pagination.Basic<{ color: string }>
          progress={progress}
          data={[Colors.secondary1, Colors.secondary2, Colors.secondary3].map(
            (color) => ({ color }),
          )}
          dotStyle={{
            width: 25,
            height: 4,
            backgroundColor: "#262626",
          }}
          activeDotStyle={{
            overflow: "hidden",
            backgroundColor: "#f1f1f1",
          }}
          containerStyle={{
            gap: 10,
            marginBottom: 10,
          }}
          horizontal
          onPress={onPressPagination}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
