import { Loading } from '@/components/loading';
import { defaultTheme } from '@/styles/themes/default';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Slot } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <View
            style={{
              flex: 1,
              backgroundColor: defaultTheme.colors['gray-600'],
            }}
          >
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <Slot />
          </View>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
