import { Stack, stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    <stack.Screen
    name="index"
    options={{headerShown:false}}/>
    <Stack.Screen
    name="Home"
    options={{headerShown:false}}/>
    </Stack>

  );
}