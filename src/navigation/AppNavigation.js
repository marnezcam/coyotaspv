import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantStack } from "./RestaurantStack";
import { FavoriteStack } from "./FavoritesStack";
import { screen } from "../utils";

import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { Icon } from "@rneui/base";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, //Oculta el nombre de las Screens
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurante" }}
      />

      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchScreen}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  }
  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }
  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }
  if (route.name === screen.account.tab) {
    iconName = "home-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
