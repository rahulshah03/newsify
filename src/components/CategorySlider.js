import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../colors";

const CATEGORY = [
  "health",
  "sports",
  "business",
  "entertainment",
  "science",
  "technology",
];

const CategorySlider = ({ searchByCategory, category, setCategory }) => {
  const [slectCategory, setSelectCategory] = useState("health");

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}
    >
      {CATEGORY.map((cate) => (
        <TouchableWithoutFeedback
          key={cate}
          onPress={() => {
            setCategory(cate);
            searchByCategory(cate);
          }}
        >
          <View
            style={[
              styles.item,
              {
                borderBottomColor: category === cate ? colors.darkGray : "#fff",
              },
            ]}
          >
            <Text style={styles.text}>{cate}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  item: {
    marginHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "700",
  },
});
