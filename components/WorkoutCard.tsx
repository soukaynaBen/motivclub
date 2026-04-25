import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/colors.enum";
import { useAssets } from "expo-asset";
import {
  ClockFading,
  Flame
} from "lucide-react-native";
import { View } from "react-native";
export default function WorkoutCard() {
  const [assets, error] = useAssets([
    require("@/assets/images/motivclub-image-2.png"),
  ]);

  return (
    <Card className="py-4 rounded-3xl border-black/5">
      <View className="flex  justify-center items-center  gap-4 flex-row px-4">
        <View className=" ">
          <Avatar className="size-14 rounded-md" alt="coach name">
            <AvatarImage source={{ uri: assets?.[0]?.uri }} />
            <AvatarFallback>
              <Text>S</Text>
            </AvatarFallback>
          </Avatar>
        </View>
        <View className="flex-1 flex justify-center gap-1 items-start ">
          <Text className="font-bold">Samuel Irpon</Text>
          <View className="flex flex-row gap-2 justify-center">
            <View className="flex flex-row gap-2 justify-center items-center">
              <ClockFading color={Colors.darkGray} size={14} />
              <Text className="text-muted-foreground">20-30min</Text>
            </View>
            <View className="flex flex-row gap-2 justify-center items-center">
              <Flame color={Colors.darkGray} size={14} />
              <Text className="text-muted-foreground">286kcal</Text>
            </View>
          </View>
        </View>
        <View className="flex self-start justify-center items-start ">
          <Badge variant={"custom"}>
            <Text>Biginner</Text>
          </Badge>
        </View>
      </View>
    </Card>
  );
}
