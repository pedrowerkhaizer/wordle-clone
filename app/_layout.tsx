import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { 
  useFonts,
  FrankRuhlLibre_900Black,
  FrankRuhlLibre_800ExtraBold,
  FrankRuhlLibre_500Medium,
 } from "@expo-google-fonts/frank-ruhl-libre";

 import { useEffect } from "react";
 import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

 //Load the fonts before hiding the splash screen
 SplashScreen.preventAutoHideAsync();

 export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    FrankRuhlLibre_900Black,
    FrankRuhlLibre_800ExtraBold,
    FrankRuhlLibre_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  </ThemeProvider>
  );
}
