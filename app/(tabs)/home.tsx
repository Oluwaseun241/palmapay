import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Logo from "@/assets/images/login.svg";
import Trend from "@/assets/icons/trend.svg";
import Heart from "@/assets/icons/heart.svg";
import Notification from "@/assets/icons/notification.svg";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <Logo width={40} />
          <Text className="font-Neue text-sm">Samuel Adedoyin</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Trend />
          <Heart />
          <Notification />
        </View>
      </View>
      <View className="px-4">
        <Text>Accounts</Text>
        <Text>Savings</Text>
        <Text>Cashback</Text>
        <Text>Cards</Text>
      </View>
      {/* Account Card */}
    </SafeAreaView>
  );
}
