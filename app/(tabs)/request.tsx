import { SafeAreaView, View, TouchableOpacity } from "react-native";
import React from "react";
import CollectingHand from "@/assets/icons/collecting-hands.svg";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RequestScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FC6710]">
      <View className="px-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-5">
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
        </TouchableOpacity>

        <View>
          <CollectingHand />
        </View>
      </View>
    </SafeAreaView>
  );
}
