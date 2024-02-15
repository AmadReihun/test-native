import React from "react";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Pressable,
  useWindowDimensions,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    {/* <ScrollView style={styles.scrollView}> */}
    <View>
      <Text style={{ textAlign: "center" }}>testing image with url</Text>
      <Image
        style={{}}
        source={{
          width: 100,
          height: 100,
          uri: "https://picsum.photos/id/1/200/300",
        }}
      />
    </View>

    <View
      style={{
        height: "20%",
        padding: 20,
      }}>
      <View>
        <Text>testing areas</Text>
      </View>
      <Separator />
      <View style={{ backgroundColor: "blue", flex: 1, width: "50%" }} />
      <View style={{ backgroundColor: "red", flex: 1, width: "75%" }} />
    </View>

    <View>
      <Text style={styles.title}>Testing alert buttonnnn</Text>
      <Button title="Warning" onPress={() => alert("whyyy")} />
    </View>

    <Separator />

    <View>
      <Text>testing image with source</Text>
    </View>

    <View>
      <Text>testing Alert.alert</Text>
      <Button
        title="Login"
        onPress={() =>
          Alert.prompt("Login information", "username", (text) =>
            console.log(text)
          )
        }
      />
    </View>

    <View>
      <Text>testing Alert.prompt</Text>
      <Button
        title="Press meee"
        color="orange"
        onPress={() =>
          Alert.alert("Info", "Please click yes or now", [
            { text: "Yes" },
            { text: "No" },
          ])
        }
      />
    </View>

    <View>
      <Text style={{ textAlign: "center" }}>testing listing items</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>

    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>
    </View>
    {/* </ScrollView> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});

export default App;
