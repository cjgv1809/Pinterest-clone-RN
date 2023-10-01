import { StyleSheet, Button, Image, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View } from "../../components/Themed";

const CreatePin = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (image) {
      setImage(image);
    }
  }, [image]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // only images are allowed
      allowsEditing: true,
      quality: 1,
    });

    if (!result?.canceled) {
      setImage(result?.assets?.[0]?.uri);
    }
  };

  const onSubmit = () => {
    console.warn("Submit");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Button title="Upload your Pin" onPress={pickImage} color="#E60023" />

        {image && (
          <>
            <Image source={{ uri: image }} style={styles.image} />
            <TextInput
              placeholder="Enter a title (Required)"
              style={styles.input}
              onChangeText={setTitle}
              value={title}
            />
            <Button
              title="Submit"
              onPress={onSubmit}
              color="#E60023"
              disabled={!title}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginVertical: 20,
    borderRadius: 20,
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    width: "100%",
  },
});
