import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { navigate } from "../../RootNavigation";
import colors from "../colors";
import moment from "moment";

const NewsItem = ({ news, newsRef }) => {
  if (!news) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate("news", { news });
        if (newsRef) newsRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: news.urlToImage }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>{news.title.split(" - ")[0]}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.time}>
              {moment(news.publishedAt).fromNow()}
            </Text>
            <Text style={styles.source}>{news.source.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },
  imgContainer: {
    height: 90,
    width: 90,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.darkGray,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    flex: 1,
    justifyContent: "space-between",
  },
  headline: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.dark,
    lineHeight: 22,
  },
  infoContainer: {
    flexDirection: "row",
  },
  time: {
    color: colors.darkGray,
    fontWeight: "500",
  },
  source: {
    color: colors.darkGray,
    fontWeight: "500",
    marginLeft: 20,
  },
});
