import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.medionptg.app',
  appName: 'MediON',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000
    },
    GoogleAuth: {
      scopes: ["profile","email"],
      serverClientId: "1086877097278-sa9886gech7aqm1gk90jn8mj3bfg3p45.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
