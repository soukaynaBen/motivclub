import Spinner from "@/assets/images/loading.svg";
import { Colors } from "@/constants/colors.enum";
import { useEffect } from "react";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

const AnimatedSpinner = Animated.createAnimatedComponent(Spinner);

export default function Loader(props: SvgProps) {
  const rotation = useSharedValue(0);
  const size = 120;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1500, easing: Easing.linear }),
      -1,
    );
  }, []);

  return (
    <AnimatedSpinner
      width={props.width ?? size}
      height={props.height ?? size}
      style={animatedStyle}
      color={Colors.primary1}
    />
  );
}
