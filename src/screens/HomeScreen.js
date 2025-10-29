import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ onStart, highScore, onSettings }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const starAnims = useRef(
    [...Array(20)].map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    // Pulsing animation for title
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Twinkling stars animation
    starAnims.forEach((anim, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 100),
          Animated.timing(anim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  return (
    <LinearGradient
      colors={["#0a0015", "#1a0a2e", "#0f0520"]}
      style={styles.container}
    >
      {/* Animated stars background */}
      {starAnims.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.star,
            {
              left: Math.random() * width,
              top: Math.random() * height,
              opacity: anim,
            },
          ]}
        />
      ))}

      <View style={styles.content}>
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <Text style={styles.title}>NEBULA</Text>
          <Text style={styles.title}>DASH</Text>
        </Animated.View>

        <Text style={styles.subtitle}>Navigate Through The Cosmos</Text>

        {highScore > 0 && (
          <View style={styles.highScoreContainer}>
            <Text style={styles.highScoreLabel}>High Score</Text>
            <Text style={styles.highScoreValue}>{highScore}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.startButton}
          onPress={onStart}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#ff006e", "#8338ec", "#3a86ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.startButtonText}>START JOURNEY</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.instructions}>
          <Text style={styles.instructionText}>🚀 Tap to move up</Text>
          <Text style={styles.instructionText}>⭐ Collect stardust</Text>
          <Text style={styles.instructionText}>🌌 Avoid asteroids</Text>
        </View>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={onSettings}
          activeOpacity={0.7}
        >
          <Text style={styles.settingsText}>⚙️ Settings</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Made by AppsQuery</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#8338ec",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    letterSpacing: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#a0a0ff",
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
    fontStyle: "italic",
  },
  highScoreContainer: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "rgba(131, 56, 236, 0.2)",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#8338ec",
  },
  highScoreLabel: {
    fontSize: 14,
    color: "#a0a0ff",
    marginBottom: 5,
  },
  highScoreValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#ff006e",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  startButton: {
    marginBottom: 40,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#8338ec",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  buttonGradient: {
    paddingHorizontal: 60,
    paddingVertical: 18,
    borderRadius: 30,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
  instructions: {
    alignItems: "center",
    marginTop: 20,
  },
  instructionText: {
    fontSize: 16,
    color: "#7090ff",
    marginVertical: 5,
  },
  star: {
    position: "absolute",
    width: 2,
    height: 2,
    backgroundColor: "#fff",
    borderRadius: 1,
  },
  settingsButton: {
    marginTop: 20,
    backgroundColor: "rgba(139, 92, 246, 0.3)",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.6)",
  },
  settingsText: {
    fontSize: 16,
    color: "#a78bfa",
    fontWeight: "600",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    fontSize: 12,
    color: "#6b7280",
  },
});
