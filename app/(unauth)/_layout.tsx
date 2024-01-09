import { Stack } from "expo-router";

export default function UnAuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register-school" />
      <Stack.Screen name="complete-school-setup" />
    </Stack>
  );
}
