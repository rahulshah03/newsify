import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { ImageBackground, ScrollView } from "react-native";
import colors from "../colors";
import { AntDesign } from "@expo/vector-icons";
import NewsItem from "../components/NewsItem";
import { navigate } from "../../RootNavigation";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useScrollToTop } from "@react-navigation/native";

const SOURCES = [
  "the-times-of-india",
  "cnn",
  "the-hindu",
  "fox-news",
  "google-news",
  "nbc-news",
  "the-verge",
];

const News = ({
  route: {
    params: { news },
  },
}) => {
  const [popularNews, setPopularNews] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const getFromSource = async () => {
      try {
        if (news) {
          const config = {
            headers: {
              "X-Api-Key": "fc3caef6d80043009965967862fca491",
            },
          };
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${
              SOURCES[Math.floor(Math.random() * SOURCES.length)]
            }&language=en`,
            config
          );
          setPopularNews(response.data.articles);
        }
      } catch (err) {
        console.log(err.response);
      }
    };

    getFromSource();
  }, []);

  if (!news) {
    return null;
  }
  return (
    <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => navigate("home")}>
        <AntDesign
          name="arrowleft"
          size={28}
          color={colors.white}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>

      <ImageBackground
        source={{ uri: news.urlToImage }}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>{news.title}</Text>
        </View>
        <View style={styles.overlay}></View>
      </ImageBackground>
      <View style={styles.details}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.time}>{moment(news.publishedAt).fromNow()}</Text>
          <Text style={styles.author}>
            - {news.author ? news.author : "Anonymous"}
          </Text>
          <Text style={styles.description}>{news.description}</Text>
          <Text>Read More</Text>
        </View>
        <View>
          {popularNews.length !== 0 ? (
            <>
              <Text style={styles.source}>
                News you might be interested in.
              </Text>
              {popularNews.map((news) => (
                <NewsItem key={news.title} news={news} newsRef={ref} />
              ))}
            </>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 500,
    overflow: "hidden",
  },
  headlineContainer: {
    position: "absolute",
    bottom: 80,
    left: 30,
    zIndex: 10,
    right: 30,
  },
  icon: {
    zIndex: 100,
    position: "absolute",
    top: 40,
    left: 30,
  },
  headline: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 15,
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    opacity: 0.7,
  },
  details: {
    top: -50,
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  time: {
    color: colors.darkGray,
    fontWeight: "500",
    marginBottom: 5,
  },
  author: {
    color: colors.darkGray,
    fontWeight: "500",
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 40,
  },
  description: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.dark,
    fontWeight: "500",
    marginBottom: 10,
  },
  source: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
    color: colors.dark,
  },
});
