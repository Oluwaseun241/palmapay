import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/assets/global.css";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";
import CustomSplashScreen from "@/app/onboarding/Splash";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  let [loaded] = useFonts({
    Neue: require("../assets/fonts/neue/NeueMontreal-Bold.otf"),
  });

  loaded = false;
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <CustomSplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
