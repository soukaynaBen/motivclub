import { Colors } from "@/constants/colors.enum";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Platform, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Animated, { FadeIn } from "react-native-reanimated";

type BarData = {
  frontColor: Colors | null;
  gradientColor: Colors | null;
  topLabelComponent: () => React.JSX.Element | null;
  value: number;
  label: string;
}[];

export default function BarChartComponent() {
  const [containerSeize, setContainerSize] = useState({ width: 0, height: 0 });
  const [selectedBarIndex, setSelectedBarIndex] = useState<number | null>(0);

  const barData = [
    { value: 250, label: "Mon" },
    { value: 500, label: "Tue" },
    { value: 745, label: "Wed" },
    {
      value: 320,
      label: "Thu",
      gradientColor: Colors.primary1,
      frontColor: Colors.lightGray,
    },
    { value: 600, label: "Fri" },
    { value: 256, label: "Sat" },
    { value: 300, label: "Sun" },
  ];

  const getChartData = useCallback(() => {
    return barData.map((item, index) => ({
      ...item,
      gradientColor: selectedBarIndex === index ? Colors.primary1 : undefined,
      topLabelComponent: () =>
        selectedBarIndex === index ? (
          <Animated.Text
            entering={FadeIn}
            style={{
              color: Colors.primary1,
              fontSize: 10,
              fontWeight: "600",
              marginBottom: 4,
            }}
          >
            {item.value}
          </Animated.Text>
        ) : null,
    }));
  }, [selectedBarIndex]);
  const barWidth = Platform.OS === "web" ? 30 : 24;
  const axisWidth = 40;
  const maxValue = Math.max(...barData.map(({ value }) => value));
  const spacing = useMemo(() => {
    return (
      (containerSeize.width - barData.length * barWidth - axisWidth) /
      (barData.length - 1)
    );
  }, [containerSeize.width]);
  useEffect(() => {
    console.log({ containerSeize, spacing });
  }, [containerSeize.width]);
  return (
    <View
      className=" flex-1 justify-center items-center"
      onLayout={(e) =>
        setContainerSize({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        })
      }
    >
      <BarChart
        initialSpacing={2}
        showGradient
        maxValue={
          Math.ceil(maxValue / Math.pow(10, maxValue.toString().length - 1)) *
          Math.pow(10, maxValue.toString().length - 1)
        }
        stepValue={200}
        spacing={spacing}
        barWidth={barWidth}
        noOfSections={3}
        barBorderRadius={20}
        data={getChartData()}
        yAxisTextStyle={{
          color: Colors.darkGray,
        }}
        xAxisLabelTextStyle={{
          color: Colors.darkGray,
        }}
        frontColor={Colors.white}
        gradientColor={Colors.secondary2}
        yAxisThickness={0}
        xAxisThickness={0}
        endSpacing={0}
        isAnimated
        animationDuration={300}
        onPress={(_item: BarData, index: number) => {
          setSelectedBarIndex(selectedBarIndex === index ? null : index);
        }}
      />
    </View>
  );
}

export { BarChartComponent as BarChart };
