import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LandingPage() {
  return (
    <View>
      <Text>Landing Page</Text>
      <Text>Landing Page</Text>
      <Text>Landing Page</Text>
      <Link href="/(unauth)/register-school">Register</Link>
    </View>
  );
}
