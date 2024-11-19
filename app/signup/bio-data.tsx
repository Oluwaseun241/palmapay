import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function BiodataScreen() {
  return (
    <SafeAreaView className="flex-1 dark: bg-white">
      <View className="ml-5">
        <Text className="font-['Neue'] font-bold text-2xl">
          Let's get to know you
        </Text>
      </View>
    </SafeAreaView>
  );
}
