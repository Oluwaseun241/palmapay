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
import { Splash } from "@/app/onboarding";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Neue: require("../assets/fonts/neue/NeueMontreal-Regular.otf"),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fontsLoaded) {
        setLoaded(true);
        SplashScreen.hideAsync();
      }
    }, 3500);
    return () => clearTimeout(timeout);
  }, [fontsLoaded]);

  if (!loaded) {
    return <Splash />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
