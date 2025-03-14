import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import Logo from "@/assets/images/login.svg";
import FaceID from "@/assets/icons/faceId.svg";
import Back from "@/assets/icons/back.svg";
import { Ionicons } from "@expo/vector-icons";

export default function PinScreen() {
  const [pin, setPin] = useState("");

  const handlePress = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => router.push("/home"), 300);
    }
  }, [pin]);

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
        {/* PIN Input Dots */}
        <View className="flex-row justify-center mt-6 gap-14">
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              className="w-14 h-14 border border-gray-300 rounded-lg flex items-center justify-center"
            >
              <Text className="text-3xl text-gray-700">
                {pin[index] ? "•" : ""}
              </Text>
            </View>
          ))}
        </View>

        {/* Keypad */}
        <View className="mt-10">
          {[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            ["face", 0, "back"],
          ].map((row, rowIndex) => (
            <View key={rowIndex} className="flex-row justify-center mb-4">
              {row.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (typeof item === "number") handlePress(item);
                    else if (item === "back") handleDelete();
                  }}
                  className="w-[150] h-[110] flex items-center justify-center"
                >
                  {item === "face" ? (
                    <FaceID />
                  ) : item === "back" ? (
                    <Back />
                  ) : (
                    <Text className="text-2xl font-bold">{item}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
