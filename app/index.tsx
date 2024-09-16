import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from '@/assets/images/wordle-icon.svg';
import { Link } from "expo-router";
import { format } from "date-fns";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";

export default function Index() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background;
  const textColor = Colors[colorScheme ?? "light"].text;
  const textGray = Colors[colorScheme ?? "light"].textGray;

  return (
    <View style={[styles.container, {backgroundColor}]}>

      <View style={styles.header}>
        <Icon width={100} height={70} />
        <Text style={[styles.title, {color: textColor}]}>Wordle</Text>
        <Text style={[styles.text, {color: textGray}]}>Get a 5-letter word in 6 tries!</Text>
      </View>
      
      <View style={styles.menu}>
        <Link href={'/game'} style={[styles.button, {backgroundColor: textColor, borderColor: textColor}]} asChild>
          <TouchableOpacity> 
            <Text style={[styles.buttonText, {color: backgroundColor}]}>Play</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={[styles.button, {borderColor: textColor}]}>
          <ThemedText style={styles.buttonText}>Settings</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {borderColor: textColor}]}>
          <ThemedText style={styles.buttonText}>Subscribe</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <Text style={styles.footerDate}>{format(new Date(), "MMMM d, yyyy")}</Text>
          <Text style={styles.footerText}>\</Text>
          <Text style={styles.footerText}>v1.0.0</Text>
        </View>
        <Text style={styles.footerText}>Made with ❤️ by <Text style={{fontFamily: "FrankRuhlLibre_800ExtraBold"}}>@pedrowerkhaizer</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    gap: 40,
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: "FrankRuhlLibre_800ExtraBold",
  },
  text: {
    fontSize: 26,
    color: "#888",
    textAlign: "center",
    fontFamily: "FrankRuhlLibre_500Medium",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 30,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    fontFamily: "FrankRuhlLibre_500Medium",
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  footer: {
    position: "absolute",
    bottom: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontFamily: "FrankRuhlLibre_500Medium",
  },
  footerDate: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontFamily: "FrankRuhlLibre_800ExtraBold",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  }
});
