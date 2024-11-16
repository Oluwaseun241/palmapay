import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const checkOnboarding = async () => {
  try {
    const value = await AsyncStorage.getItem("onboardingComplete");
    return value === "true";
  } catch (error) {
    return false;
  }
};

const completeOnboarding = async () => {
  try {
    await AsyncStorage.setItem("onboardingComplete", "true");
  } catch (error) {
    console.log("Error saving onboarding state:", error);
  }
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFC801",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
