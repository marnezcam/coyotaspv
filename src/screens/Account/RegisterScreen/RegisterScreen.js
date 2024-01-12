import React from "react";
import { View, Text } from "react-native";
import { Image } from "@rneui/base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth/RegisterForm/RegisterForm";
import { styles } from "./RegisterScreen.styles";

//Para corregir el error de que el teclado nos tapa los imputs se utiliza una libreria
//KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view"

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
