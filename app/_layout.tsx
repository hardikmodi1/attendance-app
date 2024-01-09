import { Stack } from "expo-router";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "../src/apolloClient";

export const unstable_settings = {
  initialRouteName: "(unauth)/registerSchool",
};

const theme = createTheme({
  lightColors: {
    primary: "hsl(24, 100%, 46.5%)",
  },
  mode: "light",
});

export default function RootLayout() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(unauth)" />
          <Stack.Screen name="(auth)" />
        </Stack>
        <StatusBar />
      </ThemeProvider>
    </ApolloProvider>
  );
}
