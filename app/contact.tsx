import cappuccino from "@/assets/images/menu/cappuccino.png";
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.headerImage} source={cappuccino} />
      <View style={styles.infoContainer}>
        <Text style={styles.headerTitle}>Coffee Shop</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>555 Coffee Lane</Text>

          <Text style={styles.text}>Kansas City, KS 55555-1234</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Phone:</Text>
          <Pressable onPress={() => Linking.openURL(`tel:555-555-5555`)}>
            {" "}
            <Text style={[styles.text, styles.textUnderline]}>
              555-555-5555
            </Text>
          </Pressable>
          <View style={styles.smsContainer}>
            <Text style={styles.text}>or</Text>
            <Pressable onPress={() => Linking.openURL(`sms:555-555-5555`)}>
              {" "}
              <Text style={[styles.text, styles.textUnderline]}>
                Click Here To Text
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hours:</Text>
          <Text style={styles.text}>Open 6am to 4pm daily</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 14,
  },
  headerImage: {
    width: "100%",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 10,
    marginLeft: 20,
  },
  textContainer: {
    flexDirection: "column",
    gap: 1,
  },
  smsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 600,
  },
  text: {
    fontSize: 16,
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
});
