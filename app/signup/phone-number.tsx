import React, { useState, useRef } from "react";
import { router } from "expo-router";
import { ArrowLeft } from "@/components/svgs";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
  ActivityIndicator,
} from "react-native";
import countries from "country-list";
import { FontAwesome6 } from "@expo/vector-icons";

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const countryList: Country[] = countries.getCodes().map((code) => ({
  code,
  name: countries.getName(code) || "",
  flag: code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0))),

  dialCode:
    {
      US: "+1",
      GB: "+44",
      NG: "+234",
    }[code] || "+1",
}));

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countryList.find((c) => c.code === "NG") || countryList[0],
  );
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const formatPhoneNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, "");

    let formatted = cleaned;
    if (selectedCountry.code === "US") {
      if (cleaned.length > 6) {
        formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(
          3,
          6,
        )}-${cleaned.slice(6)}`;
      } else if (cleaned.length > 3) {
        formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
      }
    }

    setPhoneNumber(formatted);
  };

  const validatePhoneNumber = () => {
    const cleaned = phoneNumber.replace(/\D/g, "");

    return cleaned.length >= 10 && cleaned.length <= 15;
  };

  const handleSubmit = async () => {
    if (!validatePhoneNumber()) {
      setIsValid(false);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push({
        pathname: "/signup/verify",
        params: { phone: phoneNumber },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 pt-4 flex-1">
        <TouchableOpacity onPress={() => router.back()} className="mb-6">
          <ArrowLeft />
        </TouchableOpacity>

        {/* Header */}
        <Text className="text-[24px] font-NeueBold text-[#5F5F5F] mb-2">
          Input Phone Number
        </Text>
        <Text className="text-[13px] leading-[15.27px] font-Neue max-w-[225px] text-[#5F5F5F] mb-8">
          We'll send you a verification code to make sure it's your phone
          number.
        </Text>

        {/* Custom Phone Input */}
        <View className="mb-auto">
          <View
            className={`flex-row-reverse items-center bg-white rounded-[16px] border ${
              isValid ? "border-[#0000004A]" : "border-red-500"
            } px-4 py-[20px]`}
          >
            <TouchableOpacity
              className="flex-row items-center mr-2"
              onPress={() => setShowCountryPicker(true)}
            >
              <Text className="text-2xl mr-1">{selectedCountry.flag}</Text>
              <Text className="text-[#2ED981] ml-1">▼</Text>
            </TouchableOpacity>

            <TextInput
              ref={inputRef}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={formatPhoneNumber}
              keyboardType="phone-pad"
              className="flex-1 text-base text-gray-900"
              placeholderTextColor="#9CA3AF"
              onFocus={() => setIsValid(true)}
            />
          </View>

          {!isValid && (
            <Text className="text-red-500 text-xs mt-2 ml-4">
              Please enter a valid phone number
            </Text>
          )}
        </View>

        <View className="flex flex-row justify-between items-center">
          <Text className="text-xs text-[#5F5F5F]">
            By continuing, you accept our{" \n"}
            <Text className="font-NeueBold">Terms of Service</Text> and{" "}
            <Text className="font-NeueBold">Privacy Policy</Text>
          </Text>

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            className="self-center bg-gray-100 rounded-full w-[78px] h-12 items-center justify-center"
          >
            {isLoading ? (
              <ActivityIndicator color="#FFC801" />
            ) : (
              <View className="flex-row justify-around">
                <View />
                <View />
                <TouchableOpacity
                  onPress={() => router.navigate("/signup/verify")}
                  className="p-2 bg-[#FFFFFF54] w-24 h-12 items-center rounded-full"
                >
                  <FontAwesome6
                    name="arrow-right-long"
                    size={24}
                    color="#C59A00"
                  />
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={showCountryPicker}
        animationType="slide"
        transparent={true}
      >
        <View className="flex-1 bg-black/50">
          <View className="flex-1 mt-20 bg-white rounded-t-3xl">
            <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
              <Text className="text-xl font-semibold">Select Country</Text>
              <TouchableOpacity onPress={() => setShowCountryPicker(false)}>
                <Text className="text-gray-500 text-lg">✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={countryList}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="flex-row items-center p-4 border-b border-gray-100"
                  onPress={() => {
                    setSelectedCountry(item);
                    setShowCountryPicker(false);
                    setPhoneNumber("");
                    inputRef.current?.focus();
                  }}
                >
                  <Text className="text-2xl mr-3">{item.flag}</Text>
                  <Text className="flex-1">{item.name}</Text>
                  <Text className="text-gray-500">{item.dialCode}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
