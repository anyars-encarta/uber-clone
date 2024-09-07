import { Stack } from 'expo-router';
import 'react-native-reanimated';

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}

export default TabsLayout