import { StyleSheet, ScrollView, Image } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import pins from "../../assets/data/pins";
import { Text, View } from "../../components/Themed";
import MasonryList from "../../components/MasonryList";

function ProfileScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icons}>
            <Feather name="share" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
          <Image
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
            }}
            style={styles.image}
          />
          <Text style={styles.title}>Tab Two</Text>
          <Text style={styles.subtitle}>123 Followers | 1234 Following</Text>
        </View>

        <MasonryList pins={pins} />
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    margin: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181818",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
});
