import { SafeScreen } from "@/components/ui/SafeScreen";
import { Text } from "@/components/ui/Text";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

export default function SignUp() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignUp = async () => {
    if (!isLoaded) return;
    try {
      const result = await signUp.create({ emailAddress: email, password });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/(app)");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Sign up failed";
      setError(message);
    }
  };

  return (
    <SafeScreen>
      <View className="flex-1 justify-center px-8">
        <Text className="mb-8 text-center text-3xl font-bold">Sign Up</Text>
        {error ? <Text className="mb-4 text-center text-red-500">{error}</Text> : null}
        <TextInput
          className="mb-4 rounded-lg border border-gray-300 px-4 py-3"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="mb-6 rounded-lg border border-gray-300 px-4 py-3"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable className="items-center rounded-lg bg-blue-600 py-3" onPress={onSignUp}>
          <Text className="font-semibold text-white">Sign Up</Text>
        </Pressable>
        <Link href="/(auth)/sign-in" className="mt-4 text-center text-blue-500">
          Already have an account? Sign in
        </Link>
      </View>
    </SafeScreen>
  );
}
