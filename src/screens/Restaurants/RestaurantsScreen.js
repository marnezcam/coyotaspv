import React from "react";
import { View, Text, Button } from "react-native";
import { screen } from "../../utils";
//Nota: En caso de que los props no funcionen entonces se puede pedir la info atravez de un hook
//import {useNavigation} from "@react-navigation/native";
//const navigation = useNavigation();

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const goToAddRestaurant = () => {
    //En este caso nosotros vamos a una screen que se encuentra en la misma stack.
    //navigation.navigate(screen.restaurant.addRestaurant);

    //Este metodo de acontinuacion se utiliza cuando vamos a viajar a otra stack
    navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };
  return (
    <View>
      <Text>Estamos en la screen RestaurantsScreen</Text>
      <Button title="Este es un boton" onPress={goToAddRestaurant} />
    </View>
  );
}
