import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../colors";
import BreakingNews from "../components/BreakingNews";
import NewsHeader from "../components/NewsHeader.js";

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [topNews, setTopNews] = useState(null);

  useEffect(() => {
    const getHeadlines = async () => {
      try {
        const config = {
          headers: {
            "X-Api-Key": "fc3caef6d80043009965967862fca491",
          },
        };
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?language=en",
          config
        );
        setTopNews(response.data.articles[0]);
        setHeadlines(
          response.data.articles.slice(1, response.data.articles.length)
        );
      } catch (err) {
        console.log(err.response);
      }
    };

    getHeadlines();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {topNews && <NewsHeader news={topNews} />}
      {headlines.length !== 0 && <BreakingNews headlines={headlines} />}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
