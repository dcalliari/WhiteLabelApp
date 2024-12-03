import { StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Text } from '@/components/Themed';
import brandConfig from '@/config';


export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={[styles.container, {backgroundColor: brandConfig.primaryColor}]}>
      <Image source={brandConfig.images.logo} style={{ width: brandConfig.logoWidth, height: brandConfig.logoHeight }} />
      <Text style={styles.title}>{brandConfig.name}</Text>
      <Text style={styles.description}>{brandConfig.description}</Text>
      <Button title={brandConfig.buttonText} onPress={() => {}} />
      {brandConfig.additionalTexts.map((text, index) => (
        <Text key={index} style={styles.additionalText}>{text}</Text>
      ))}
      {brandConfig.extraButtons.map((buttonText, index) => (
        <Button key={index} title={buttonText} onPress={() => {}} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  additionalText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
});