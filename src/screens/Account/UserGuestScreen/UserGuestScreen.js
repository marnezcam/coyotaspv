import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Text, Image } from "@rneui/base";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text>Consultar tu perfil de 5 tenedores</Text>
    </ScrollView>
  );
}
