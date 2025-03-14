import { Stack } from "expo-router";
import React from "react";
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
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
}
