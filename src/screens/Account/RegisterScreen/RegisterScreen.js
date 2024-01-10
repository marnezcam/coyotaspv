import React from "react";
import { View, Text } from "react-native";
import { Image } from "@rneui/base";
import { RegisterForm } from "../../../components/Auth/RegisterForm/RegisterForm";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <View>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </View>
  );
}
