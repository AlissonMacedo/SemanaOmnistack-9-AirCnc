import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import styles from "../../styles";

import api from "../../services/api";

import logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [tech, setTech] = useState("");
  const [ifexists, setIfExists] = useState(false);

  async function handleSubmit() {
    setIfExists(false);
    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;

    if (response.data.messege) {
      setIfExists(true);

      alert("Usuário já existe");
    }

    console.log(_id);
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>TECNOLOGIAS *</Text>

        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="words"
          autoCorrect={false}
          value={tech}
          onChangeText={setTech}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
          <Text style={styles.buttomText}>Encontrar Spots</Text>
        </TouchableOpacity>
        {ifexists ? <Text>Usuário já existe!</Text> : null}
      </View>
    </KeyboardAvoidingView>
  );
}
