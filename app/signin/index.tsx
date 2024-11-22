import React from "react";
import { router } from "expo-router";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SigninForm from "@/components/SigninForm";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 pt-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text className="font-NeueBold text-[#5F5F5F] text-2xl">
            Hey, Welcome Back!
          </Text>
          <Text className="font-Neue text-[#5F5F5F] text-sm">
            Please sign in here to your account.
          </Text>
        </View>
        <SigninForm />
      </View>
    </SafeAreaView>
  );
}
