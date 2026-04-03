import { SafeScreen } from "@/components/ui/SafeScreen";
import { Text } from "@/components/ui/Text";
import { View } from "react-native";

export default function Home() {
  return (
    <SafeScreen>
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-2xl font-bold">Home</Text>
      </View>
    </SafeScreen>
  );
}
