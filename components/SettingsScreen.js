import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsScreen({ onClose }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const openPrivacyPolicy = () => {
    // In a real app, this would open your hosted privacy policy
    // For now, we'll show an alert
    Alert.alert(
      "Privacy Policy",
      "Privacy Policy will open in browser. Please host PRIVACY_POLICY.md on your website and update the URL in app.json",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "View Sample",
          onPress: () => setShowPrivacy(true),
        },
      ]
    );
  };

  const openTermsOfService = () => {
    Alert.alert(
      "Terms of Service",
      "Terms of Service will open in browser. Please host TERMS_OF_SERVICE.md on your website and update the URL in app.json",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "View Sample",
          onPress: () => setShowTerms(true),
        },
      ]
    );
  };

  const openSupport = () => {
    Linking.openURL("mailto:support@appsquery.com?subject=Nebula Dash Support");
  };

  if (showPrivacy) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#0a0015", "#1a0a30", "#2a1550"]}
          style={styles.gradient}
        >
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.documentText}>
              {`Last Updated: October 29, 2025

Introduction

AppsQuery ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.

Information We DO NOT Collect

• No Personal Information
• No Location Data
• No Camera/Microphone Access
• No Contact Information
• No Financial Information

Data Storage

All game data is stored locally on your device. We do not maintain any servers or databases that store user information.

Children's Privacy

Nebula Dash is suitable for all ages and does not knowingly collect information from children under 13.

Contact Us

Email: support@appsquery.com
Company: AppsQuery

By using Nebula Dash, you agree to this Privacy Policy.`}
            </Text>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setShowPrivacy(false)}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

  if (showTerms) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#0a0015", "#1a0a30", "#2a1550"]}
          style={styles.gradient}
        >
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.title}>Terms of Service</Text>
            <Text style={styles.documentText}>
              {`Last Updated: October 29, 2025

1. Acceptance of Terms

By downloading, installing, or using Nebula Dash, you agree to be bound by these Terms of Service.

2. Description of Service

Nebula Dash is a free, offline mobile game provided by AppsQuery for entertainment purposes only.

3. License and Restrictions

You may NOT:
• Reverse engineer or decompile the App
• Copy or create derivative works
• Use for illegal purposes
• Remove proprietary notices

4. Intellectual Property

All content is owned by AppsQuery and protected by international copyright laws.

5. No Warranty

THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.

6. Contact Information

Email: support@appsquery.com
Company: AppsQuery

By using Nebula Dash, you agree to these Terms of Service.`}
            </Text>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setShowTerms(false)}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0a0015", "#1a0a30", "#2a1550"]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>⚙️ Settings</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Version:</Text>
              <Text style={styles.infoValue}>1.0.0</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Developer:</Text>
              <Text style={styles.infoValue}>AppsQuery</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Legal</Text>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={openPrivacyPolicy}
            >
              <Text style={styles.menuText}>📄 Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={openTermsOfService}
            >
              <Text style={styles.menuText}>📋 Terms of Service</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <TouchableOpacity style={styles.menuItem} onPress={openSupport}>
              <Text style={styles.menuText}>✉️ Contact Support</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.privacyNote}>🔒 Your Privacy Matters</Text>
            <Text style={styles.privacyText}>
              Nebula Dash does not collect, store, or share any personal data.
              All game progress is stored locally on your device.
            </Text>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>Made with ❤️ by AppsQuery</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "#00f",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8b5cf6",
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(139, 92, 246, 0.3)",
  },
  infoLabel: {
    fontSize: 16,
    color: "#a78bfa",
  },
  infoValue: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  menuItem: {
    backgroundColor: "rgba(139, 92, 246, 0.2)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.5)",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  privacyNote: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10b981",
    textAlign: "center",
    marginBottom: 10,
  },
  privacyText: {
    fontSize: 14,
    color: "#a78bfa",
    textAlign: "center",
    lineHeight: 20,
  },
  closeButton: {
    backgroundColor: "#8b5cf6",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#8b5cf6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  documentText: {
    color: "#e0e7ff",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#8b5cf6",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
