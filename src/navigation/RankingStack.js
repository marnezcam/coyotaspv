import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoriteScreen, RankingScreen } from "../screens/RankingScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator;

export function RankingStack() {
  return (
    <Stack.Navigator>
      <Stack.screen
        name={screen.ranking.ranking}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
}
