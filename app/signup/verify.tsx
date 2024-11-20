import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ArrowLeft } from "@/components/svgs";

export default function VerifyCode() {
  return (
    <View style={styles.container}>
      <Link href="../" style={styles.backButton}>
        <Text style={styles.backButtonText}>
          <ArrowLeft />
        </Text>
      </Link>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          A code was sent to the number{"\n"}
          ending with <Text style={styles.boldText}>3442</Text>
        </Text>

        <Pressable>
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
        <Pressable style={styles.continueButton}>
          <Text style={styles.continueButtonText}>→</Text>
        </Pressable>
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
    marginTop: 40,
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
    color: "#007AFF",
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
    width: 50,
    height: 50,
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
