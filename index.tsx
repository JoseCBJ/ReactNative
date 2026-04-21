import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//import logo2 from "../assets/images/icon.png";

export default function HomeScreen() {
  const aoPressionar = () => {
    Alert.alert(
      "Sucesso!",
      "Você acaba de criar sua primeira interação no Expo!",
    );
  };
  const pressionandob1 = () => {
    Alert.alert("Sucesso", "Botão 1 correto!");
  };
  const pressionandob2 = () => {
    Alert.alert("Sucesso", "Botao 2 correto!");
  };
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };
  const decrementar = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    } else {
      Alert.alert("Contagem chegou a zero!");
    }
  };
  const resetar = () => {
    setContagem(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, Mundo Expo! 🚀</Text>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo2}
        />

        <Text style={styles.titulo}>Contador Expo</Text>
        <Text style={styles.numContador}>{contagem}</Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.btMenos} onPress={decrementar}>
            <Text style={styles.textoBtCont}>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btMais} onPress={incrementar}>
            <Text style={styles.textoBtCont}>+1</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btReset} onPress={resetar}>
          <Text style={styles.textoBtCont}>Zerar contador</Text>
        </TouchableOpacity>
      </View>
      {/* Fim do Card */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#BBBBBB",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#001aff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  botao1: {
    backgroundColor: "#1eff00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao1: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  botao2: {
    backgroundColor: "#fbff00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao2: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  numContador: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#1eff00",
    marginBottom: 40,
  },
  btMenos: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  btMais: {
    backgroundColor: "#1eff00",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  btReset: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBtCont: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  logo2: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: "90%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
