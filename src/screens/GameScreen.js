import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const GRAVITY = 0.6;
const JUMP_STRENGTH = -12;
const SHIP_SIZE = 50;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_GAP = 200;
const GAME_SPEED = 3;
const STAR_SIZE = 30;
const COIN_SIZE = 35;

export default function GameScreen({ onGameOver }) {
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [shipY, setShipY] = useState(height / 2);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [stars, setStars] = useState([]);
  const [goldCoins, setGoldCoins] = useState([]);
  const [particles, setParticles] = useState([]);

  // New unique features
  const [nearMisses, setNearMisses] = useState(0);
  const [perfectStreak, setPerfectStreak] = useState(0);
  const [backgroundTheme, setBackgroundTheme] = useState(0);

  const gameLoopRef = useRef(null);
  const shipRotation = useRef(new Animated.Value(0)).current;
  const explosionAnim = useRef(new Animated.Value(0)).current;
  const nearMissFlash = useRef(new Animated.Value(0)).current;
  const streakPulse = useRef(new Animated.Value(1)).current;
  const passedObstacles = useRef(new Set());

  // Background themes that change based on score
  const backgroundThemes = [
    ["#0a0015", "#1a0a2e", "#16213e"], // Dark blue (0-50)
    ["#1a0035", "#2a1050", "#3a2070"], // Purple (50-100)
    ["#0a1520", "#1a2540", "#2a3560"], // Deep blue (100-150)
    ["#200a15", "#401a2e", "#602a3e"], // Red tint (150+)
  ];

  // Initialize game elements
  useEffect(() => {
    const initialObstacles = [];
    const initialStars = [];
    const initialCoins = [];

    for (let i = 0; i < 3; i++) {
      initialObstacles.push({
        id: Date.now() + i,
        x: width + i * 300,
        height: Math.random() * (height - OBSTACLE_GAP - 100) + 50,
      });
    }

    for (let i = 0; i < 5; i++) {
      initialStars.push({
        id: Date.now() + i + 1000,
        x: width + i * 200 + 100,
        y: Math.random() * (height - 100) + 50,
        collected: false,
      });
    }

    for (let i = 0; i < 3; i++) {
      initialCoins.push({
        id: Date.now() + i + 2000,
        x: width + i * 350 + 150,
        y: Math.random() * (height - 100) + 50,
        collected: false,
      });
    }

    setObstacles(initialObstacles);
    setStars(initialStars);
    setGoldCoins(initialCoins);
  }, []);

  // Change background theme based on score
  useEffect(() => {
    const themeIndex = Math.min(
      Math.floor(score / 50),
      backgroundThemes.length - 1
    );
    setBackgroundTheme(themeIndex);
  }, [score]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    gameLoopRef.current = setInterval(() => {
      // Update ship position
      setShipY((prevY) => {
        const newVelocity = velocity + GRAVITY;
        setVelocity(newVelocity);
        const newY = prevY + newVelocity;

        // Check boundaries
        if (newY < 0 || newY > height - SHIP_SIZE) {
          handleGameEnd();
          return prevY;
        }

        return newY;
      });

      // Update obstacles
      setObstacles((prevObstacles) => {
        const updated = prevObstacles.map((obs) => ({
          ...obs,
          x: obs.x - GAME_SPEED,
        }));

        const lastObstacle = updated[updated.length - 1];
        if (lastObstacle && lastObstacle.x < width - 300) {
          updated.push({
            id: Date.now(),
            x: width,
            height: Math.random() * (height - OBSTACLE_GAP - 100) + 50,
          });
        }

        return updated.filter((obs) => obs.x > -OBSTACLE_WIDTH);
      });

      // Update stars
      setStars((prevStars) => {
        const updated = prevStars.map((star) => ({
          ...star,
          x: star.x - GAME_SPEED,
        }));

        const lastStar = updated[updated.length - 1];
        if (lastStar && lastStar.x < width - 200) {
          updated.push({
            id: Date.now() + Math.random(),
            x: width,
            y: Math.random() * (height - 100) + 50,
            collected: false,
          });
        }

        return updated.filter((star) => star.x > -STAR_SIZE);
      });

      // Update gold coins
      setGoldCoins((prevCoins) => {
        const updated = prevCoins.map((coin) => ({
          ...coin,
          x: coin.x - GAME_SPEED,
        }));

        const lastCoin = updated[updated.length - 1];
        if (lastCoin && lastCoin.x < width - 350 && Math.random() > 0.6) {
          updated.push({
            id: Date.now() + Math.random(),
            x: width,
            y: Math.random() * (height - 100) + 50,
            collected: false,
          });
        }

        return updated.filter((coin) => coin.x > -COIN_SIZE);
      });

      checkCollisions();
    }, 16);

    return () => clearInterval(gameLoopRef.current);
  }, [velocity, shipY, obstacles, stars, goldCoins, gameOver]);

  const handleJump = () => {
    if (gameOver) return;
    setVelocity(JUMP_STRENGTH);

    Animated.sequence([
      Animated.timing(shipRotation, {
        toValue: -20,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shipRotation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    createParticles(80, shipY + SHIP_SIZE / 2);
  };

  const createParticles = (x, y) => {
    const newParticles = [];
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: Date.now() + Math.random(),
        x,
        y: y + (Math.random() - 0.5) * 20,
        opacity: new Animated.Value(1),
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    newParticles.forEach((particle) => {
      Animated.timing(particle.opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      });
    });
  };

  const checkNearMiss = (obsLeft, obsRight, obsHeight) => {
    const shipLeft = 80;
    const shipRight = shipLeft + SHIP_SIZE;
    const shipTop = shipY;
    const shipBottom = shipY + SHIP_SIZE;

    // Near miss detection - ship is very close to obstacle
    const horizontalNear = shipRight > obsLeft - 20 && shipLeft < obsRight + 20;
    const verticalNear =
      (shipTop < obsHeight + 20 && shipTop > obsHeight - 20) ||
      (shipBottom > obsHeight + OBSTACLE_GAP - 20 &&
        shipBottom < obsHeight + OBSTACLE_GAP + 20);

    if (horizontalNear && verticalNear) {
      // Near miss bonus
      setNearMisses((prev) => prev + 1);
      setScore((prev) => prev + 2);

      // Flash animation
      Animated.sequence([
        Animated.timing(nearMissFlash, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(nearMissFlash, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const checkCollisions = () => {
    const shipLeft = 80;
    const shipRight = shipLeft + SHIP_SIZE;
    const shipTop = shipY;
    const shipBottom = shipY + SHIP_SIZE;

    // Check obstacle collisions
    obstacles.forEach((obs) => {
      const obsLeft = obs.x;
      const obsRight = obs.x + OBSTACLE_WIDTH;

      if (shipRight > obsLeft && shipLeft < obsRight) {
        if (shipTop < obs.height || shipBottom > obs.height + OBSTACLE_GAP) {
          handleGameEnd();
        } else if (
          !passedObstacles.current.has(obs.id) &&
          obsRight < shipLeft
        ) {
          passedObstacles.current.add(obs.id);
          setScore((prev) => prev + 1);
          setPerfectStreak((prev) => prev + 1);

          // Pulse streak counter
          Animated.sequence([
            Animated.timing(streakPulse, {
              toValue: 1.2,
              duration: 100,
              useNativeDriver: true,
            }),
            Animated.timing(streakPulse, {
              toValue: 1,
              duration: 100,
              useNativeDriver: true,
            }),
          ]).start();
        }
      } else if (obsLeft < 150 && obsRight > 50) {
        // Check for near miss
        checkNearMiss(obsLeft, obsRight, obs.height);
      }
    });

    // Check star collisions
    setStars((prevStars) =>
      prevStars.map((star) => {
        if (star.collected) return star;

        const starLeft = star.x;
        const starRight = star.x + STAR_SIZE;
        const starTop = star.y;
        const starBottom = star.y + STAR_SIZE;

        if (
          shipRight > starLeft &&
          shipLeft < starRight &&
          shipBottom > starTop &&
          shipTop < starBottom
        ) {
          setScore((prev) => prev + 5);
          createParticles(star.x, star.y);
          return { ...star, collected: true };
        }

        return star;
      })
    );

    // Check coin collisions
    setGoldCoins((prevCoins) =>
      prevCoins.map((coin) => {
        if (coin.collected) return coin;

        const coinLeft = coin.x;
        const coinRight = coin.x + COIN_SIZE;
        const coinTop = coin.y;
        const coinBottom = coin.y + COIN_SIZE;

        if (
          shipRight > coinLeft &&
          shipLeft < coinRight &&
          shipBottom > coinTop &&
          shipTop < coinBottom
        ) {
          setCoins((prev) => prev + 1);
          createParticles(coin.x, coin.y);
          return { ...coin, collected: true };
        }

        return coin;
      })
    );
  };

  const handleGameEnd = () => {
    setGameOver(true);
    clearInterval(gameLoopRef.current);

    Animated.spring(explosionAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleRestart = () => {
    onGameOver(score);
  };

  const currentTheme = backgroundThemes[backgroundTheme];

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleJump}
      style={styles.container}
    >
      <LinearGradient colors={currentTheme} style={styles.gradient}>
        {/* HUD */}
        <View style={styles.hudContainer}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>SCORE</Text>
            <Text style={styles.scoreText}>{score}</Text>
          </View>
          <View style={styles.coinsBox}>
            <Text style={styles.coinEmoji}>🪙</Text>
            <Text style={styles.coinText}>{coins}</Text>
          </View>
        </View>

        {/* Perfect Streak Indicator */}
        {perfectStreak > 3 && (
          <Animated.View
            style={[
              styles.streakContainer,
              { transform: [{ scale: streakPulse }] },
            ]}
          >
            <Text style={styles.streakText}>🔥 {perfectStreak} Streak!</Text>
          </Animated.View>
        )}

        {/* Near Miss Flash Indicator */}
        <Animated.View
          style={[styles.nearMissFlash, { opacity: nearMissFlash }]}
        />

        {/* Near Miss Counter */}
        {nearMisses > 0 && (
          <View style={styles.nearMissCounter}>
            <Text style={styles.nearMissCountText}>
              ⚡ {nearMisses} Near Misses
            </Text>
          </View>
        )}

        {/* Stars */}
        {stars.map((star) => {
          if (star.collected) return null;
          return (
            <View
              key={star.id}
              style={[styles.star, { left: star.x, top: star.y }]}
            >
              <Text style={styles.starEmoji}>⭐</Text>
            </View>
          );
        })}

        {/* Gold Coins */}
        {goldCoins.map((coin) => {
          if (coin.collected) return null;
          return (
            <View
              key={coin.id}
              style={[styles.coin, { left: coin.x, top: coin.y }]}
            >
              <Text style={styles.coinEmojiLarge}>🪙</Text>
            </View>
          );
        })}

        {/* Obstacles */}
        {obstacles.map((obs) => (
          <View key={obs.id}>
            <LinearGradient
              colors={["#ff006e", "#d00060"]}
              style={[
                styles.obstacle,
                {
                  left: obs.x,
                  top: 0,
                  height: obs.height,
                },
              ]}
            />
            <LinearGradient
              colors={["#ff006e", "#d00060"]}
              style={[
                styles.obstacle,
                {
                  left: obs.x,
                  top: obs.height + OBSTACLE_GAP,
                  height: height - obs.height - OBSTACLE_GAP,
                },
              ]}
            />
          </View>
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <Animated.View
            key={particle.id}
            style={[
              styles.particle,
              {
                left: particle.x,
                top: particle.y,
                opacity: particle.opacity,
              },
            ]}
          />
        ))}

        {/* Ship */}
        <Animated.View
          style={[
            styles.ship,
            {
              top: shipY,
              transform: [
                {
                  rotate: shipRotation.interpolate({
                    inputRange: [-20, 0],
                    outputRange: ["-20deg", "0deg"],
                  }),
                },
                gameOver && { scale: explosionAnim },
              ],
            },
          ]}
        >
          <Text style={styles.shipEmoji}>🚀</Text>
        </Animated.View>

        {/* Game Over Screen */}
        {gameOver && (
          <View style={styles.gameOverContainer}>
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "rgba(26,10,46,0.9)"]}
              style={styles.gameOverContent}
            >
              <Text style={styles.gameOverText}>MISSION FAILED</Text>
              <Text style={styles.finalScore}>Score: {score}</Text>
              <Text style={styles.coinsEarned}>🪙 Coins: {coins}</Text>
              {perfectStreak > 5 && (
                <Text style={styles.bestStreak}>
                  🔥 Best Streak: {perfectStreak}
                </Text>
              )}
              {nearMisses > 0 && (
                <Text style={styles.nearMissTotal}>
                  ⚡ Near Misses: {nearMisses}
                </Text>
              )}
              <TouchableOpacity
                style={styles.restartButton}
                onPress={handleRestart}
              >
                <LinearGradient
                  colors={["#ff006e", "#8338ec", "#3a86ff"]}
                  style={styles.restartGradient}
                >
                  <Text style={styles.restartText}>RETURN TO BASE</Text>
                </LinearGradient>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  hudContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  scoreBox: {
    backgroundColor: "rgba(131, 56, 236, 0.3)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#8338ec",
  },
  scoreLabel: {
    fontSize: 12,
    color: "#a78bfa",
    fontWeight: "600",
  },
  scoreText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#ff006e",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  coinsBox: {
    backgroundColor: "rgba(255, 215, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ffd700",
    flexDirection: "row",
    alignItems: "center",
  },
  coinEmoji: {
    fontSize: 24,
    marginRight: 5,
  },
  coinText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  streakContainer: {
    position: "absolute",
    top: 130,
    alignSelf: "center",
    backgroundColor: "rgba(255, 100, 0, 0.4)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ff6400",
    zIndex: 999,
  },
  streakText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  nearMissFlash: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 0, 0.3)",
    zIndex: 500,
    pointerEvents: "none",
  },
  nearMissCounter: {
    position: "absolute",
    top: 130,
    right: 20,
    backgroundColor: "rgba(255, 255, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ffff00",
    zIndex: 997,
  },
  nearMissCountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  ship: {
    position: "absolute",
    left: 80,
    width: SHIP_SIZE,
    height: SHIP_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  shipEmoji: {
    fontSize: 40,
  },
  obstacle: {
    position: "absolute",
    width: OBSTACLE_WIDTH,
    borderRadius: 10,
  },
  star: {
    position: "absolute",
    width: STAR_SIZE,
    height: STAR_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  starEmoji: {
    fontSize: 30,
  },
  coin: {
    position: "absolute",
    width: COIN_SIZE,
    height: COIN_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  coinEmojiLarge: {
    fontSize: 35,
  },
  particle: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3a86ff",
  },
  gameOverContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverContent: {
    padding: 40,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8338ec",
  },
  gameOverText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ff006e",
    marginBottom: 20,
    textShadowColor: "#fff",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  finalScore: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 10,
  },
  coinsEarned: {
    fontSize: 24,
    color: "#ffd700",
    marginBottom: 10,
  },
  bestStreak: {
    fontSize: 20,
    color: "#ff6400",
    marginBottom: 10,
    fontWeight: "bold",
  },
  nearMissTotal: {
    fontSize: 20,
    color: "#ffff00",
    marginBottom: 20,
    fontWeight: "bold",
  },
  restartButton: {
    borderRadius: 25,
    overflow: "hidden",
    marginTop: 10,
  },
  restartGradient: {
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  restartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
});
