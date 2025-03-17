import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Logo from "@/assets/images/login.svg";
import Trend from "@/assets/icons/trend.svg";
import Heart from "@/assets/icons/heart.svg";
import Notification from "@/assets/icons/notification.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Wallet from "@/assets/icons/wallet.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import More from "@/assets/icons/more.svg";

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
        <View className="mt-8 p-4 border-gray-400 border rounded-xl">
          <View className="flex-row justify-between items-center">
            <Text className="font-Neue text-gray-600">Total balance:</Text>
            <TouchableOpacity
              className="flex-row items-center gap-1"
              onPress={() => setCurrency(currency === "NGN" ? "USD" : "NGN")}
            >
              <Text className="text-gray-500">
                {accountData[currency].currency}
              </Text>
              <ArrowDown />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-NeueBold">₦8,605,053.53</Text>

          {/* Bank Cards Stack */}
          <View className="relative mt-2">
            {/* Back Card (Most Faded) */}
            <View className="absolute top-8 left-0 w-full p-6 rounded-xl bg-yellow-200 opacity-60 z-10"></View>

            {/* Middle Card (Less Faded) */}
            <View className="absolute top-2 left-0 w-full p-6 rounded-xl bg-yellow-300 opacity-80 z-20"></View>

            {/* Bank Card */}
            <View
              className={`p-6 mt-4 mb-2 rounded-xl bg-yellow-400 flex-row items-center justify-center z-30`}
            >
              <View className="flex-row items-center">
                <Image
                  source={accountData[currency].logo}
                  className="w-16 h-16 mr-4"
                />
                <View>
                  <Text className="font-NeueBold font-medium text-lg">
                    {accountData[currency].bank}
                  </Text>
                  <Text className="font-Neue text-lg">
                    {accountData[currency].accountNumber}
                  </Text>
                </View>
              </View>

              <Text className="ml-16 font-NeueBold text-lg">
                {accountData[currency].balance}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-12 gap-2">
          <TouchableOpacity className="flex-row gap-2 bg-[#F7F9FC] w-44 p-3 rounded-lg items-center">
            <Wallet />
            <Text className="font-bold">Add money</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row gap-2 bg-[#F7F9FC] w-48 p-3 rounded-lg items-center">
            <ArrowRight />
            <Text className="font-bold">Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#F7F9FC] p-3 rounded-lg items-center">
            <More />
          </TouchableOpacity>
        </View>
      </View>

      {/* Transactions */}
      <View className="px-4 mt-8">
        <Text className="font-bold text-lg">Transactions</Text>
        <ScrollView>
          {accountData[currency].transactions.map((transaction, index) => (
            <View
              key={index}
              className="bg-white p-4 rounded-lg mt-6 flex-row items-center shadow"
            >
              <Image source={transaction.icon} className="w-10 h-10 mr-4" />
              <View className="flex-1">
                <Text className="font-bold">{transaction.name}</Text>
                <Text className="text-gray-500">{transaction.type}</Text>
              </View>
              <View className="items-end">
                <Text className="font-bold">{transaction.amount}</Text>
                <Text className="text-gray-400">{transaction.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
