import { BarChart } from "@/components/chart";
import ThemedView from "@/components/ThemedView";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/colors.enum";
import { cn } from "@/lib/utils";
import { Bell, BicepsFlexed, ClockFading, Flame } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { FlatList, Platform, View } from "react-native";
export default function HomeScreen() {
  const unit = "kg";
  const name = "Rasel";
  const fullName = "Rasel Ahmed ";
  const score = 35;
  const weight = 70.5;
  const goal = 5;
  const imageUrl = "https://github.com/mrzachnugent.png";
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(score), 500);
    return () => clearTimeout(timer);
  }, []);

  type CardInterface = {
    id: string;
    icon: React.JSX.Element;
    title: string;
    description: string;
    backgroundColor: Colors;
  };

  const cards: CardInterface[] = [
    {
      id: "1",
      icon: <Flame color={"black"} size={20} />,
      title: "628kcal",
      description: "Calories Burned",
      backgroundColor: Colors.primary3,
    },
    {
      id: "2",
      icon: <BicepsFlexed color={"black"} size={20} />,
      title: "Upper Body",
      description: "Workout done",
      backgroundColor: Colors.secondary1,
    },
    {
      id: "3",
      icon: <ClockFading color={"black"} size={20} />,
      title: "45 min",
      description: "Duration",
      backgroundColor: Colors.secondary2,
    },
  ];
  const chartContainer = useRef<React.JSX.Element>(null);
  return (
    <ThemedView>
      <View className=" p-4">
        <View className="justify-between items-center  flex-row pt-4">
          <View className="flex-row justify-center items-center gap-2">
            <Avatar className="size-10" alt="Avatar">
              <AvatarImage source={{ uri: imageUrl }} />
              <AvatarFallback>
                <Text>{name.charAt(0)}</Text>
              </AvatarFallback>
            </Avatar>
            <View>
              <Text className="font-medium leading-5">
                Hi {"\n"}
                {name}
              </Text>
            </View>
          </View>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full bg-white justify-center items-center"
          >
            <Bell color={"black"} size={20} />
          </Button>
        </View>

        <Text className="text-left py-4" variant={"h1"}>
          Your fitness {"\n"} journey starts here
        </Text>
        <Card className="bg-white p-4 rounded-3xl gap-4 mb-4">
          <View className="items-start justify-between p-0 flex-row">
            <View className="flex-row justify-center items-center gap-2">
              <Avatar className="size-10" alt="Avatar">
                <AvatarImage
                  source={{ uri: "https://github.com/mrzachnugent.png" }}
                />
                <AvatarFallback>
                  <Text>R</Text>
                </AvatarFallback>
              </Avatar>
              <View>
                <Text className="font-semibold">{fullName}</Text>
                <Text className="text-muted-foreground">
                  Goal.{goal}
                  {unit}
                </Text>
              </View>
            </View>
            <Badge variant={"custom"}>
              <Text>Goal</Text>
            </Badge>
          </View>
          <View>
            <View className="flex-row justify-between items-end py-1">
              <Text className="font-semibold" variant={"lead"}>
                {weight} <Text className="text-muted-foreground ">{unit}</Text>
              </Text>
              <Text variant={"muted"} className="text-muted-foreground">
                {score}% completed
              </Text>
            </View>
            <Progress
              className="bg-gray-100"
              indicatorClassName="bg-primary-2"
              value={progress}
            />
          </View>
        </Card>

        <FlatList
          data={cards}
          numColumns={cards.length}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{
            gap: 12,
          }}
          renderItem={({
            item: { icon, title, description, backgroundColor },
          }) => (
            <Card style={{ backgroundColor }} className="flex-1 px-2 min-h-10">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full bg-white justify-center items-center"
              >
                {icon}
              </Button>
              <View>
                <Text variant={"large"}>{title}</Text>
                <Text variant={"muted"}>{description}</Text>
              </View>
            </Card>
          )}
        />
        <Text className="text-xl font-bold pt-2">This Week's activity</Text>
      </View>
      <View className={cn("flex-1 px-4 ", Platform.select({ web: "mb-4" }))}>
        <Card className="bg-white p-4 rounded-3xl flex-1 ">
          <BarChart />
        </Card>
      </View>
    </ThemedView>
  );
}
