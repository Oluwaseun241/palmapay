import SignupForm from "@/components/SignupForm";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function BiodataScreen() {
  return (
    <SafeAreaView className="flex-1 dark: bg-white">
      <View className="ml-5 pt-4">
        <View className="w-[231px] gap-1">
          <Text className="font-['NeueBold'] font-bold text-[24px] leading-7 text-[#5F5F5F]">
            Let's get to know you.
          </Text>
          <Text className="font['Neue'] text-[#5F5F5F] text-[9px] leading-3">
            Your personal data is secure in compliance with strict data {"\n"}
            protections regulations
          </Text>
        </View>
        <View className="mt-3">
          <Text className="text-[#5F5F5F] font-['Neue'] font-normal text-sm">
            Have an account? <Text className="text-[#FC6710]">Login</Text>
          </Text>
        </View>

        {/* Signup component */}
        <SignupForm />
      </View>
    </SafeAreaView>
  );
}
