import { router } from "expo-router";
import React, { useState } from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

interface FormData {
  firstName: string;
  lastName: string;
  otherNames: string;
  username: string;
  dateOfBirth: string;
  gender: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
}

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    otherNames: "",
    username: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = () => {
    router.push({
      pathname: "/signup/phone-number",
    });
  };

  return (
    <View className="gap-4">
      {/* Names Section */}
      <View className="flex-row gap-2">
        <View className="flex-1">
          <Text className="mb-1 text-[#878787]">First Name</Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#878787"
            value={formData.firstName}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
            className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
          />
        </View>
        <View className="flex-1">
          <Text className="mb-1 text-[#878787]">Last Name</Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#878787"
            value={formData.lastName}
            onChangeText={(text) =>
              setFormData({ ...formData, lastName: text })
            }
            className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
          />
        </View>
      </View>

      {/* Other Names */}
      <View>
        <Text className="mb-1 text-[#878787]">Other Names</Text>
        <TextInput
          placeholder="Other Names"
          placeholderTextColor="#878787"
          value={formData.otherNames}
          onChangeText={(text) =>
            setFormData({ ...formData, otherNames: text })
          }
          className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
        />
      </View>

      {/* Username */}
      <View>
        <Text className="mb-1 text-[#878787]">Username</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#878787"
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
          className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
        />
      </View>

      {/* Date of Birth */}
      <View>
        <Text className="mb-1 text-[#878787]">Date of Birth</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#878787"
          value={formData.dateOfBirth}
          onChangeText={(text) =>
            setFormData({ ...formData, dateOfBirth: text })
          }
          className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
          keyboardType="numbers-and-punctuation"
        />
      </View>

      {/* Gender */}
      <View>
        <Text className="mb-1 text-[#878787]">Gender</Text>
        <TextInput
          placeholder="Gender"
          placeholderTextColor="#878787"
          value={formData.gender}
          onChangeText={(text) => setFormData({ ...formData, gender: text })}
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

      {/* Password Requirements */}
      <View className="flex-row gap-2 flex-wrap">
        {[
          { text: "8+ Characters", met: formData.password.length >= 8 },
          { text: "Numbers", met: /\d/.test(formData.password) },
          { text: "Capital", met: /[A-Z]/.test(formData.password) },
          { text: "Lowercase", met: /[a-z]/.test(formData.password) },
          {
            text: "Special Character",
            met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
          },
        ].map(({ text, met }) => (
          <View
            key={text}
            className={`rounded-full px-3 py-1 ${
              met ? "bg-[#FFC801]" : "bg-gray-100"
            }`}
          >
            <Text className={`text-xs ${met ? "text-black" : "text-gray-600"}`}>
              {text}
            </Text>
          </View>
        ))}
      </View>

      {/* Confirm Password */}
      <View>
        <Text className="mb-1 text-[#878787]">Confirm Password</Text>
        <View className="relative">
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#878787"
            value={formData.confirmPassword}
            onChangeText={(text) =>
              setFormData({ ...formData, confirmPassword: text })
            }
            className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base pr-12"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-4"
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#878787"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Referral Code */}
      <View>
        <Text className="mb-1 text-[#878787]">Referral Code</Text>
        <TextInput
          placeholder="Enter referral code"
          placeholderTextColor="#878787"
          value={formData.referralCode}
          onChangeText={(text) =>
            setFormData({ ...formData, referralCode: text.toUpperCase() })
          }
          className="border-[0.5px] text-black border-[#0000004A] rounded-[16px] px-[14px] py-4 text-base"
          autoCapitalize="characters"
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-[#FFC801]/10 rounded-[16px] py-4 mt-6 mb-4"
      >
        <Text className="text-center text-black font-bold text-lg">
          <FontAwesome6 name="arrow-right-long" size={24} color="#FFC801" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
