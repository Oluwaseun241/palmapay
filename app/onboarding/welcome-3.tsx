import { router } from "expo-router";
import React from "react";

import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Tap from "@/assets/images/hand3.svg";
import Logo from "@/assets/images/icon.svg";
import { FontAwesome6 } from "@expo/vector-icons";

export default function ThirdScreen() {
  const finishOnboarding = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="ml-12 mt-10">
        <Logo width={44} height={44} />
      </View>
      <View className="mt-14 mb-20 items-center justify-center">
        <Tap />
      </View>
      <View className="mt-4 mb-2">
        <Text className="font-['Neue'] font-normal text-4xl ml-12">
          <View className="bg-[#FC6710] w-44 h-12 p-1 rounded-md border-b-2 border-r-2 shadow">
            <Text className="font-['Neue'] font-normal text-4xl text-center">
              palma.pay
            </Text>
          </View>
          powers{"\n"}payments in few{"\n"}clicks!
        </Text>
      </View>
      <View className="flex-row justify-around">
        <View />
        <View />
        <TouchableOpacity
          onPress={() => router.push("/onboarding/welcome-2")}
          className="p-2 bg-[#FFFFFF54] w-20 h-12 items-center rounded-full"
        >
          <FontAwesome6 name="arrow-right-long" size={24} color="#C59A00" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
