import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";
import { navigate } from "../../RootNavigation";

const NewsHeader = ({ news }) => {
  return (
    <ImageBackground
      source={{ uri: news.urlToImage }}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.headlineContainer}>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>News of the day</Text>
          <View style={styles.tagOverlay}></View>
        </View>

        <Text style={styles.headline}>{news.title}</Text>
        <TouchableWithoutFeedback onPress={() => navigate("news", { news })}>
          <View style={styles.linkContainer}>
            <Text style={styles.link}>Learn More </Text>
            <AntDesign name="arrowright" size={24} color={colors.white} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

export default NewsHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    backgroundColor: "coral",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  headlineContainer: {
    position: "absolute",
    bottom: 40,
    left: 30,
    zIndex: 10,
    right: 30,
  },
  tagContainer: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 100,
    width: 140,
    overflow: "hidden",
    marginBottom: 20,
  },
  tagOverlay: {
    position: "absolute",
    width: "200%",
    height: "200%",
    backgroundColor: colors.white,
    opacity: 0.5,
  },
  tag: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
  headline: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 15,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "700",
    alignItems: "center",
    marginRight: 5,
  },
});
