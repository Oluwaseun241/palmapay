import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

interface SigninData {
  email: string;
  phoneNumber: string;
  password: string;
}

export default function SigninForm() {
  const [formData, setFormData] = useState<SigninData>({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 justify-between">
      <View>
        {/* Email/Phone Number Section */}
        <View className="mt-5">
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#878787"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
          />
        </View>
        {/* Password */}
        <View className="mt-3">
          <View className="relative">
            <TextInput
              placeholder="Create Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#878787"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base pr-12"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#878787"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-[#F6671E]">Forgot Password?</Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center py-4">
        <TouchableOpacity
          onPress={() => router.navigate("/signup/bio-data")}
          className="bg-[#FFFFFF] p-2"
        >
          <Text className="text-center text-[#FFC801] font-bold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/signin/pin")}
          className="bg-[#C8C8C854] w-[78px] rounded-full p-2 items-center"
        >
          <FontAwesome6 name="arrow-right-long" size={24} color="#FFC801" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
