import { SafeScreen } from "@/components/ui/SafeScreen";
import { Text } from "@/components/ui/Text";
import { View } from "react-native";

export default function Profile() {
  return (
    <SafeScreen>
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-2xl font-bold">Profile</Text>
      </View>
    </SafeScreen>
  );
}
