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
    <View>
      {/* Email/Phone Number Section */}
      <View>
        <Text className="mb-1 text-[#878787]">Your Email</Text>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#878787"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
        />
      </View>
      {/* Password */}
      <View>
        <Text className="mb-1 text-[#878787]">Create Password</Text>
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
      <View>
        <Text>Forgot Password?</Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity
          onPress={() => router.navigate("/signup/bio-data")}
          className="bg-[#FFC801]/10 rounded-[16px] py-4 mt-6 mb-4"
        >
          <Text className="text-center text-black font-bold text-lg">
            SignUp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          //onPress={handleSubmit}
          className="bg-[#FFC801]/10 rounded-[16px] py-4 mt-6 mb-4"
        >
          <Text className="text-center text-black font-bold text-lg">
            <FontAwesome6 name="arrow-right-long" size={24} color="#000000" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
