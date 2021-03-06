import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Image
        source={require("../assets/success.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text>Number of Rounds:{props.roundsNumber}</Text>
      <Text>Number was:{props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOverScreen;
