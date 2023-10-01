import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import useImage from "../hooks/useImage";

type Props = {
  pin: {
    id: string;
    title: string;
    image: string;
  };
};

type NavigationProp = {
  navigate: (screen: string, params?: unknown) => void;
};

const Pin = ({ pin: { id, title, image } }: Props) => {
  const ratio = useImage(image);
  const navigation = useNavigation<NavigationProp>();

  const goToPinPage = () => {
    navigation.navigate("pin", { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={() => console.warn("Like")} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Pin;

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 5,
    borderRadius: 50,
  },
});
