import { useLayoutEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import { Link, useNavigation } from "expo-router";
import { Text, View } from "../components/Themed";

export default function NotFoundScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Oops!",
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link style={styles.link} href="/(tabs)" asChild>
          <Pressable>
            <Text style={styles.linkText}>Go to home screen!</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
