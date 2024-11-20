import React, { useState } from "react";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 pt-4 flex-1">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>

        {/* Header */}
        <Text className="text-[28px] font-NeueBold text-[#333333] font-semibold mb-2">
          Input Phone Number
        </Text>
        <Text className="text-[13px] leading-[15.27px] font-Neue max-w-[225px] text-[#5F5F5F] mb-8">
          We'll send you a verification code to make sure it's your phone
          number.
        </Text>

        <View className="mb-auto">
          <View className="flex-row-reverse items-center bg-white rounded-[16px] border-[0.5px] py-[26px] px-[14.5px] border-[#0000004A]">
            {/* Flag and Dropdown */}
            <TouchableOpacity className="flex-row items-center mr-2">
              <View className="w-6 h-4 mr-1">
                <View className="w-full h-full bg-[#008751]" />
                <View className="w-2 h-full bg-white absolute right-0" />
              </View>
              <Text className="text-[#2ED981] ml-1">▼</Text>
            </TouchableOpacity>

            {/* Phone Input */}
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              className="flex-1 text-[13px] text-black leading-[15.27px] font-Neue"
              placeholderTextColor="#878787"
            />
          </View>
        </View>

        <View className="flex-row items-center justify-between mb-8">
          <Text className="text-[12px] leading-[14.4px] font-Neue text-[#5F5F5F]">
            By continuing, you accept our{"\n"}
            <Text className="text-[rgb(95,95,95)] font-NeueBold">
              Terms of Service{" "}
            </Text>
            and{" "}
            <Text className="text-[#5F5F5F] font-NeueBold">Privacy Policy</Text>
          </Text>

          <View className="flex-row justify-around">
            <View />
            <View />
            <TouchableOpacity
              onPress={() => router.navigate("/onboarding/welcome-2")}
              className="p-2 bg-[#C8C8C854] w-24 h-12 items-center rounded-full"
            >
              <FontAwesome6 name="arrow-right-long" size={24} color="#FFC801" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
