import { router } from "expo-router";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Tap from "@/assets/images/hand3.svg";
import Logo from "@/assets/images/icon.svg";
import { FontAwesome6 } from "@expo/vector-icons";

export default function ThirdScreen() {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("hasLaunched", "true");
    router.navigate("/signup/bio-data");
  };

  return (
    <View className="flex-1 bg-primary">
      <ImageBackground
        source={require("@/assets/images/test.png")}
        width={640}
        height={640}
      >
        <View className="ml-12 mt-20">
          <Logo width={44} height={44} />
        </View>
        <View className="mt-14 mb-20 items-center justify-center">
          <Tap />
        </View>
        <View className="mt-4 mb-2">
          <Text className="font-['Neue'] font-normal text-4xl ml-12">
            <View className="bg-[#FC6710] w-44 h-12 p-1 rounded-md border-b-2 border-r-2 shadow">
              <Text className="font-['Neue'] font-normal text-4xl text-center">
                palma.pay
              </Text>
            </View>
            powers{"\n"}payments in few{"\n"}clicks!
          </Text>
        </View>
        <View className="flex-row justify-around">
          <View />
          <View />
          <TouchableOpacity
            onPress={() => finishOnboarding()}
            className="p-2 bg-[#FFFFFF54] w-20 h-12 items-center rounded-full"
          >
            <FontAwesome6 name="arrow-right-long" size={24} color="#C59A00" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
