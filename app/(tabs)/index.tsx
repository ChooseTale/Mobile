import WebView from "react-native-webview";
import { Platform, SafeAreaView } from "react-native";
import Android from "@/styles/Android";
import { BASE_URL } from "@/constants/Common";

const Webview_test = () => {
  const customUserAgent =
    Platform.OS === "android"
      ? "Mozilla/5.0 (Linux; Android 10; Android SDK built for x86) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36"
      : "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.6099.119 Mobile/15E148 Safari/604.1";

  return (
    <SafeAreaView
      style={[Android.AndroidSafeArea, { backgroundColor: "#191919" }]}
    >
      <WebView
        source={{ uri: `${BASE_URL}/game-list` }}
        userAgent={customUserAgent}
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
      />
    </SafeAreaView>
  );
};

export default Webview_test;
