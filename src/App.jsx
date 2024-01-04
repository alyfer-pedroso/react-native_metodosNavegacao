import "react-native-gesture-handler";
import { SafeAreaView, Text } from "react-native";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";

export default (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <TelaA />
    <TelaB />
    <TelaC />
  </SafeAreaView>
);
