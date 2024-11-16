import React from "react";

import { SafeAreaView, Text, View } from "react-native";
import Hand from "@/assets/images/hand.svg";
import Logo from "@/assets/images/icon.svg";

export default function FirstScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="ml-20 mt-10">
        <Logo width={44} height={44} />
      </View>
      <View className="flex-0.7 items-center justify-center">
        <Hand className="w-64 h-64" />
      </View>
      <View className="mt-auto mb-20">
        <Text className="text-2xl font-['Neue'] ml-20">
          <Text className="font-bold">palma.pay</Text>puts{"\n"}the power in
          your palm!
        </Text>
      </View>
    </SafeAreaView>
  );
}
