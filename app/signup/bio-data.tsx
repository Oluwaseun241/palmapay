import React from "react";
import SignupForm from "@/components/SignupForm";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

export default function BiodataScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-4"
      >
        <View className="pt-4 pb-8">
          <View className="mb-2">
            <Text className="font-NeueBold text-2xl leading-[28.2px] text-[#5F5F5F]">
              Let's get to know you.
            </Text>
            <Text className="font-Neue text-xs leading-[10.57px] max-w-[222px] text-[#5F5F5F] mt-2">
              Your personal data is secure in compliance with strict data
              protection regulations.
            </Text>
          </View>

          <View className="mb-6">
            <Text className="text-[#5F5F5F] leading-[14.1px] font-Neue text-sm">
              Have an account? <Text className="text-[#F6671E]">Login</Text>
            </Text>
          </View>

          <SignupForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
