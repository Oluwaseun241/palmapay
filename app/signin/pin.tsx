import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import Logo from "@/assets/images/login.svg";
import { Ionicons } from "@expo/vector-icons";

export default function PinScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="px-4 pt-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Logo />
        <View className="p-4">
          <Text className="text-[#5F5F5F] font-NeueBold text-[24px]">
            Enter your PIN code
          </Text>
          <Text className="font-Neue text-[#5F5F5F] mt-2">
            Not you? <Text className="text-[#F6671E]">Log Out</Text>
          </Text>
        </View>
        <View style={styles.codeContainer}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.codeBox} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
  },
});
