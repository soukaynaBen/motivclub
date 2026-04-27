import ThemedView from "@/components/ThemedView";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import WorkoutCard from "@/components/WorkoutCard";
import { blurhash } from "@/constants/blurhash";
import { Colors } from "@/constants/colors.enum";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronsRightIcon, ClockFading, Star } from "lucide-react-native";
import { useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
export default function TabTwoScreen() {
  const router = useRouter();

  const [assets, error] = useAssets([
    require("@/assets/images/motivclub-image-2.png"),
  ]);

  useLayoutEffect(() => {
    // query image from backend
  }, []);

  return (
    <ThemedView>
      <View className="">
        <Text className="text-black font-semibold text-xl">Biginner Plan</Text>
        <Text className="text-muted-foreground text-md">
          Simple workouts to get you started
        </Text>
        <Card className="rounded-3xl mt-4 min-h-72 p-0 overflow-hidden mb-6  border-black/5">
          {assets && (
            <Image
              style={{
                position: "absolute",
                inset: 0,
                flex: 1,
                zIndex: -1,
              }}
              source={assets[0]}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          )}
          <LinearGradient
            colors={[
              "rgba(255,255,255,0)",
              "rgba(255,255,255,0)",
              "rgba(255,255,255,.1)",
              "rgba(255,255,255,1)",
              "rgba(255,255,255,1)",
            ]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              flex: 1,
            }}
          >
            <View className="h-20 absolute bottom-0 z-10 left-0 w-full flex  justify-center items-center pb-2 gap-4 flex-row px-4">
              <View className="">
                <Avatar className="size-14 rounded-md" alt="coach name">
                  <AvatarImage source={{ uri: assets?.[0]?.uri }} />
                  <AvatarFallback>
                    <Text>S</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
              <View className="flex-1 flex justify-center gap-1 items-start">
                <Text className="font-bold">Samuel Irpon</Text>
                <View className="flex flex-row gap-2 justify-center">
                  <View className="flex flex-row gap-2 justify-center items-center">
                    <Star
                      fill={Colors.primary1}
                      size={14}
                      color={Colors.primary1}
                    />
                    <Text className="font-semibold ">4.8</Text>
                  </View>
                  <View className="flex flex-row gap-2 justify-center items-center">
                    <ClockFading color={Colors.darkGray} size={14} />
                    <Text className="text-muted-foreground">20-30min</Text>
                  </View>
                </View>
              </View>
              <View className="flex justify-center items-center">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-full bg-white justify-center items-center"
                >
                  <ChevronsRightIcon
                    onPress={() => router.navigate("/modal")}
                    color={"black"}
                    size={24}
                  />
                </Button>
              </View>
            </View>
          </LinearGradient>
        </Card>
        <Text className="font-bold text-base pb-3">Choose a workout</Text>
      </View>

      <FlatList
        contentContainerStyle={{ gap: 8 }}
        data={[{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]}
        keyExtractor={({ id }) => id}
        renderItem={(item) => <WorkoutCard />}
      />
    </ThemedView>
  );
}
