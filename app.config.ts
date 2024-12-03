import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const brand = process.env.EXPO_PUBLIC_BRAND || 'casasBahia';
  const brandConfig = require(`./config/${brand}.json`);

  return {
    ...config,
    name: brandConfig.name,
    slug: brandConfig.name,
    version: "1.0.0",
    orientation: "portrait",
    icon: `./assets/images/${brand}/icon.png`,
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: `./assets/images/${brand}/splash-icon.png`,
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: `./assets/images/${brand}/adaptive-icon.png`,
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: `./assets/images/${brand}/favicon.png`
    },
    plugins: [
      "expo-router"
    ],
    experiments: {
      typedRoutes: true
    }
  };
};