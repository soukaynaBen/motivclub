import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { blurhash } from "@/constants/blurhash";
import { Colors } from "@/constants/colors.enum";
import Entypo from "@expo/vector-icons/Entypo";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronLeft, FlameIcon } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const router = useRouter();
  const [assets, error] = useAssets([
    require("@/assets/images/motivclub-image-4.png"),
  ]);

  return (
    <LinearGradient
      colors={[Colors.secondary2, Colors.white, Colors.secondary2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {assets && (
        <Image
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "90%",
            objectFit: "fill",
          }}
          source={assets[0]}
          placeholder={{ blurhash }}
          transition={1000}
        />
      )}
      <SafeAreaView className="flex-1 px-4 pt-8">
        <View className="pt-8">
          <Button
            onPress={() => router.back()}
            size={"icon"}
            variant={"ghost"}
            className="rounded-full bg-white justify-center items-center"
          >
            <ChevronLeft color={"black"} size={24} />
          </Button>
        </View>
        <View className="left-0 rounded-t-3xl min-h-[40%] right-0 bottom-0 bg-white absolute pt-8 p-8">
          <Text className="text-muted-foreground">Exercise</Text>
          <Text className="font-bold text-3xl py-3">High knee raise</Text>
          <Text className="text-muted-foreground text-md">
            List your knees up toward you chest one at a time while keeping your
            core tight and engaged. Maintain and upright posture keep your back
            straight and move at a steady pace with controlled rhythmic motion.
          </Text>
          <View className="flex-row  gap-4 py-4 ">
            <Card className="flex-row bg-secondary-3 px-2 py-2 gap-3 !border-transparent justify-start items-center rounded-2xl flex-1">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full bg-white justify-center items-center"
              >
                <Entypo name="pie-chart" size={24} color="black" />
              </Button>
              <View>
                <Text className="font-semibold">Rep 1 of 4</Text>
                <Text className="text-muted-foreground">process</Text>
              </View>
            </Card>
            <Card className="flex-row bg-secondary-3 gap-3 !border-transparent px-2 py-2 justify-start items-center rounded-2xl flex-1">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full bg-white justify-center items-center"
              >
                <FlameIcon size={24} color="black" />
              </Button>
              <View>
                <Text className="font-semibold">48 kcal</Text>
                <Text className="text-muted-foreground">calories</Text>
              </View>
            </Card>
          </View>

          <Button
            style={{ backgroundColor: Colors.primary1 }}
            className="rounded-full h-12 "
          >
            <Text className="text-black">Next exercise</Text>
          </Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
