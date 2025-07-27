import { React, ReactNative } from "vendetta";
const { View } = ReactNative;
const { WebView } = ReactNative;

export default {
  onLoad() {
    const FlappyBirdScreen = () => (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "https://not-jasper.github.io/flappybird/" }}
          style={{ flex: 1 }}
        />
      </View>
    );

    const Navigation = vendetta.ui?.Navigation ?? vendetta.navigation;
    Navigation?.push("Flappy Bird", FlappyBirdScreen);
  },
  onUnload() {}
};
