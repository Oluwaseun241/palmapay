import React from "react";

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Toss from "@/assets/images/hand2.svg";
import Logo from "@/assets/images/icon.svg";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SecondScreen() {
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
        <View className="items-center justify-center">
          <Toss height={490} />
        </View>
        <View className="mt-4 mb-2">
          <Text className="font-['Neue'] font-normal text-4xl ml-12">
            <View className="bg-[#FC6710] w-44 h-12 p-1 rounded-md border-b-2 border-r-2 shadow">
              <Text className="font-['Neue'] font-normal text-4xl text-center">
                palma.pay
              </Text>
            </View>
            gives{"\n"}you the freedom{"\n"}over your funds!
          </Text>
        </View>
        <View className="flex-row justify-around">
          <View />
          <View />
          <TouchableOpacity
            onPress={() => router.navigate("/onboarding/welcome-3")}
            className="p-2 bg-[#FFFFFF54] w-20 h-12 items-center rounded-full"
          >
            <FontAwesome6 name="arrow-right-long" size={24} color="#C59A00" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
