import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import GameScreen from "./src/screens/GameScreen";
import SettingsScreen from "./components/SettingsScreen";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleGameOver = (score) => {
    if (score > highScore) {
      setHighScore(score);
    }
    setGameStarted(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {showSettings ? (
        <SettingsScreen onClose={handleCloseSettings} />
      ) : gameStarted ? (
        <GameScreen onGameOver={handleGameOver} />
      ) : (
        <HomeScreen
          onStart={handleStartGame}
          highScore={highScore}
          onSettings={handleOpenSettings}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
