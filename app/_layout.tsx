import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PretendardBlack: require("../assets/fonts/Pretendard-Black.otf"),
    PretendardBold: require("../assets/fonts/Pretendard-Bold.otf"),
    PretendardExtraBold: require("../assets/fonts/Pretendard-ExtraBold.otf"),
    PretendardLight: require("../assets/fonts/Pretendard-Light.otf"),
    PretendardMedium: require("../assets/fonts/Pretendard-Medium.otf"),
    PretendardRegular: require("../assets/fonts/Pretendard-Regular.otf"),
    PretendardSemiBold: require("../assets/fonts/Pretendard-SemiBold.otf"),
    PretendardThin: require("../assets/fonts/Pretendard-Thin.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="#191919" barStyle="light-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
