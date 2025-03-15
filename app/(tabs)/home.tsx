import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/login.svg";
import Trend from "@/assets/icons/trend.svg";
import Heart from "@/assets/icons/heart.svg";
import Notification from "@/assets/icons/notification.svg";
import { accountData } from "@/constants/Data";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Accounts");
  const [currency, setCurrency] = useState("NGN");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        {/* Header */}
        <View className="flex-row justify-between">
          <View className="flex-row items-center gap-2">
            <Logo width={40} />
            <Text className="font-Neue text-sm">Samuel Adedoyin</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Trend />
            <Heart />
            <Notification />
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-around items-center">
          {["Accounts", "Savings", "Cashback", "Cards"].map((tab) => (
            <View
              className={`${activeTab === tab ? "w-[90] h-[32] items-center justify-center rounded-full bg-[#EDF1F7]" : "text-gray-400"}`}
            >
              <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                <Text className="font-Neue">{tab}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Account Card */}
        <View className="mt-6 p-4 border-gray-400 border-2 rounded-xl">
          <View className="flex-row justify-between items-center">
            <Text className="font-Neue text-gray-600">Total balance:</Text>
            <TouchableOpacity
              onPress={() => setCurrency(currency === "NGN" ? "USD" : "NGN")}
            >
              <Text className="text-gray-500">
                {accountData[currency].currency} ▼
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-NeueBold">
            {accountData[currency].balance}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
