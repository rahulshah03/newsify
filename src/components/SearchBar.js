import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../colors";
import { useState } from "react";

const SearchBar = ({ searchNews }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color={colors.black} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        value={value}
        onChangeText={(val) => setValue(val)}
        returnKeyType="search"
        onSubmitEditing={() => {
          if (value !== "") {
            console.log("object");
            searchNews(value);
            setValue("");
          }
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 30,
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
});
