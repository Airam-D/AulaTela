import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const aoPressionar = () => {
    console.log("🚀 O botão foi apertado com sucesso!");
  };
  return (
    <LinearGradient
      colors={['#00A5FF', '#003681ff']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.buttonEntrar}
        onPress={() => console.log('Botão Login pressionado!')}
      >
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Transformando vidas através da
        tecnologia</Text>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={aoPressionar}
      >
        <Text style={styles.buttonText}>Conhecer projetos</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingBottom: 50,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#001f3f',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonEntrar: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#00d4ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 29,
  },
});