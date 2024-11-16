import { router } from "expo-router";
import React from "react";

import { SafeAreaView, Text } from "react-native";

export default function ThirdScreen() {
  const finishOnboarding = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView>
      <Text>Yoo3</Text>
    </SafeAreaView>
  );
}
