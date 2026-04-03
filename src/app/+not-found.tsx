import { Text } from "@/components/ui/Text";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-2xl font-bold">Screen not found</Text>
        <Link href="/" className="mt-4 text-blue-500">
          Go home
        </Link>
      </View>
    </>
  );
}
