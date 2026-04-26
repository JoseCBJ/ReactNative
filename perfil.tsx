import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
  const [nomeUsoario, setNomeUsuario] = useState("Jose");
  const alterarNome = () => {
    setNomeUsuario("Jose Programador 🚀");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo ao seu Perfil! 👤</Text>
      <Text style={styles.nome}>{nomeUsoario}</Text>
      <TouchableOpacity style={styles.btReset} onPress={alterarNome}>
        <Text style={styles.texto}>Editar Nome</Text>
      </TouchableOpacity>
      <Text style={styles.bio}>bio</Text>
      <Link href="./index" asChild>
        <TouchableOpacity style={styles.btReset}>
          <Text style={styles.texto}>Voltar para o menu</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: { color: "#FFF", fontSize: 20 },

  btReset: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#1eff00",
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  bio: {
    fontSize: 16,
    color: "#BBBBBB",
    marginTop: 5,
  },
});
