import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.leaflet.app',
  appName: 'leaflet',
  webDir: 'dist/leaflet',
  server: {
    androidScheme: 'https'
  }
};

export default config;
