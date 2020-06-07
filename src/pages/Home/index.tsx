import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Home = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate("Points", { uf, city });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        style={styles.container}
        source={require("../../assets/home-background.png")}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>
              Seu markeplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coletas de forma efetiva.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TextInput
            onChangeText={setUf}
            value={uf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            style={styles.input}
            placeholder="Digite a UF"
          />
          <TextInput
            onChangeText={setCity}
            value={city}
            autoCorrect={false}
            style={styles.input}
            placeholder="Digite a Cidade"
          />
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFFFFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
