import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/assets/global.css";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import CustomSplashScreen from "@/components/Splash";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Neue: require("@/assets/fonts/neue/NeueMontreal-Regular.otf"),
    NeueBold: require("@/assets/fonts/neue/NeueMontreal-Bold.otf"),
  });

  useEffect(() => {
    const loadApp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setTimeout(() => {
          setShowSplash(false);
          setLoaded(true);
        }, 5000);
      }
    };

    loadApp();
  }, [fontsLoaded]);

  if (showSplash) {
    return <CustomSplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="#00000" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
