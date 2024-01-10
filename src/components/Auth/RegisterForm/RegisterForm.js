import React from "react";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "@rneui/base";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-comunity" name="at" iconStyle={styles.icon} />
        }
      />
      <Text>RegisterForm</Text>
    </View>
  );
}
