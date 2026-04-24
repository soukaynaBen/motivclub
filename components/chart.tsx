import { Colors } from "@/constants/colors.enum";
import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function BarChartComponent() {
  const [containerSeize, setContainerSize] = useState({ width: 0, height: 0 });
  const barData = [
    { value: 250, label: "Mon" },
    { value: 500, label: "Tue" },
    { value: 745, label: "Wed" },
    { value: 320, label: "Thu", frontColor: Colors.primary1 },
    { value: 600, label: "Fri" },
    { value: 256, label: "Sat" },
    { value: 300, label: "Sun" },
  ];
  const barWidth = 30;
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
      className=" flex-1 justify-center items-center "
      onLayout={(e) =>
        setContainerSize({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        })
      }
    >
      <BarChart
        initialSpacing={0}
        maxValue={
          Math.ceil(maxValue / Math.pow(10, maxValue.toString().length - 1)) *
          Math.pow(10, maxValue.toString().length - 1)
        }
        stepValue={200}
        spacing={spacing}
        barWidth={barWidth}
        noOfSections={3}
        barBorderRadius={20}
        frontColor={Colors.secondary3}
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        endSpacing={0}
        height={containerSeize.height - axisWidth}
      />
    </View>
  );
}

export { BarChartComponent as BarChart };
