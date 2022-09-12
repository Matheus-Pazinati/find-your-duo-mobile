import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React-Native</Text>
      <StatusBar style="auto" />

      <Button text="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
