import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../colors";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import NewsItem from "../components/NewsItem";
import CategorySlider from "../components/CategorySlider";

const Search = () => {
  const [queryNews, setQueryNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
  const [category, setCategory] = useState("health");
  const [info, setInfo] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {
    setCategory("health");
    setQueryNews([]);
    setInfo("");
    const getInitialCategoryNews = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?language=en&category=health";
      const results = await getNews("", url);
      setCategoryNews(results);
    };

    getInitialCategoryNews();
  }, [isFocused]);

  const getNews = async (query, url) => {
    try {
      const config = {
        headers: {
          "X-Api-Key": "fc3caef6d80043009965967862fca491",
        },
      };
      const response = await axios.get(url, config);
      if (response.data.articles.length === 0) {
        setInfo(`No results found for ${query}`);
      }
      return response.data.articles;
    } catch (error) {
      console.log(error.response);
    }
  };

  const searchNews = async (query) => {
    setQueryNews([]);
    setInfo("");
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&language=en`;
    const results = await getNews(query, url);
    setQueryNews(results);
  };

  const searchByCategory = async (ctgry) => {
    setCategoryNews([]);
    setCategory(ctgry);
    setQueryNews([]);
    setInfo("");

    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${ctgry}`;
    const results = await getNews("", url);
    setCategoryNews(results);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.mainHeading}>Discover</Text>
          <Text style={styles.subHeading}>News from all over the world</Text>
        </View>
        <SearchBar searchNews={searchNews} />
        <Text style={styles.info}>{info}</Text>

        {queryNews.length === 0 ? (
          <>
            <CategorySlider
              searchByCategory={searchByCategory}
              category={category}
              setCategory={setCategory}
            />
            {categoryNews.map((n) => (
              <NewsItem news={n} key={n.title} />
            ))}
          </>
        ) : (
          <>
            {queryNews.map((n) => (
              <NewsItem news={n} key={n.title} />
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  header: {
    marginTop: 80,
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.black,
    marginBottom: 5,
  },
  subHeading: {
    color: colors.darkGray,
  },
  info: {
    textAlign: "center",
    color: colors.darkGray,
  },
});
