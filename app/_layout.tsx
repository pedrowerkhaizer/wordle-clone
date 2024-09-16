import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { 
  useFonts,
  FrankRuhlLibre_900Black,
  FrankRuhlLibre_800ExtraBold,
  FrankRuhlLibre_500Medium,
 } from "@expo-google-fonts/frank-ruhl-libre";
 import { GestureHandlerRootView } from "react-native-gesture-handler";
 import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";


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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
