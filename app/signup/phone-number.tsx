import React from "react";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import PhoneInput from "react-native-phone-number-input";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function PhoneNumberInput() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 pt-4 flex-1">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>

        {/* Header */}
        <Text className="text-[28px] text-[#333333] font-semibold mb-2">
          Input Phone Number
        </Text>
        <Text className="text-base text-gray-500 mb-8">
          We'll send you a verification code to make sure it's your phone
          number.
        </Text>

        {/* Phone Input */}
        <View className="mb-auto">
          <PhoneInput
            defaultCode="NG"
            layout="first"
            containerStyle={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            textContainerStyle={{
              backgroundColor: "transparent",
              paddingVertical: 0,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
            }}
            textInputStyle={{
              fontSize: 16,
              color: "#333",
            }}
            codeTextStyle={{
              fontSize: 16,
              color: "#333",
            }}
            flagButtonStyle={{
              width: 50,
            }}
            countryPickerButtonStyle={{
              width: 50,
            }}
          />
        </View>

        {/* Terms and Continue Section */}
        <View className="mb-8">
          {/* Terms */}
          <Text className="text-center text-xs text-gray-500 mb-6">
            By continuing, you accept our{" "}
            <Text className="text-gray-700 font-semibold">
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text className="text-gray-700 font-semibold">Privacy Policy</Text>
          </Text>

          {/* Continue Button */}
          <TouchableOpacity className="self-center bg-gray-100 rounded-full w-14 h-14 items-center justify-center">
            <View className="bg-[#FFC801] rounded-full w-10 h-10 items-center justify-center">
              <Text className="text-2xl text-white">→</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
