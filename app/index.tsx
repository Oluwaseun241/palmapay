import React from "react";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    checkIfFirstLaunch();
    checkOnboarding();
  }, []);

  const checkIfFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched"); // add s for testing
      setIsFirstLaunch(hasLaunched === null);
    } catch (error) {
      setIsFirstLaunch(true);
    }
  };

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("onboardingComplete");
      setIsOnboardingComplete(value === "true");
    } catch (error) {
      return false;
    }
  };

  if (isFirstLaunch === null || isOnboardingComplete === null) {
    return null;
  }

  if (isFirstLaunch) {
    return <Redirect href="/onboarding/welcome-1" />;
  }

  if (isOnboardingComplete) {
    return <Redirect href="/signin" />;
  }
  // "/(tabs)/home"
  return <Redirect href="/signup/bio-data" />;
}
