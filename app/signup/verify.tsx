import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VerifyCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) text = text.charAt(0);
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input field if available
    if (text && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newCode.join("").length === 4) {
      completeOnboarding();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.navigate("/signin");
    } catch (error) {
      console.log("Error saving onboarding state:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="pt-4 px-5">
        <TouchableOpacity onPress={() => router.back()} className="mb-3">
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>

        <View className="mt-5">
          <Text className="font-Neue text-lg">
            A code was sent to the number{"\n"}
            ending with <Text className="font-NeueBold">3442</Text>
          </Text>

          <Pressable onPress={() => router.back()}>
            <Text className="font-Neue text-[#F6671E] mt-2 text-lg">
              Edit Phone number
            </Text>
          </Pressable>
        </View>

        {/* Code Input Boxes */}
        <View className="flex-row justify-between mt-10 px-5">
          {code.map((value, index) => (
            <TextInput
              className="w-16 h-16 border border-[#E5E5E5] text-center text-3xl rounded-lg"
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
