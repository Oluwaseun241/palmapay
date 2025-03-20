import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import React, { useState } from "react";
import CollectingHand from "@/assets/icons/collecting-hands.svg";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Back from "@/assets/icons/back.svg";

export default function RequestScreen() {
  const [amount, setAmount] = useState("");

  const handlePress = (value: number) => {
    setAmount(amount + value);
  };

  const handleDelete = () => {
    setAmount(amount.slice(0, -1));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FC6710]">
      <View className="px-4">
        <TouchableOpacity onPress={() => router.back()} className="mb-5">
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="items-center">
        <CollectingHand />
      </View>

      {/* Amount Input */}
      <View className="items-center mt-5">
        <View className="border border-white px-4 py-2 rounded-lg w-48 h-16 flex-row items-center">
          <Text className="text-white text-3xl font-NeueBold">₦</Text>
          <TextInput
            className="text-white text-3xl font-bold flex-1 text-center"
            value={amount}
            editable={false} // Disable direct typing
          />
        </View>
      </View>

      {/* Request for Money Label */}
      <Text className="text-white text-center mt-4 text-xl font-NeueBold">
        Request for Money
      </Text>

      {/* Keypad */}
      <View className="mt-10">
        {[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          ["*", 0, "back"],
        ].map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-center mb-1">
            {row.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (typeof item === "number") handlePress(item);
                  else if (item === "back") handleDelete();
                }}
                className="w-[150] h-[110] flex items-center justify-center"
              >
                {item === "back" ? (
                  <Back />
                ) : (
                  <Text className="text-2xl font-bold">{item}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View className="mt-6 px-4">
        <TouchableOpacity className="bg-[#00000052] rounded-2xl py-3 items-center mb-3">
          <Text className="text-white text-lg">Reason</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#0000007D] rounded-2xl py-3 items-center">
          <Text className="text-white text-lg">Request</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
