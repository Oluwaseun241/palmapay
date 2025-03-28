import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, StatusBar } from "react-native";
import Icon from "@/assets/images/icon.svg";

export default function CustomSplashScreen() {
  const imageFadeAnim = useRef(new Animated.Value(0)).current;
  const imageSlideAnim = useRef(new Animated.Value(100)).current;
  const textSlideAnim = useRef(new Animated.Value(300)).current;
  const combinedSlideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(imageFadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(imageSlideAnim, {
        toValue: 0,
        duration: 1600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.timing(textSlideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(combinedSlideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 flex-row gap-3 bg-primary items-center justify-center">
      <StatusBar backgroundColor="#00000" />
      <Animated.View
        style={{
          opacity: imageFadeAnim,
          transform: [
            { translateX: imageSlideAnim },
            { translateX: combinedSlideAnim },
          ],
        }}
      >
        <Icon width={52} height={52} />
      </Animated.View>
      <Animated.Text
        style={{
          transform: [
            { translateX: textSlideAnim },
            { translateX: combinedSlideAnim },
          ],
        }}
        className="font-['Neue'] text-6xl"
      >
        palma.pay
      </Animated.Text>
    </SafeAreaView>
  );
}
