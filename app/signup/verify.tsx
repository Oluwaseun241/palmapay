import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VerifyCode() {
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboardingComplete", "true");
      router.navigate("/signin");
    } catch (error) {
      console.log("Error saving onboarding state:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} className="mb-6">
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          A code was sent to the number{"\n"}
          ending with <Text style={styles.boldText}>3442</Text>
        </Text>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.editNumber}>Edit Phone number</Text>
        </Pressable>
      </View>

      {/* Code Input Boxes */}
      <View style={styles.codeContainer}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.codeBox} />
        ))}
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={completeOnboarding}
          style={styles.continueButton}
        >
          <FontAwesome6 name="arrow-right-long" size={24} color="#C59A00" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
  },
  messageContainer: {
    marginTop: 20,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Neue",
  },
  boldText: {
    fontFamily: "NeueBold",
  },
  editNumber: {
    color: "#F6671E",
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Neue",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    right: 20,
  },
  continueButton: {
    width: 80,
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: 20,
    color: "#000",
  },
});
