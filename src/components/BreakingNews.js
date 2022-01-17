import { StyleSheet, Text, View } from "react-native";
import colors from "../colors";
import NewsItem from "./NewsItem";

const BreakingNews = ({ headlines }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Headlines</Text>
      {headlines.map((news, i) => (
        <NewsItem key={i} news={news} />
      ))}
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.dark,
    marginBottom: 25,
  },
});
