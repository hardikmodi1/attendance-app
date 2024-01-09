import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

export default function CompleteSchoolSetup() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center", flex: 1 },
});
