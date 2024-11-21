import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { ArrowLeft } from "@/components/svgs";
import { router } from "expo-router";
import Logo from "@/assets/images/login.svg";

export default function PinScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="px-4 pt-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <ArrowLeft />
        </TouchableOpacity>
        <Logo />
        <View>
          <Text>Enter your PIN code</Text>
          <Text>
            Not you? <Text>Log Out</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
