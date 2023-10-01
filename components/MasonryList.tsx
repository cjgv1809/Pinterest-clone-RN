import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { Text, View } from "../components/Themed";
import Pin from "./Pin";

type MasonryListProps = {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
};

const MasonryList = ({ pins }: MasonryListProps) => {
  const width = useWindowDimensions().width; // width of the device
  const numColumns = Math.ceil(width / 350); // 350 is the width of the pin component

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns), (_, index) => index).map(
          (_, colIndex) => (
            <TouchableOpacity key={colIndex} style={styles.column}>
              {pins
                .filter((_, index) => index % numColumns === colIndex)
                .map((pin) => (
                  <Pin key={pin.id} pin={pin} />
                ))}
            </TouchableOpacity>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  column: {
    flex: 1,
  },
});
