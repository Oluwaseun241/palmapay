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

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Neue: require("@/assets/fonts/neue/NeueMontreal-Regular.otf"),
    NeueBold: require("@/assets/fonts/neue/NeueMontreal-Bold.otf"),
  });

  useEffect(() => {
    const loadApp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLoaded(true);
      }
    };

    loadApp();
  }, [fontsLoaded]);

  if (!loaded) {
    return <CustomSplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
