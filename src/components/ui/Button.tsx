import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { Pressable, type PressableProps } from "react-native";

interface ButtonProps extends Omit<PressableProps, "children"> {
  label: string;
  className?: string;
}

export function Button({ label, className, ...props }: ButtonProps) {
  return (
    <Pressable
      className={cn("items-center rounded-lg bg-blue-600 px-6 py-3", className)}
      {...props}
    >
      <Text className="font-semibold text-white">{label}</Text>
    </Pressable>
  );
}
