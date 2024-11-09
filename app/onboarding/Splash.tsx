import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

export default function CustomSplashScreen() {
  return (
    <SafeAreaView className="flex-1 flex-row gap-0.5 bg-[#FFC801] items-center justify-center">
      <Image source={require("@/assets/images/icon.png")} resizeMode="center" />
      <Text className="font-[Neue] font-normal text-6xl">palma.pay</Text>
    </SafeAreaView>
  );
}
