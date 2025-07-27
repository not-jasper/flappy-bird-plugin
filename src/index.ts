import { findByStoreName } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import App from "../assets/webview";

const UserStore = findByStoreName("UserStore");

export const assetsURL = "https://not-jasper.github.io/flappybird/";

export function newGameSuggestionURL() {
  const user = UserStore.getCurrentUser();
  const params = new URLSearchParams({
    title: "[Game Suggestion]: Flappy Bird",
    labels: "game suggestion",
    template: "game_suggestion.yml",
    "discord-username": `@${user.username}${user.discriminator !== "0" ? `#${user.discriminator}` : ""}`
  });
  return `https://github.com/not-jasper/flappy-bird-plugin/issues/new?${params}`;
}

export const vstorage = storage as {
  settings: {
    gameUrl: string;
  };
};

export const onLoad = () => {
  vstorage.settings ??= {
    gameUrl: "https://not-jasper.github.io/flappybird/"
  };
};

export const settings = App;
