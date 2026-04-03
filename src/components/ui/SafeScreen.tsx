import { cn } from "@/lib/utils";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function SafeScreen({ children, className }: SafeScreenProps) {
  return (
    <SafeAreaView className={cn("flex-1 bg-white", className)}>
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
}
