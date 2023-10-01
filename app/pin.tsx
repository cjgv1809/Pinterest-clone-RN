import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import pins from "../assets/data/pins";
import useImage from "../hooks/useImage";

type NavigationProp = {
  navigate: (screen: string, params?: unknown) => void;
  goBack: () => void;
};

type RouteProp = {
  params: {
    id: string;
  };
  key: string;
  name: string;
  path: string;
};

const PinScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    params: { id },
  } = useRoute<RouteProp>();

  const insets = useSafeAreaInsets(); // safe area insets for the device (notch, etc)

  const goBack = () => {
    navigation.goBack();
  };

  const pin = pins.find((pin) => pin.id === id);

  if (!pin) {
    return <Text>Pin not found</Text>;
  }

  const ratio = useImage(pin?.image);

  return (
    <>
      <StatusBar style="inverted" animated translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.root}>
            <Image
              source={{ uri: pin?.image }}
              style={[styles.image, { aspectRatio: ratio }]}
            />
            <Text style={styles.title}>{pin.title}</Text>
          </View>
          <Pressable
            onPress={goBack}
            style={[styles.backBtn, { top: insets.top + 20 }]}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 30,
  },
  backBtn: {
    position: "absolute",
    left: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 100,
  },
});
